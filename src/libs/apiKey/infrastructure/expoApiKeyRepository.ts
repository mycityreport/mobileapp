import * as SecureStore from 'expo-secure-store'
import { ApiKey } from '../models/apiKey'
import { ApiKeyRepository } from '../usecase/apiKeyRepository'

export class ExpoApiKeyRepository implements ApiKeyRepository {
  private readonly key = 'apiKey'

  public async getApiKey(): Promise<ApiKey> {
    const result = await SecureStore.getItemAsync(this.key)
    if (result !== null) {
      return ApiKey.of(result)
    } else {
      throw new Error('APIキーの取り出しに失敗しました。')
    }
  }

  public async saveApiKey(apiKey: ApiKey): Promise<void> {
    try {
      return await SecureStore.setItemAsync(this.key, apiKey.value)
    } catch {
      throw new Error('APIキーの保存に失敗しました。')
    }
  }

  public async deleteApiKey(): Promise<void> {
    try {
      return await SecureStore.deleteItemAsync(this.key)
    } catch {
      throw new Error('APIキーの削除に失敗しました。')
    }
  }
}
