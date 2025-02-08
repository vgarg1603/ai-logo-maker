const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


export const AiDesignIdea = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        { text: "Based on Logo of type {logoType} Generate a text prompt to create Logo for Logo title/brand name: {logoTitle} with description: {logoDesc} and referring to prompt : {logoPrompt}. Give me 4 to 5 suggestions of logo idea (each idea with maximum 4-5 words). Result in JSON format" },
      ],
    },
    {
      role: "model",
      parts: [
        { text: "```json\n{\n  \"logoSuggestions\": [\n   {\n      \"idea\": \"Abstract shape with growth\",\n      \"prompt\": \"Create a logo of type {logoType} for the brand {logoTitle} with the description {logoDesc}. Inspired by {logoPrompt}, suggest an abstract design featuring a shape that evokes growth or progress. The design should feel modern and professional.\"\n\n   },\n    {\n      \"idea\": \"Interconnected geometric elements\",\n       \"prompt\": \"Design a {logoType} logo for {logoTitle}, described as {logoDesc}. Referencing {logoPrompt}, the logo should consist of interconnected geometric elements to symbolize connection and strength. Maintain a clean and modern aesthetic.\"\n\n    },\n    {\n      \"idea\": \"Simplified icon with initial\",\n      \"prompt\": \"Create a {logoType} logo for {logoTitle}, with a brand description of {logoDesc}. Drawing from {logoPrompt}, conceptualize a simplified icon representing the brand, alongside the brand initial in a clear font. Prioritize clarity and simplicity.\"\n\n    },\n   {\n      \"idea\": \"Stylized lettering, organic touch\",\n        \"prompt\": \"For {logoTitle}, create a {logoType} logo, reflecting the description {logoDesc} . Building on {logoPrompt}, generate a logo using stylized lettering with an organic touch or a subtle nature-inspired element. Maintain a professional and appealing look.\"\n\n   },\n     {\n      \"idea\":\"Minimalist icon, bold typeface\",\n      \"prompt\":\"Develop a {logoType} logo for {logoTitle} whose brand description is {logoDesc}. Taking inspiration from {logoPrompt}, design a minimalist icon combined with a bold typeface. The logo should be memorable and impactful.\"\n\n    }\n  ]\n}\n```\n" },
      ],
    },
    {
      role: "user",
      parts: [
        { text: "Based on Logo of type Mascot logo Generate a text prompt to create Logo for Logo title/brand name: Indian restaurant with description: south indian restaurant and referring to prompt : \"Create a mascot-based logo featuring a friendly and approachable character, such as an animal, human figure, or mythical creature. Use vibrant colors, expressive features, and dynamic poses to convey energy and personality. Make the mascot the centerpiece of the design\". Give me 4 to 5 suggestions of logo idea (each idea with maximum 4-5 words). Result in JSON format" },
      ],
    },
    {
      role: "model",
      parts: [
        { text: "```json\n{\n  \"logoSuggestions\": [\n    {\n      \"idea\": \"Smiling elephant chef\",\n       \"prompt\": \"Create a Mascot logo for an Indian restaurant called Indian restaurant, specifically a South Indian restaurant. Following the prompt 'Create a mascot-based logo featuring a friendly and approachable character, such as an animal, human figure, or mythical creature. Use vibrant colors, expressive features, and dynamic poses to convey energy and personality. Make the mascot the centerpiece of the design', develop a smiling elephant chef mascot. The elephant should wear traditional Indian chef attire and hold a cooking utensil, conveying warmth and culinary expertise.\"\n    },\n    {\n      \"idea\": \"Playful monkey with dosa\",\n       \"prompt\": \"Design a Mascot logo for 'Indian restaurant,' a South Indian restaurant, using the prompt 'Create a mascot-based logo featuring a friendly and approachable character, such as an animal, human figure, or mythical creature. Use vibrant colors, expressive features, and dynamic poses to convey energy and personality. Make the mascot the centerpiece of the design'. The mascot should be a playful monkey character holding a dosa and displaying a cheerful expression. Use bright, appealing colors that reflect the vibrancy of Indian cuisine.\"\n    },\n    {\n      \"idea\": \"Friendly peacock with plate\",\n       \"prompt\":\"Design a Mascot logo for 'Indian restaurant,' a South Indian restaurant, referencing 'Create a mascot-based logo featuring a friendly and approachable character, such as an animal, human figure, or mythical creature. Use vibrant colors, expressive features, and dynamic poses to convey energy and personality. Make the mascot the centerpiece of the design'. The logo idea is a friendly peacock mascot holding a plate of South Indian dishes, showcasing its vibrant plumage and a welcoming pose.\"\n    },\n      {\n      \"idea\": \"Charming human chef mascot\",\n      \"prompt\": \"Craft a Mascot logo for 'Indian restaurant', a South Indian restaurant, with the guidance of 'Create a mascot-based logo featuring a friendly and approachable character, such as an animal, human figure, or mythical creature. Use vibrant colors, expressive features, and dynamic poses to convey energy and personality. Make the mascot the centerpiece of the design'. Create a charming human chef mascot with a welcoming smile, wearing traditional attire and holding a serving spoon, radiating friendliness and expertise.\"\n    },\n     {\n      \"idea\": \"Mythical tiger cook\",\n       \"prompt\":\"Develop a Mascot logo for 'Indian restaurant', a South Indian restaurant, inspired by 'Create a mascot-based logo featuring a friendly and approachable character, such as an animal, human figure, or mythical creature. Use vibrant colors, expressive features, and dynamic poses to convey energy and personality. Make the mascot the centerpiece of the design'. The logo should be a mythical tiger mascot with a toque (chef's hat), depicted mid-action with cooking utensils, blending strength with culinary charm.\"\n    }\n  ]\n}\n```\n" },
      ],
    },
  ],
});

export const AiLogoPrompt = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        { text: "Generate a text prompt to create Logo for Logo Title/Brand name: vFile, with description seamless file upload, with color combination of Cosmic Purple and include Generate a typography-based logo with stylish and creative text. Use a custom font or elegant letter arrangement, and experiment with bold initials, dynamic layouts, or handwritten styles. Incorporate subtle decorative elements if needed. design idea and referring to this logo prompt: Design a Typography logo for 'vFile,' a service for seamless file uploads, referring to 'Generate a typography-based logo with stylish and creative text. Use a custom font or elegant letter arrangement, and experiment with bold initials, dynamic layouts, or handwritten styles. Incorporate subtle decorative elements if needed.' Create an elegant, flowing 'vFile' text using a custom, handwritten-style font. The design should appear sophisticated and smooth, reflecting the seamless nature of the service. Give me result in JSON portal with prompt field only" },
      ],
    },
    {
      role: "model",
      parts: [
        { text: "```json\n{\n  \"prompt\": \"Create a typography-based logo for the brand 'vFile', a service focused on seamless file uploads. The logo should utilize a custom, handwritten-style font, aiming for an elegant and flowing aesthetic. The design should feel sophisticated and smooth, reflecting the seamless nature of the service. Consider a dynamic layout or subtle decorative elements to enhance the visual appeal. The color palette should be based on Cosmic Purple. Focus on creating a creative and stylish text-based logo that emphasizes the 'vFile' name in an unique and memorable way. Avoid complex icons or imagery; the focus should be on the typographical treatment.\"\n}\n```\n" },
      ],
    },
  ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
