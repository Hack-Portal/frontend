import { useState } from 'react'

export const useError = () => {
  const [error, setError] = useState<Error>()
  const handleError = (error: Error) => {
    setError(error)
  }
  const handleClearError = () => {
    setError(undefined)
  }
  return { error, handleError, handleClearError }
}
