import { useNavigation } from '@react-navigation/native'
import { HomeScreenNavigationProp } from '@screens/mainStackNavigation/navigationProps'
import React, { useCallback } from 'react'
import { Button } from 'react-native'

export const ContinueAsGuestButton: React.VFC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>()
  const onPress = useCallback(() => {
    navigation.navigate('HomeScreen')
  }, [navigation])

  return <Button title="Continue as guest" onPress={onPress} />
}
