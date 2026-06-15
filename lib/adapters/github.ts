import { mockAdapter } from './mock'

export async function githubAdapter(prompt: string): Promise<string> {
  const token = process.env.GITHUB_TOKEN
  if (!token) {
    return mockAdapter('github', prompt)
  }

  try {
    const response = await fetch(
      'https://models.inference.ai.azure.com/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [
            {
              role: 'system',
              content:
                'তুমি একটি code-focused AI। সব উত্তর বাংলায় দাও এবং code examples দিয়ে ব্যাখ্যা করো।',
            },
            { role: 'user', content: prompt },
          ],
        }),
      }
    )

    if (!response.ok) {
      return mockAdapter('github', prompt)
    }

    const data = await response.json()
    return data.choices?.[0]?.message?.content ?? (await mockAdapter('github', prompt))
  } catch {
    return mockAdapter('github', prompt)
  }
}
