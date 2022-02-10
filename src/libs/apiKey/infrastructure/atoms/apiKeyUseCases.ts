import {
  deleteApiKeyUseCase,
  getApiKeyUseCase,
  saveApiKeyUseCase,
} from '@libs/apiKey/usecase/usecases'
import { selector } from 'recoil'
import { apiKeyRepository } from './apiKeyRepository'

export const getApiKey = selector({
  key: 'getApiKeyUseCase',
  get: ({ get }) => getApiKeyUseCase(get(apiKeyRepository)),
})

export const saveApiKey = selector({
  key: 'saveApiKeyUseCase',
  get: ({ get }) => saveApiKeyUseCase(get(apiKeyRepository)),
})

export const deleteApiKey = selector({
  key: 'deleteApiKeyUseCase',
  get: ({ get }) => deleteApiKeyUseCase(get(apiKeyRepository)),
})
