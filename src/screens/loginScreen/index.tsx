import React from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { useHeaderHeight } from '@react-navigation/elements'
import tw from 'twrnc'
import { ForgetPasswordButton } from './components/forgetPasswordButton'
import { LoginButton } from './components/loginButton'
import { useEmail } from './hooks/useEmail'
import { usePassword } from './hooks/usePassword'

export const LoginScreen: React.VFC = () => {
  const { email, setEmail } = useEmail()
  const { password, setPassword } = usePassword()
  const headerHeight = useHeaderHeight()
  const statusBarHeight = StatusBar.currentHeight ?? 0

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={headerHeight + statusBarHeight}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={tw`flex flex-col p-8`}>
          <View style={tw`w-full h-72 bg-gray-300`}></View>
          <TextInput
            style={tw`h-12 border`}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
          />
          <TextInput
            style={tw`h-12 border`}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={true}
          />
          <LoginButton email={email} password={password} />
          <ForgetPasswordButton />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
