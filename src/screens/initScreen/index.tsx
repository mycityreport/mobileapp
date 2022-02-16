import { MainStackNavigation } from '@screens/mainStackNavigation'
import React, { useEffect, useState } from 'react'
import { useAuthenticate } from './hooks/useAuthenticate'
import { useIsAuthenticated } from './hooks/useIsAuthenticated'
import AppLoading from 'expo-app-loading'

export const InitScreen: React.VFC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { authenticate } = useAuthenticate()
  const { isAuthenticated } = useIsAuthenticated()

  useEffect(() => {
    async function init() {
      await authenticate()
      setIsLoading(false)
    }
    init()
    /* eslint react-hooks/exhaustive-deps: 0 */
  }, [])

  if (isLoading) {
    return <AppLoading autoHideSplash={true} />
  }

  return <MainStackNavigation isAuthenticated={isAuthenticated} />
}
