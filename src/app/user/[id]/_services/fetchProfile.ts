import { FirebaseRepository } from '@/repositories/FirebaseRepository'
import { UserRepository } from '@/repositories/UserRepository'
export class FetchProfile {
  private UserRepository: UserRepository
  private firebaseRepository: FirebaseRepository

  constructor() {
    this.UserRepository = UserRepository.getInstance()
    this.firebaseRepository = FirebaseRepository.getInstance()
  }

  public async UserInfo(id: string) {
    const token = await this.firebaseRepository.getToken()
    console.log(token)
    try {
      const userInfo = await this.UserRepository.fetchById(id, token)
      console.log(userInfo)
      return userInfo
    } catch (error) {
      console.error(' UserInfoServiceのエラー:', error)
      throw error
    }
  }
}
