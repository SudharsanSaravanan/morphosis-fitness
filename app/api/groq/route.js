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
      model: "llama-3.1-8b-instant", // updated model
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 2000, // allow much longer responses
      stream: false,
    });

    return Response.json({
      result: chatCompletion.choices[0].message.content.trim(),
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
