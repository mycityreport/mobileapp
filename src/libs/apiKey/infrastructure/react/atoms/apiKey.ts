import { atom } from 'recoil'
import { ApiKeyObj } from '../object/apiKey'

export const apiKeyState = atom<ApiKeyObj | undefined>({
  key: 'ApiKey',
  default: undefined,
})
