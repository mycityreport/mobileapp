import { useNavigation } from '@react-navigation/native'
import { LoginScreenNavigationProp } from '@screens/mainStackNavigation/navigationProps'
import React, { useCallback } from 'react'
import { Button } from 'react-native'

export const LoginButton: React.VFC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>()

  const onPress = useCallback(() => {
    navigation.navigate('LoginScreen')
  }, [navigation])

  return <Button title="Login" onPress={onPress} />
}
