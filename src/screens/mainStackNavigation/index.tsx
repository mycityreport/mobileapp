import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MainScreen } from '@screens/mainScreen'
import React from 'react'

const Stack = createNativeStackNavigator<MainStackNavigationProps>()

export const MainStackNavigation: React.VFC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="mainScreen">{() => <MainScreen />}</Stack.Screen>
    </Stack.Navigator>
  )
}
