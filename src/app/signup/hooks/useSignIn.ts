import { FirebaseRepository } from '@/repositories/FirebaseRepository'
import { AuthProvider, User } from 'firebase/auth'
import { useState } from 'react'
import { useSelectLogin } from './useSelectLogin'

export const useSignIn = () => {
  const [user, setUser] = useState<User | null>(null)
  const { selected, handleSetSelected } = useSelectLogin()
  const [isLoading, setIsLoading] = useState(true)

  const signIn = async (provider: AuthProvider) => {
    try {
      const resultUser = await FirebaseRepository.getInstance().OAuthSignIn(
        provider,
      )
      if (resultUser) {
        setUser(resultUser)
        handleSetSelected('google')
      }
    } catch (error) {
      // エラー処理
      console.error('Googleログインエラー:', error)
    }
  }

  return { signIn, user, isLoading, selected, handleSetSelected }
}
