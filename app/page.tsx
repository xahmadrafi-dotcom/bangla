'use client'

import { useState } from 'react'
import ModelPanel from '@/components/ModelPanel'
import ChatInput from '@/components/ChatInput'

type ModelResponse = {
  modelId: string
  modelName: string
  response: string
  status: 'mock' | 'live' | 'offline'
  color: string
}

const INITIAL_MODELS: ModelResponse[] = [
  { modelId: 'gpt', modelName: 'GPT-4o', response: '', status: 'mock', color: '#3B82F6' },
  { modelId: 'claude', modelName: 'Claude 3.5', response: '', status: 'mock', color: '#F97316' },
  { modelId: 'gemini', modelName: 'Gemini 1.5', response: '', status: 'mock', color: '#22C55E' },
  { modelId: 'github', modelName: 'GitHub Models', response: '', status: 'mock', color: '#A855F7' },
]

export default function HomePage() {
  const [models, setModels] = useState<ModelResponse[]>(INITIAL_MODELS)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (prompt: string) => {
    setIsLoading(true)
    setModels((prev) => prev.map((m) => ({ ...m, response: '' })))

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      })

      if (!res.ok) throw new Error('API error')

      const data = await res.json()
      setModels(data.responses)
    } catch {
      setModels((prev) =>
        prev.map((m) => ({
          ...m,
          response: 'সংযোগে সমস্যা হয়েছে। আবার চেষ্টা করুন।',
          status: 'offline' as const,
        }))
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="relative min-h-screen flex flex-col" style={{ background: '#050505' }}>
      <div className="relative z-10 flex flex-col min-h-screen max-w-5xl mx-auto w-full px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1
            className="text-5xl font-bold tracking-wider mb-2"
            style={{ color: '#C9A84C', textShadow: '0 0 40px rgba(201,168,76,0.3)' }}
          >
            OM AI
          </h1>
          <p
            className="text-xl bangla mb-3"
            style={{ color: '#F5F0E8', opacity: 0.85 }}
          >
            বাংলার কণ্ঠ
          </p>
          <p
            className="text-xs tracking-widest uppercase"
            style={{ color: '#C9A84C', opacity: 0.55 }}
          >
            Miracle Code™ — Think Beyond Time. Live Beyond Limits.
          </p>
        </header>

        {/* Model Grid */}
        <div className="grid grid-cols-2 gap-4 flex-1 mb-6">
          {models.map((model) => (
            <ModelPanel
              key={model.modelId}
              modelName={model.modelName}
              color={model.color}
              status={model.status}
              response={model.response}
              isLoading={isLoading}
            />
          ))}
        </div>

        {/* Chat Input */}
        <div
          className="rounded-xl border border-white/5 bg-white/[0.02] p-4"
        >
          <ChatInput onSubmit={handleSubmit} isLoading={isLoading} />
        </div>

        {/* Footer */}
        <footer className="text-center mt-4">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
            © 2026 Miracle Code™ · OM AI · বাংলার কণ্ঠ
          </p>
        </footer>
      </div>
    </main>
  )
}
