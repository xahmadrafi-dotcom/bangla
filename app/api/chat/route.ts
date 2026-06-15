import { NextRequest, NextResponse } from 'next/server'
import { orchestrate } from '@/lib/orchestrator'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const prompt: string = body?.prompt

    if (!prompt || typeof prompt !== 'string' || !prompt.trim()) {
      return NextResponse.json(
        { error: 'prompt প্রয়োজন' },
        { status: 400 }
      )
    }

    const responses = await orchestrate(prompt.trim())
    return NextResponse.json({ responses })
  } catch {
    return NextResponse.json(
      { error: 'সার্ভারে সমস্যা হয়েছে' },
      { status: 500 }
    )
  }
}
