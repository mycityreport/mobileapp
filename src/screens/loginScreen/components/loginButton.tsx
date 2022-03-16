import { saveApiKeyInstance } from '@libs/apiKey/infrastructure/react/atoms/apiKeyUseCases'
import { fetchReporterWithPasswordInstance } from '@libs/reporter/infrastructure/react/atoms/fetchReporterWithPasswordUseCase'
import { reporterState } from '@libs/reporter/infrastructure/react/atoms/reporter'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { HomeScreenNavigationProp } from '@screens/mainStackNavigation/navigationProps'
import React, { useCallback } from 'react'
import { Button } from 'react-native'
import { useSetRecoilState, useRecoilValue } from 'recoil'

type LoginButtonProps = {
  email: string
  password: string
}

export const LoginButton: React.VFC<LoginButtonProps> = ({
  email,
  password,
}) => {
  const setReporter = useSetRecoilState(reporterState)
  const fetchReporterWithPassword = useRecoilValue(
    fetchReporterWithPasswordInstance
  )
  const saveApiKey = useRecoilValue(saveApiKeyInstance)

  const login = useCallback(
    async (email: string, password: string) => {
      const reporterDTO = await fetchReporterWithPassword(email, password)
      const { apiKey, ...reporterObj } = reporterDTO
      await saveApiKey(apiKey)
      setReporter(reporterObj)
    },
    [fetchReporterWithPassword, saveApiKey, setReporter]
  )

  const navigation = useNavigation<HomeScreenNavigationProp>()

  const onPress = useCallback(async () => {
    await login(email, password)
    const resetAction = CommonActions.reset({
      index: 1,
      routes: [{ name: 'HomeScreen' }],
    })
    navigation.dispatch(resetAction)
  }, [email, login, navigation, password])

  return <Button title="Login" onPress={onPress} />
}
