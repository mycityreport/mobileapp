import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ForgetPasswordScreen } from '@screens/forgetPasswordScreen'
import { HomeScreen } from '@screens/homeScreen'
import { LoginScreen } from '@screens/loginScreen'
import { OnboardingScreen } from '@screens/onboardingScreen'
import { SignUpScreen } from '@screens/signUpScreen'
import React from 'react'
import { MainStackParamList } from './navigationProps'

const Stack = createNativeStackNavigator<MainStackParamList>()

type MainStackNavigationProps = {
  isAuthenticated: boolean
}

export const MainStackNavigation: React.VFC<MainStackNavigationProps> = ({
  isAuthenticated,
}) => {
  return (
    <Stack.Navigator
      initialRouteName={isAuthenticated ? 'HomeScreen' : 'OnboardingScreen'}
    >
      <Stack.Screen name="OnboardingScreen" options={{ headerShown: false }}>
        {() => <OnboardingScreen />}
      </Stack.Screen>
      <Stack.Screen name="LoginScreen">{() => <LoginScreen />}</Stack.Screen>
      <Stack.Screen name="SignUpScreen">{() => <SignUpScreen />}</Stack.Screen>
      <Stack.Screen name="HomeScreen" options={{ headerShown: false }}>
        {() => <HomeScreen />}
      </Stack.Screen>
      <Stack.Screen name="ForgetPasswordScreen">
        {() => <ForgetPasswordScreen />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}
