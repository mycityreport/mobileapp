import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { MainStackScreen } from '@screens/mainStackScreen'

export const App: React.VFC = () => {
  return (
    <NavigationContainer>
        <MainStackScreen />
        <StatusBar style="auto" />
    </NavigationContainer>
  )
}
