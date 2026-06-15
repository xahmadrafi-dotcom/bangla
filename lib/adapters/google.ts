import { mockAdapter } from './mock'

export async function googleAdapter(prompt: string): Promise<string> {
  const apiKey = process.env.GOOGLE_AI_KEY
  if (!apiKey) {
    return mockAdapter('gemini', prompt)
  }

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: 'তুমি একটি সহায়ক AI। সব উত্তর বাংলায় দাও।' }],
        },
        contents: [{ parts: [{ text: prompt }] }],
      }),
    })

    if (!response.ok) {
      return mockAdapter('gemini', prompt)
    }

    const data = await response.json()
    return (
      data.candidates?.[0]?.content?.parts?.[0]?.text ??
      (await mockAdapter('gemini', prompt))
    )
  } catch {
    return mockAdapter('gemini', prompt)
  }
}
