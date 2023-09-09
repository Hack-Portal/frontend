import { FirebaseRepository } from '@/repositories/FirebaseRepository'
import { Chat } from '@/types/chat'
import { AuthProvider } from 'firebase/auth'

export class FirebaseService {
  private Firebase: FirebaseRepository
  constructor() {
    this.Firebase = new FirebaseRepository()
  }
  public async getCurrentUser() {
    const user = await this.Firebase.getCurrentUser()
    return user
  }
  public async getUId() {
    const uid = await this.Firebase.getUId()
    return uid
  }
  public async getToken() {
    const token = await this.Firebase.getToken()
    return token
  }
  public fetchChatMessages(roomId: string, callback: (chats: Chat[]) => void) {
    const unsubscribe = this.Firebase.fetchChatMessages(roomId, callback)
    return unsubscribe
  }
}
