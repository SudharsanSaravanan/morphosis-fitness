import Groq from "groq-sdk";

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    if (!process.env.GROQ_API_KEY) {
      return Response.json(
        { error: "Groq API key is missing on the server." },
        { status: 500 }
      );
    }

    const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

    const chatCompletion = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 4096, // Increased to handle longer diet plans
      stream: false,
    });

    const content = chatCompletion.choices[0]?.message?.content?.trim();
    if (!content) {
      return Response.json(
        { error: "No content received from the API." },
        { status: 500 }
      );
    }

    return Response.json({ result: content });
  } catch (error) {
    console.error("Error generating diet plan:", error);
    return Response.json(
      { error: error.message || "Failed to generate diet plan." },
      { status: 500 }
    );
  }
}