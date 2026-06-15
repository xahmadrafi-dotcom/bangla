import { MODELS } from './models'

export type ModelResponse = {
  modelId: string
  modelName: string
  response: string
  status: 'mock' | 'live' | 'offline'
  color: string
}

export async function orchestrate(prompt: string): Promise<ModelResponse[]> {
  const results = await Promise.allSettled(
    MODELS.map((model) => model.adapter(prompt))
  )

  return MODELS.map((model, index) => {
    const result = results[index]
    if (result.status === 'fulfilled') {
      return {
        modelId: model.id,
        modelName: model.name,
        response: result.value,
        status: model.status,
        color: model.color,
      }
    }
    return {
      modelId: model.id,
      modelName: model.name,
      response: 'দুঃখিত, এই মুহূর্তে সংযোগ করা সম্ভব হচ্ছে না।',
      status: 'offline' as const,
      color: model.color,
    }
  })
}
