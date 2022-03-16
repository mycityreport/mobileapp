import { useNavigation } from '@react-navigation/native'
import { ForgetPasswordScreenNavigationProp } from '@screens/mainStackNavigation/navigationProps'
import React, { useCallback } from 'react'
import { Button } from 'react-native'

export const ForgetPasswordButton: React.VFC = () => {
  const navigation = useNavigation<ForgetPasswordScreenNavigationProp>()

  const onPress = useCallback(() => {
    navigation.navigate('ForgetPasswordScreen')
  }, [navigation])

  return <Button title="Forget password" onPress={onPress} />
}
