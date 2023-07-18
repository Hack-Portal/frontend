"use client"
import {
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
} from 'firebase/auth'
import type { AuthProvider } from 'firebase/auth'
import { auth } from '@/firebase/client'

export default function singIn() {
  const googleProvider = new GoogleAuthProvider()

  const handleOAuthSignIn = async(provider: AuthProvider) => {
   const res = await signInWithPopup(auth, provider)
      // 認証に成功したら ID トークンを NextAuth に渡す
      return res
  }

  return (
    <>
      <p>Choose your sign-in method:</p>
      <br />
      <button onClick={() => handleOAuthSignIn(googleProvider)}>Google</button>
    </>
  )
}
