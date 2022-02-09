import { ApiKey } from '../models/apiKey'
import { ApiKeyDAO } from './apiKeyDAO'
import { ApiKeyRepository } from './apiKeyRepository'

export function getApiKeyUseCase(
  repository: ApiKeyRepository
): () => Promise<ApiKeyDAO> {
  return async () => {
    const storedApiKey = await repository.getApiKey()
    return storedApiKey.value as ApiKeyDAO
  }
}

export function saveApiKeyUseCase(
  repository: ApiKeyRepository
): (rawApiKey: string) => Promise<void> {
  return async (rawApiKey: string) => {
    const apiKey = ApiKey.of(rawApiKey)
    return await repository.saveApiKey(apiKey)
  }
}

export function deleteApiKeyUseCase(
  repository: ApiKeyRepository
): () => Promise<void> {
  return async () => {
    return await repository.deleteApiKey()
  }
}
