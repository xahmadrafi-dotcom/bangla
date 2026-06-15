import { openaiAdapter } from './adapters/openai'
import { anthropicAdapter } from './adapters/anthropic'
import { googleAdapter } from './adapters/google'
import { githubAdapter } from './adapters/github'

export type ModelConfig = {
  id: string
  name: string
  color: string
  status: 'mock' | 'live' | 'offline'
  adapter: (prompt: string) => Promise<string>
}

export const MODELS: ModelConfig[] = [
  {
    id: 'gpt',
    name: 'GPT-4o',
    color: '#3B82F6',
    status: process.env.OPENAI_API_KEY ? 'live' : 'mock',
    adapter: openaiAdapter,
  },
  {
    id: 'claude',
    name: 'Claude 3.5',
    color: '#F97316',
    status: process.env.ANTHROPIC_API_KEY ? 'live' : 'mock',
    adapter: anthropicAdapter,
  },
  {
    id: 'gemini',
    name: 'Gemini 1.5',
    color: '#22C55E',
    status: process.env.GOOGLE_AI_KEY ? 'live' : 'mock',
    adapter: googleAdapter,
  },
  {
    id: 'github',
    name: 'GitHub Models',
    color: '#A855F7',
    status: process.env.GITHUB_TOKEN ? 'live' : 'mock',
    adapter: githubAdapter,
  },
]
