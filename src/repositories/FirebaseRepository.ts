import { auth, db } from '@/lib/firebase/client'
import {
  AuthProvider,
  User,
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'
import { FirebaseError } from 'firebase/app'
import { onSnapshot, doc, collection, Unsubscribe } from 'firebase/firestore'
import { Chat } from '@/types/chat'
import api from '@/api/$api'
import aspida from '@aspida/axios'
import axios from 'axios'
import { Domain_GetRoomResponse } from '@/api/@types'
import { EmailSignInFormData } from '@/app/signin/types/formData'
import { API_URL } from '@/constants/API_URL'

export class FirebaseRepository {
  private static instance: FirebaseRepository | null = null

  public static getInstance(): FirebaseRepository {
    if (!this.instance) {
      this.instance = new FirebaseRepository()
    }
    return this.instance
  }

  public getCurrentUser = async (): Promise<User | null> => {
    try {
      return new Promise((resolve) => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          resolve(user)
          unsubscribe() // リスナーの登録解除
        })
      })
    } catch (error) {
      console.error('ユーザー取得エラー:', error)
      throw error // エラーを呼び出し元に伝播させる
    }
  }

  public getUId = async (): Promise<string> => {
    try {
      const user = await this.getCurrentUser()
      if (!user) throw new Error('ユーザーが存在しません')
      return user.uid
    } catch (error) {
      console.error('ユーザーID取得エラー:', error)
      throw error // エラーを呼び出し元に伝播させる
    }
  }

  public async getToken(): Promise<string> {
    try {
      const user = await this.getCurrentUser()
      if (!user) throw new Error('ユーザーが存在しません')
      const token = await user.getIdToken()
      return token
    } catch (error) {
      console.error('トークン取得エラー:', error)
      throw error // エラーを呼び出し元に伝播させる
    }
  }

  public async SNSSignIn(provider: AuthProvider): Promise<User> {
    try {
      const result = await setPersistence(auth, browserLocalPersistence).then(
        async () => {
          // 以降の認証が指定した永続性で行われる
          const result = await signInWithPopup(auth, provider)

          return result.user
        },
      )
      return result
    } catch (error) {
      console.error('ログインエラー:', error)
      throw error // エラーを呼び出し元に伝播させる
    }
  }

  public async emailSignIn(
    email: string,
    password: string,
  ): Promise<User | string> {
    try {
      // メールアドレスとパスワードを使ってユーザーをログインさせます
      const result = await signInWithEmailAndPassword(auth, email, password)

      // ログインしたユーザー情報を返します
      return result.user
    } catch (error) {
      if (error instanceof Error) {
        // エラーの型チェック
        const errorCode = (error as FirebaseError).code // FirebaseErrorとして扱う
        return errorCode
      }
      throw error
    }
  }

  public async emailSignUp(
    email: string,
    password: string,
  ): Promise<User | string> {
    try {
      // メールアドレスとパスワードを使ってユーザーを登録します
      const result = await createUserWithEmailAndPassword(auth, email, password)

      // 登録したユーザー情報を返します
      return result.user
    } catch (error) {
      if (error instanceof Error) {
        // エラーの型チェック
        const errorCode = (error as FirebaseError).code // FirebaseErrorとして扱う
        return errorCode
      }
      throw error
    }
  }

  public async signOut(): Promise<void> {
    try {
      await auth.signOut()
    } catch (e) {
      if (e instanceof FirebaseError) {
        // console.log(e)
        throw e
      }
    }
  }

  public async deleteAccount(): Promise<void> {
    try {
      const user = await this.getCurrentUser()
      if (!user) throw new Error('ユーザーが存在しません')
      await user.delete()
    } catch (e) {
      if (e instanceof FirebaseError) {
        // console.log(e)
        throw e
      }
    }
  }

  public fetchChatMessages(
    roomId: string,
    callback: (chats: Chat[]) => void,
  ): Unsubscribe | undefined {
    try {
      const chatsRef = collection(db, 'chatrooms', roomId, 'chats') // roomIdを指定してサブコレクションを指定

      const unsubscribe = onSnapshot(
        chatsRef,
        (querySnapshot) => {
          const chats: Chat[] = []
          querySnapshot.forEach((doc) => {
            const data = doc.data() as Chat
            chats.push(data)
          })
          callback(chats) // コールバックで結果を返します
        },
        (error) => {
          // console.log('Fetch chat messages failed: ', error)
        },
      )

      return unsubscribe // サブスクリプションの解除に使用できる関数を返します
    } catch (e) {
      // console.log('Error fetching chat messages: ', e)
      return undefined // エラーが発生した場合はundefinedを返します
    }
  }

 
}
