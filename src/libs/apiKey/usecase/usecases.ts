import { ApiKey } from '../models/apiKey'
import { ApiKeyDTO } from './apiKeyDTO'
import { ApiKeyRepository } from './apiKeyRepository'

export function getApiKeyUseCase(
  repository: ApiKeyRepository
): () => Promise<ApiKeyDTO> {
  return async () => {
    const storedApiKey = await repository.getApiKey()
    return ApiKeyDTO.fromApiKey(storedApiKey)
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
