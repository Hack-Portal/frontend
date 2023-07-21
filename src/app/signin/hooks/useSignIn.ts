import { auth } from '@/firebase/client'
import { AuthProvider, signInWithPopup } from 'firebase/auth'
import { useState } from 'react'

export const useSignIn = () => {
  const [isSignIn, setIsSignIn] = useState(false)
  const handleSetIsSignIn = () => {
    setIsSignIn(true)
  }
  const handleOAuthSignIn = async (provider: AuthProvider) => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        // ログイン成功時にIDトークンを取得
        if (result.user) {
          handleSetIsSignIn()
          return result.user.getIdToken()
        }
      })
      .then((idToken) => console.log(idToken))
      .catch((error) => {
        // エラー処理
        console.error('Googleログインエラー:', error)
      })
  }
  return { isSignIn, handleSetIsSignIn, handleOAuthSignIn }
}
