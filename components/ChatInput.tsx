'use client'

import { useState, KeyboardEvent } from 'react'

type ChatInputProps = {
  onSubmit: (prompt: string) => void
  isLoading: boolean
}

export default function ChatInput({ onSubmit, isLoading }: ChatInputProps) {
  const [value, setValue] = useState('')

  const handleSubmit = () => {
    const trimmed = value.trim()
    if (!trimmed || isLoading) return
    onSubmit(trimmed)
    setValue('')
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="flex gap-3 items-end">
      <div className="flex-1 relative">
        <textarea
          className="w-full resize-none rounded-xl bg-white/[0.04] border border-white/10 text-white/90 placeholder-white/25 px-4 py-3 text-sm bangla focus:outline-none focus:border-yellow-500/40 transition-colors"
          rows={2}
          placeholder="বাংলায় লিখুন..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
          style={{ lineHeight: '1.7' }}
        />
      </div>
      <button
        onClick={handleSubmit}
        disabled={isLoading || !value.trim()}
        className="flex-shrink-0 px-5 py-3 rounded-xl text-sm font-semibold bangla transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
        style={{
          background: isLoading || !value.trim()
            ? 'rgba(201, 168, 76, 0.15)'
            : '#C9A84C',
          color: isLoading || !value.trim() ? '#C9A84C' : '#050505',
        }}
      >
        {isLoading ? '...' : 'পাঠাও'}
      </button>
    </div>
  )
}
