import { ApiKey } from '@libs/apiKey/models/apiKey'
import { atom, selector } from 'recoil'
import { ApiKeyObj } from '../object/apiKey'
import { getApiKeyInstance } from './apiKeyUseCases'

const apiKeyAtom = atom<ApiKeyObj | undefined>({
  key: 'ApiKeyAtom',
  default: undefined,
})

export const apiKeyState = selector<ApiKeyObj | undefined>({
  key: 'ApiKey',
  get: async ({ get }) => {
    const storedApiKey = get(apiKeyAtom)
    if (storedApiKey !== undefined) {
      return storedApiKey
    }
    try {
      const getApiKey = get(getApiKeyInstance)
      const apiKeyDTO = await getApiKey()
      const apiKey = ApiKey.of(apiKeyDTO.value)
      return apiKey
    } catch (e) {
      if (e instanceof Error) {
        // TODO: This message should sent into Sentry
        console.log(`API key is not saved: ${e.message}`)
      }
      return undefined
    }
  },
  set: ({ set }, newApiKey) => {
    set(apiKeyAtom, newApiKey)
  },
})
