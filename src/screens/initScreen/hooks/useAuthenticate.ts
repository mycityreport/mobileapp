import { apiKeyState } from '@libs/apiKey/infrastructure/react/atoms/apiKey'
import { getApiKeyInstance } from '@libs/apiKey/infrastructure/react/atoms/apiKeyUseCases'
import { ApiKey } from '@libs/apiKey/models/apiKey'
import { fetchReporterWithApiKeyInstance } from '@libs/reporter/infrastructure/react/atoms/fetchReporterWithApiKeyUseCase'
import { reporterState } from '@libs/reporter/infrastructure/react/atoms/reporter'
import { useCallback } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

export function useAuthenticate() {
  const fetchReporterWithApiKey = useRecoilValue(
    fetchReporterWithApiKeyInstance
  )
  const setReporter = useSetRecoilState(reporterState)
  const getApiKey = useRecoilValue(getApiKeyInstance)
  const setApiKey = useSetRecoilState(apiKeyState)

  const authenticate = useCallback(async () => {
    try {
      const apiKeyDTO = await getApiKey()
      const apiKey = ApiKey.of(apiKeyDTO.value)
      const reporterDTO = await fetchReporterWithApiKey(apiKey)
      setReporter(reporterDTO)
      setApiKey(apiKey)
    } catch (e) {
      if (e instanceof Error) {
        // TODO: This message should sent into Sentry
        console.log(`Failed to auth with stored api key: ${e.message}`)
      }
    }
  }, [fetchReporterWithApiKey, getApiKey, setApiKey, setReporter])

  return { authenticate }
}
