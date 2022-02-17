import { MainStackNavigation } from '@screens/mainStackNavigation'
import React from 'react'
import { useIsAuthenticated } from './hooks/useIsAuthenticated'
import AppLoading from 'expo-app-loading'
import { useIsLoading } from './hooks/useIsLoading'

export const InitScreen: React.VFC = () => {
  const { isLoading } = useIsLoading()
  const { isAuthenticated } = useIsAuthenticated()

  if (isLoading) {
    return <AppLoading />
  }

  return <MainStackNavigation isAuthenticated={isAuthenticated} />
}
