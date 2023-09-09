import { AuthProvider, User } from 'firebase/auth'
import { Chat } from './chat'

export interface FirebaseInterface {
  getCurrentUser(): Promise<User | null>
  getUId(): Promise<string>
  getToken(): Promise<string>
  SNSSignIn(provider: AuthProvider): Promise<User>
  emailSignIn(email: string, password: string): Promise<User | string>
  emailSignUp(email: string, password: string): Promise<User | string>
  signOut(): Promise<void>
  deleteAccount(): Promise<void>
  fetchChatMessages(
    roomId: string,
    callback: (chats: Chat[]) => void,
  ): (() => void) | undefined
}
