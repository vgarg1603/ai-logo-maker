import { AiLogoPrompt } from "@/configs/AiModelConfig";
import { db } from "@/configs/FireBaseConfig";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { prompt, email, title, desc } = await req.json();

    // Validate input data
    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "Invalid prompt provided" }, { status: 400 });
    }
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Invalid email provided" }, { status: 400 });
    }
    if (!title || typeof title !== "string") {
      return NextResponse.json({ error: "Invalid title provided" }, { status: 400 });
    }
    if (!desc || typeof desc !== "string") {
      return NextResponse.json({ error: "Invalid description provided" }, { status: 400 });
    }

    // Generate AI text prompt for the logo
    const AiPromptResult = await AiLogoPrompt.sendMessage(prompt);
    const AiPromptResponse = JSON.parse(AiPromptResult.response.text());
    
    if (!AiPromptResponse || !AiPromptResponse.prompt) {
      return NextResponse.json({ error: "Failed to generate AI prompt" }, { status: 500 });
    }

    const AiPrompt = AiPromptResponse.prompt;

    // Generate logo using Hugging Face API
    const response = await axios.post(
      `https://api-inference.huggingface.co/models/strangerzonehf/Flux-Midjourney-Mix2-LoRA`,
      { inputs: AiPrompt },
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
          "Content-Type": "application/json",
        },
        timeout: 240000,
        responseType: "arraybuffer",
      }
    );

    // Convert response to Base64 image
    const buffer = Buffer.from(response.data, "binary");
    const base64Image = buffer.toString("base64");
    const base64ImageWithMime = `data:image/png;base64,${base64Image}`;

    // Save to Firebase Firestore
    const timestamp = Date.now().toString(); // or use UUID for better uniqueness
    await setDoc(doc(db, "users", email, "logos", timestamp), {
      image: base64ImageWithMime,
      title: title,
      desc: desc,
      createdAt: new Date().toISOString(),
    });

    // Return the generated image
    return NextResponse.json({ image: base64ImageWithMime });
  } catch (error) {
    console.error("Error generating AI logo:", error);
    return NextResponse.json(
      { error: "Failed to generate AI logo. Please try again." },
      { status: 500 }
    );
  }
}
