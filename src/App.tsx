import React, { Suspense } from 'react'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { RecoilRoot } from 'recoil'
import { InitScreen } from '@screens/initScreen'

export const App: React.VFC = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Suspense fallback={<AppLoading />}>
          <InitScreen />
        </Suspense>
        <StatusBar style="auto" />
      </NavigationContainer>
    </RecoilRoot>
  )
}
