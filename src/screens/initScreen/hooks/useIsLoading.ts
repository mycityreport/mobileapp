import { useEffect, useState } from 'react'
import { useAuthenticate } from './useAuthenticate'

export function useIsLoading() {
  const [isLoading, setIsLoading] = useState(true)
  const { authenticate } = useAuthenticate()

  useEffect(() => {
    async function init() {
      await authenticate()
      setIsLoading(false)
    }
    init()
    /* eslint react-hooks/exhaustive-deps: 0 */
  }, [])

  return { isLoading }
}
