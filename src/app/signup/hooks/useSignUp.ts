import { auth } from '@/lib/firebase/client'
import { User, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { CreateUser } from '../services/createUser'
import { EmailSignUpFormData, SignUpFormData } from '../types/formData'
import { useCustomRouter } from '@/components/layouts/hooks/CustomRouter'
import { useIcon } from '@/hooks/useIcon'
import { useLoginCheck } from '@/hooks/useLoginCheck'

export const useSignUp = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState<User>()
  const [error, setError] = useState<string>()
  const User = new CreateUser()
  const { handlePushRouter } = useCustomRouter()
  const { icon, handleSetIcon, preview } = useIcon()

  const handleEmailLogin = async (formData: EmailSignUpFormData) => {
    const user = await User.authEmail(formData, () => {
      setIsLogin(true)
    })
    if (typeof user == 'string') {
      switch (user) {
        case 'auth/email-already-in-use':
          setError('このメールアドレスは既に使用されています')
          break
        case 'auth/invalid-email':
          setError('メールアドレスの形式が無効です')
          break
        case 'auth/operation-not-allowed':
          setError('メールアドレスとパスワードによる認証が無効です')
          break
        case 'auth/weak-password':
          setError('パスワードが弱すぎます')
          break
        default:
          setError('予期せぬエラーが発生しました')
      }
    } else {
      setUser(user)
    }
  }

  const handleGoogleLogin = async () => {
    const user = await User.authGoogle(() => {
      setIsLogin(true)
    })

    if (user) {
      setUser(user)
    }

    if (!isLogin) {
      setError('このメールアドレスは既に使用されています')
    }
    return user
  }

  // 要チェック
  const createUser = async (formData: SignUpFormData) => {
    const requestData = { ...formData, icons: icon }
    await User.create(requestData)

    handlePushRouter('/signin')
  }

  // ()=>{}はcallback関数,
  useLoginCheck(() => {}, true)

  return {
    isLogin,
    user,
    error,
    handleEmailLogin,
    handleGoogleLogin,
    createUser,
    handleSetIcon,
    preview,
  }
}
