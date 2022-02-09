import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { MainStackNavigation } from '@screens/mainStackNavigation'

export const App: React.VFC = () => {
  return (
    <NavigationContainer>
        <MainStackNavigation />
        <StatusBar style="auto" />
    </NavigationContainer>
  )
}
