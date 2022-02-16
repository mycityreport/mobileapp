import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { LogoutButton } from './components/logoutButton'

export const HomeScreen: React.VFC = () => {
  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <LogoutButton />
    </SafeAreaView>
  )
}
