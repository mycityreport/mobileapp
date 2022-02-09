import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { MainStackNavigation } from '@screens/mainStackNavigation'
import { RecoilRoot } from 'recoil'

export const App: React.VFC = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <MainStackNavigation />
        <StatusBar style="auto" />
      </NavigationContainer>
    </RecoilRoot>
  )
}
