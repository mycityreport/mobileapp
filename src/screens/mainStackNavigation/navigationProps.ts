import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type MainStackParamList = {
  MainScreen: undefined
  OnboardingScreen: undefined
  LoginScreen: undefined
  SignUpScreen: undefined
  HomeScreen: undefined
}

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'LoginScreen'
>

export type SignUpScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'SignUpScreen'
>
