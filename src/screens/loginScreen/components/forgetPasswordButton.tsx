import React, { useCallback } from 'react'
import { Button } from 'react-native'

export const ForgetPasswordButton: React.VFC = () => {
  const onPress = useCallback(() => {
    console.log('forget password')
  }, [])
  return <Button title="Forget password" onPress={onPress} />
}
