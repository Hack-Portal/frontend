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
import {
  collection,
  query,
  where,
  onSnapshot,
  Unsubscribe,
  QuerySnapshot,
  DocumentData,
} from 'firebase/firestore'
import { Chat } from '@/types/chat'
import api from '@/api/$api'
import aspida from '@aspida/axios'
import axios from 'axios'
import { Domain_GetRoomResponse } from '@/api/@types'
import { EmailSignInFormData } from '@/app/signin/types/formData'

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

  public async emailSignIn(email:string,password:string ): Promise<User|string> {
    try {
      // メールアドレスとパスワードを使ってユーザーをログインさせます
      const result = await signInWithEmailAndPassword(auth, email, password);
  
      // ログインしたユーザー情報を返します
      return result.user;
    } catch (error) {
      if (error instanceof Error) { // エラーの型チェック
        const errorCode = (error as FirebaseError).code; // FirebaseErrorとして扱う
        return errorCode;
      }
      throw error;
    }
  }

  public async emailSignUp(email: string, password: string): Promise<User | string> {
    try {
      // メールアドレスとパスワードを使ってユーザーを登録します
      const result = await createUserWithEmailAndPassword(auth, email, password);
  
      // 登録したユーザー情報を返します
      return result.user;
    } catch (error) {
      if (error instanceof Error) { // エラーの型チェック
        const errorCode = (error as FirebaseError).code; // FirebaseErrorとして扱う
       return errorCode
      }
      throw error
  }
}
   


  // public async signOut(): Promise<void> {
  //   try {
  //     await auth.signOut()
  //   } catch (e) {
  //     if (e instanceof FirebaseError) {
  //       console.log(e)
  //       throw e
  //     }
  //   }
  // }

  public fetchChatMessages(
    roomId: string,
    callback: (chats: string[]) => void,
  ): (() => void) | undefined {
    try {
      const _query = query(
        collection(db, 'chatrooms'),
        where('UID', '==', roomId),
      )
      const unsubscribe = onSnapshot(
        _query,
        (querySnapshot: QuerySnapshot<DocumentData>) => {
          const chats: string[] = []
          // ドキュメントの変更を監視します,差分を取得します
          querySnapshot.docChanges().forEach((change) => {
            if (change.type === 'added' || change.type === 'modified') {
              const data = change.doc.data() as Chat // ドキュメントデータをChat型として扱います
              chats.push(data.Message)
            }
          })
          callback(chats) // コールバックで結果を返します
        },
      )
      return unsubscribe // サブスクリプションの解除に使用できる関数を返します
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.log(e)
        throw e
      }
    }
  }

  public async addChatMessage(
    roomId: string,
    message: string,
  ): Promise<Domain_GetRoomResponse> {
    const user = await this.getCurrentUser()
    if (!user) throw new Error('ユーザーが存在しません')
    const token = await user?.getIdToken()
    try {
      const client = api(
        aspida(axios, {
          baseURL: process.env.NEXT_PUBLIC_API_URL,
          headers: {
            authorization: token,
          },
        }),
      )
      const response = await client.rooms
        ._room_id(roomId)
        .addchat.post({ body: { message: message ,account_id:user.uid} })
      return response.body
    } catch (error) {
      // エラー処理
      console.error('APIリクエストエラー:', error)
      throw error
    }
  }

}
