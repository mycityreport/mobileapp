import { useCallback, useState } from 'react'

type UseEmail = {
  email: string
  setEmail: (value: string) => void
}

export function useEmail(): UseEmail {
  const [email, _setEmail] = useState('')

  const setEmail = useCallback((value: string) => {
    _setEmail(value)
  }, [])

  return { email, setEmail }
}
