import { apiKeyState } from '@libs/apiKey/infrastructure/react/atoms/apiKey'
import { deleteApiKeyInstance } from '@libs/apiKey/infrastructure/react/atoms/apiKeyUseCases'
import { reporterState } from '@libs/reporter/infrastructure/react/atoms/reporter'
import React, { useCallback } from 'react'
import { Button } from 'react-native'
import { useRecoilValue, useSetRecoilState } from 'recoil'

export const LogoutButton: React.VFC = () => {
  const deleteApiKey = useRecoilValue(deleteApiKeyInstance)
  const setReporter = useSetRecoilState(reporterState)
  const setApiKey = useSetRecoilState(apiKeyState)

  const logout = useCallback(async () => {
    await deleteApiKey()
    setReporter(undefined)
    setApiKey(undefined)
  }, [deleteApiKey, setApiKey, setReporter])

  const onPress = useCallback(async () => {
    await logout()
  }, [logout])

  return <Button title="Logout" onPress={onPress} />
}
