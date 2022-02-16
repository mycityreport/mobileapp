import React from 'react'
import { Text, View } from 'react-native'
import { LogoutButton } from './components/logoutButton'

export const HomeScreen: React.VFC = () => {
  return (
    <View>
      <Text>Home Screen</Text>
      <LogoutButton />
    </View>
  )
}
