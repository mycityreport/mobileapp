import { ApiKey } from '../models/apiKey'

export interface ApiKeyRepository {
  getApiKey(): Promise<ApiKey>
  saveApiKey(apiKey: ApiKey): Promise<void>
  deleteApiKey(): Promise<void>
}
