import React from 'react'
import { TextInput, View } from 'react-native'
import tw from 'twrnc'
import { ForgetPasswordButton } from './components/forgetPasswordButton'
import { LoginButton } from './components/loginButton'
import { useEmail } from './hooks/useEmail'
import { usePassword } from './hooks/usePassword'

export const LoginScreen: React.VFC = () => {
  const { email, setEmail } = useEmail()
  const { password, setPassword } = usePassword()

  return (
    <View>
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
    </View>
  )
}
