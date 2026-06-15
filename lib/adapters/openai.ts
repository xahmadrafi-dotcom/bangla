import { mockAdapter } from './mock'

export async function openaiAdapter(prompt: string): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    return mockAdapter('gpt', prompt)
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + apiKey,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content:
              'তুমি একটি সহায়ক AI। সব উত্তর বাংলায় দাও।',
          },
          { role: 'user', content: prompt },
        ],
      }),
    })

    if (!response.ok) {
      return mockAdapter('gpt', prompt)
    }

    const data = await response.json()
    return data.choices?.[0]?.message?.content ?? (await mockAdapter('gpt', prompt))
  } catch {
    return mockAdapter('gpt', prompt)
  }
}
