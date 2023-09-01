import { FirebaseRepository } from '@/repositories/FirebaseRepository'
import { publicEncrypt } from 'crypto'

export class SignOut {
  private firebaseRepository: FirebaseRepository

  constructor() {
    this.firebaseRepository = FirebaseRepository.getInstance()
  }

  public async signOutService() {
    try {
      await this.firebaseRepository.signOut()
    } catch (error) {
      console.error('signOutServiceのエラー', error)
      throw error
    }
  }
}
