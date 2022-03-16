import { useNavigation } from '@react-navigation/native'
import { SignUpScreenNavigationProp } from '@screens/mainStackNavigation/navigationProps'
import React, { useCallback } from 'react'
import { Button } from 'react-native'

export const SignUpButton: React.VFC = () => {
  const navigation = useNavigation<SignUpScreenNavigationProp>()

  const onPress = useCallback(() => {
    navigation.navigate('SignUpScreen')
  }, [navigation])

  return <Button title="Sign up" onPress={onPress} />
}
