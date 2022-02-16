import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type MainStackParamList = {
  OnboardingScreen: undefined
  LoginScreen: undefined
  SignUpScreen: undefined
  HomeScreen: undefined
}

export type OnboardingScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'OnboardingScreen'
>

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'LoginScreen'
>

export type SignUpScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'SignUpScreen'
>

export type HomeScreenNavigationprop = NativeStackNavigationProp<
  MainStackParamList,
  'HomeScreen'
>
