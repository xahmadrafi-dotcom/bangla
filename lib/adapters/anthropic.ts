import { mockAdapter } from './mock'

export async function anthropicAdapter(prompt: string): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return mockAdapter('claude', prompt)
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1024,
        system: 'তুমি একটি সহায়ক AI। সব উত্তর বাংলায় দাও।',
        messages: [{ role: 'user', content: prompt }],
      }),
    })

    if (!response.ok) {
      return mockAdapter('claude', prompt)
    }

    const data = await response.json()
    return data.content?.[0]?.text ?? (await mockAdapter('claude', prompt))
  } catch {
    return mockAdapter('claude', prompt)
  }
}
