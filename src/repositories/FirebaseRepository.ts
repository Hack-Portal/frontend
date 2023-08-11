import { auth } from '@/lib/firebase/client'
import { AuthProvider, User, signInWithPopup } from 'firebase/auth'


export class FirebaseRepository {
  private static instance: FirebaseRepository | null = null

  private constructor() {}

  public static getInstance(): FirebaseRepository {
    if (!this.instance) {
      this.instance = new FirebaseRepository()
    }
    return this.instance
  }

  public async getCurrentUser(): Promise<User | null> {
    try {
      const user = await auth.currentUser
      return user
    } catch (error) {
      console.error('ユーザー取得エラー:', error)
      throw error // エラーを呼び出し元に伝播させる
    }
  }

  public async OAuthSignIn(provider: AuthProvider): Promise<User> {
    try {
      const result = await signInWithPopup(auth, provider)
      return result.user
    } catch (error) {
      console.error('Googleログインエラー:', error)
      throw error // エラーを呼び出し元に伝播させる
    }
  }
}
