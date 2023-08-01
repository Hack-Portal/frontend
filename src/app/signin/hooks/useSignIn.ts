import { auth } from '@/firebase/client'
import { AuthProvider, User, signInWithPopup } from 'firebase/auth'
import { useEffect, useState } from 'react'

export const useSignIn = () => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      }
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const handleOAuthSignIn = async (provider: AuthProvider) => {
    try {
      const result = await signInWithPopup(auth, provider)
      if (result.user) {
        setUser(result.user)
      }
    } catch (error) {
      // エラー処理
      console.error('Googleログインエラー:', error)
    }
  }

  return { handleOAuthSignIn, user, isLoading }
}
