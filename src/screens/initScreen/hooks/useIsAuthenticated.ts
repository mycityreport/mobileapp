import { apiKeyState } from '@libs/apiKey/infrastructure/react/atoms/apiKey'
import { reporterState } from '@libs/reporter/infrastructure/react/atoms/reporter'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'

export function useIsAuthenticated() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const apiKey = useRecoilValue(apiKeyState)
  const reporter = useRecoilValue(reporterState)

  useEffect(() => {
    const hasApiKey = apiKey !== undefined
    const hasReporter = reporter !== undefined
    const state = hasApiKey && hasReporter

    setIsAuthenticated(state)
  }, [apiKey, reporter])

  return { isAuthenticated }
}
