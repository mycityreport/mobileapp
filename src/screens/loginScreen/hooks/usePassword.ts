import { useCallback, useState } from 'react'

type usePassword = {
  password: string
  setPassword: (value: string) => void
}

export function usePassword(): usePassword {
  const [password, _setPassword] = useState('')

  const setPassword = useCallback((value: string) => {
    _setPassword(value)
  }, [])

  return { password, setPassword }
}
