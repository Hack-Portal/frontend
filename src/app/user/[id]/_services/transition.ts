import { FirebaseRepository } from '@/repositories/FirebaseRepository'
// import { useRouter } from 'next/router'
// const router = useRouter()

export class Transition {
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
