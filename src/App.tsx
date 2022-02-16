import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { RecoilRoot } from 'recoil'
import { InitScreen } from '@screens/initScreen'

export const App: React.VFC = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <InitScreen />
        <StatusBar style="auto" />
      </NavigationContainer>
    </RecoilRoot>
  )
}
