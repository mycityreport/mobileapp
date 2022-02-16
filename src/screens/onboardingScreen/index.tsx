import React from 'react'
import { SafeAreaView, View } from 'react-native'
import tw from 'twrnc'
import { ContinueAsGuestButton } from './components/continueAsGuestButton'
import { LoginButton } from './components/loginButton'
import { SignUpButton } from './components/signUpButton'

export const OnboardingScreen: React.VFC = () => {
  return (
    <SafeAreaView>
      <View style={tw`flex flex-col w-full p-8`}>
        <View style={tw`w-full h-72 bg-gray-300`}></View>
        <View style={tw`flex flex-row justify-between`}>
          <LoginButton />
          <SignUpButton />
        </View>
        <View>
          <ContinueAsGuestButton />
        </View>
      </View>
    </SafeAreaView>
  )
}
