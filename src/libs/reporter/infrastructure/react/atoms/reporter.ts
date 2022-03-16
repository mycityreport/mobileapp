import { apiKeyState } from '@libs/apiKey/infrastructure/react/atoms/apiKey'
import { ApiKey } from '@libs/apiKey/models/apiKey'
import { atom, selector } from 'recoil'
import { ReporterObj } from '../object/reporter'
import { fetchReporterWithApiKeyInstance } from './fetchReporterWithApiKeyUseCase'

const reporterAtom = atom<ReporterObj | undefined>({
  key: 'ReporterAtom',
  default: undefined,
})

export const reporterState = selector<ReporterObj | undefined>({
  key: 'Reporter',
  get: async ({ get }) => {
    const storedReporter = get(reporterAtom)
    if (storedReporter !== undefined) {
      return storedReporter
    }
    const fetchReporterWithApiKey = get(fetchReporterWithApiKeyInstance)
    const apiKeyObj = get(apiKeyState)
    if (apiKeyObj !== undefined) {
      try {
        const apiKey = ApiKey.of(apiKeyObj.value)
        const reporterDTO = await fetchReporterWithApiKey(apiKey)
        return reporterDTO
      } catch (e) {
        if (e instanceof Error) {
          // TODO: This message should sent into Sentry
          console.log(`Failed to auth with stored api key: ${e.message}`)
        }
        return undefined
      }
    } else {
      return undefined
    }
  },
  set: ({ set }, newReporter) => {
    set(reporterAtom, newReporter)
  },
})
