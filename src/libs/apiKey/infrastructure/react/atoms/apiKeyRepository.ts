import { atom } from 'recoil'
import { ExpoApiKeyRepository } from '../../expoApiKeyRepository'

export const apiKeyRepository = atom({
  key: 'apiKeyRepository',
  default: new ExpoApiKeyRepository(),
})
