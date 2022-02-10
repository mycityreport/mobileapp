import { ApiKey } from '@libs/apiKey/models/apiKey'
import { ApiKeyRepository } from '@libs/apiKey/usecase/apiKeyRepository'
import {
  deleteApiKeyUseCase,
  getApiKeyUseCase,
  saveApiKeyUseCase,
} from '@libs/apiKey/usecase/usecases'

class InMemoryApiKeyRepository implements ApiKeyRepository {
  private apiKey: string | null = null

  constructor(initialKey: string | undefined) {
    if (initialKey !== undefined) {
      this.apiKey = initialKey
    }
  }

  public async getApiKey(): Promise<ApiKey> {
    if (this.apiKey !== null) {
      return Promise.resolve(ApiKey.of(this.apiKey))
    } else {
      throw new Error('APIキーの取り出しに失敗しました。')
    }
  }

  public async saveApiKey(apiKey: ApiKey): Promise<void> {
    try {
      this.apiKey = apiKey.value
    } catch {
      throw new Error('APIキーの保存に失敗しました。')
    }
  }

  public async deleteApiKey(): Promise<void> {
    try {
      this.apiKey = null
    } catch {
      throw new Error('APIキーの削除に失敗しました。')
    }
  }
}

describe('Api key use case', () => {
  it('can get api key', async () => {
    const initialKey = 'f5fc7de805048e4ed69d98b2e99551ea14bb5bf9'
    const repo = new InMemoryApiKeyRepository(initialKey)
    const getApiKey = getApiKeyUseCase(repo)
    const receivedApiKey = await getApiKey()
    expect(receivedApiKey.value).toEqual(initialKey)
  })

  it('can save api key', async () => {
    const repo = new InMemoryApiKeyRepository(undefined)
    const saveApiKey = saveApiKeyUseCase(repo)
    const apiKey = 'f5fc7de805048e4ed69d98b2e99551ea14bb5bf9'
    await saveApiKey(apiKey)
    const getApiKey = getApiKeyUseCase(repo)
    const storedApiKey = await getApiKey()
    expect(storedApiKey.value).toEqual(apiKey)
  })

  it('can delete api key', async () => {
    const initialKey = 'f5fc7de805048e4ed69d98b2e99551ea14bb5bf9'
    const repo = new InMemoryApiKeyRepository(initialKey)
    const deleteApiKey = deleteApiKeyUseCase(repo)
    await deleteApiKey()
    const getApiKey = getApiKeyUseCase(repo)
    expect(getApiKey()).rejects.toThrow('APIキーの取り出しに失敗しました。')
  })
})
