import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen } from '@screens/loginScreen'
import { MainScreen } from '@screens/mainScreen'
import { OnboardingScreen } from '@screens/onboardingScreen'
import { SignUpScreen } from '@screens/signUpScreen'
import React from 'react'
import { MainStackParamList } from './navigationProps'

const Stack = createNativeStackNavigator<MainStackParamList>()

export const MainStackNavigation: React.VFC = () => {
  return (
    <Stack.Navigator initialRouteName="OnboardingScreen">
      <Stack.Screen name="MainScreen">{() => <MainScreen />}</Stack.Screen>
      <Stack.Screen name="OnboardingScreen" options={{ headerShown: false }}>
        {() => <OnboardingScreen />}
      </Stack.Screen>
      <Stack.Screen name="LoginScreen">{() => <LoginScreen />}</Stack.Screen>
      <Stack.Screen name="SignUpScreen">{() => <SignUpScreen />}</Stack.Screen>
    </Stack.Navigator>
  )
}
