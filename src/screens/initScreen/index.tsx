import { MainStackNavigation } from '@screens/mainStackNavigation'
import React from 'react'
import { isAuthenticated } from './hooks/useIsAuthenticated'
import { useRecoilValue } from 'recoil'

export const InitScreen: React.VFC = () => {
  const authenticated = useRecoilValue(isAuthenticated)

  return <MainStackNavigation isAuthenticated={authenticated} />
}
