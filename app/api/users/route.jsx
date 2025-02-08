import { db } from "@/configs/FireBaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { userEmail, userName } = await req.json();

    try {
        console.log("userEmail:", userEmail);

        // Validate db and userEmail
        if (!db) throw new Error("Firestore db is not initialized.");
        if (!userEmail) throw new Error("Invalid userEmail provided.");

        // Check if the user exists
        const docRef = doc(db, "users", userEmail);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            // Return existing user data
            return NextResponse.json(docSnap.data());
        } else {
            // Create a new user
            const data = {
                name: userName,
                email: userEmail,
                credits: 5,
            };
            await setDoc(doc(db, "users", userEmail), data);

            return NextResponse.json(data);
        }
    } catch (e) {
        // Handle the error and return an appropriate response
        console.error("Error in POST handler:", e.message);
        return NextResponse.json(
            { error: `Failed to process the request: ${e.message}` },
            { status: 500 }
        );
    }
}
