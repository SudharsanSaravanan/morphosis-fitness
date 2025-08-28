export const callGroqApi = async (prompt) => {
  try {
    const res = await fetch("/api/groq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    if (!res.ok) {
      const { error } = await res.json();
      throw new Error(error || "Failed to fetch Groq response");
    }

    const data = await res.json();
    return data.result;
  } catch (err) {
    throw new Error(`Groq API error: ${err.message}`);
  }
};
