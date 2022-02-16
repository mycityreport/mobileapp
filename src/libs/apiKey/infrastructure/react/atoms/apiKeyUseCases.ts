import {
  deleteApiKeyUseCase,
  getApiKeyUseCase,
  saveApiKeyUseCase,
} from '@libs/apiKey/usecase/usecases'
import { selector } from 'recoil'
import { apiKeyRepository } from './apiKeyRepository'

export const getApiKeyInstance = selector({
  key: 'getApiKeyUseCase',
  get: ({ get }) => getApiKeyUseCase(get(apiKeyRepository)),
})

export const saveApiKeyInstance = selector({
  key: 'saveApiKeyUseCase',
  get: ({ get }) => saveApiKeyUseCase(get(apiKeyRepository)),
})

export const deleteApiKeyInstance = selector({
  key: 'deleteApiKeyUseCase',
  get: ({ get }) => deleteApiKeyUseCase(get(apiKeyRepository)),
})
