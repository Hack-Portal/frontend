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
    await signInWithPopup(auth, provider).then((result) => {
    // ログイン成功時にIDトークンを取得
    console.log(result.user)
    return result.user.getIdToken();
  }).then(idToken=>console.log(idToken))
  .catch((error) => {
    // エラー処理
    console.error('Googleログインエラー:', error);
  });
  }

  return (
    <>
      <p>Choose your sign-in method:</p>
      <br />
      <button onClick={() => handleOAuthSignIn(googleProvider)}>Google</button>
    </>
  )
}
