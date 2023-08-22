import { auth } from '@/lib/firebase/client'
import { User, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useCustomRouter } from '@/components/layouts/hooks/CustomRouter'
import { SignIn } from '../services/signIn'
import { EmailSignInFormData } from '../types/formData'

export const useSignIn = () => {
  const [error, setError] = useState<string>()

  const { handlePushRouter } = useCustomRouter()
  const signIn = new SignIn(handlePushRouter)
  

  const handleEmailLogin = async (formData: EmailSignInFormData) => {
    const user = await signIn.email(formData)
    if (typeof user == 'string') {
     setError("メールアドレスかパスワードが間違っています")
    }
  }

  const handleGoogleLogin = async () => {
    const user = await signIn.google()
    if (typeof user == 'string') {
      setError("Googleアカウントでアカウントを作成して下さい")
    }
  }

  return {
    error,
    handleEmailLogin,
    handleGoogleLogin,
  }
}
