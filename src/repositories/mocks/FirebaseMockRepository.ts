import { FirebaseInterface } from '@/types/FirebaseInterface'
import { Chat } from '@/types/chat'
import { User, AuthProvider } from 'firebase/auth'

const dummyUser: Partial<User> = {
  uid: 'dummyUid',
  getIdToken: () => Promise.resolve('dummyToken'),
}
export class FirebaseMockRepository implements FirebaseInterface {
  getCurrentUser(): Promise<User | null> {
    return Promise.resolve(dummyUser as User)
  }

  getUId(): Promise<string> {
    return Promise.resolve('dummyUid')
  }

  getToken(): Promise<string> {
    return Promise.resolve('dummyToken')
  }

  SNSSignIn(provider: AuthProvider): Promise<User> {
    return Promise.resolve(dummyUser as User)
  }

  emailSignIn(email: string, password: string): Promise<string | User> {
    return Promise.resolve('dummyUid')
  }

  emailSignUp(email: string, password: string): Promise<string | User> {
    return Promise.resolve('dummyUid')
  }

  signOut(): Promise<void> {
    return Promise.resolve()
  }

  deleteAccount(): Promise<void> {
    return Promise.resolve()
  }

  fetchChatMessages(
    roomId: string,
    callback: (chats: Chat[]) => void,
  ): (() => void) | undefined {
    const dummyChats: Chat[] = [
      {
        CreatedAt: String(new Date().getTime()),
        Message: 'hello',
        UID: 'dummyUid',
        // 他に必要なフィールド
      },
      {
        CreatedAt: String(new Date().getTime()-1000*60*60*24*3),
        Message: 'hello2',
        UID: 'dummyUid2',
        // 他に必要なフィールド
      },
    ]
    callback(dummyChats)
    return () => {
      /* 解除する処理 */
    }
  }
}
