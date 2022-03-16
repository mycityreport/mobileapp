import { apiKeyState } from '@libs/apiKey/infrastructure/react/atoms/apiKey'
import { reporterState } from '@libs/reporter/infrastructure/react/atoms/reporter'
import { selector } from 'recoil'

export const isAuthenticated = selector<boolean>({
  key: 'IsAuthenticated',
  get: ({ get }) => {
    const apiKey = get(apiKeyState)
    const reporter = get(reporterState)

    const hasApiKey = apiKey !== undefined
    const hasReporter = reporter !== undefined
    return hasApiKey && hasReporter
  },
})
