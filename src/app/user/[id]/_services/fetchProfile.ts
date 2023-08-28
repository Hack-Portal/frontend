import { FirebaseRepository } from '@/repositories/FirebaseRepository'
import { UserRepository } from '@/repositories/UserRepository'
export class FetchProfile {
  private UserRepository: UserRepository
  private firebaseRepository: FirebaseRepository

  constructor() {
    this.UserRepository = UserRepository.getInstance()
    this.firebaseRepository = FirebaseRepository.getInstance()
  }

  public async UserInfo(uid: string) {
    const user = await this.firebaseRepository.getCurrentUser()
    if (!user) throw new Error('ユーザーが存在しません')
    const token = await this.firebaseRepository.getToken()
    try {
      const userInfo = await this.UserRepository.fetchById(user.uid, token)
      if (userInfo === null || userInfo === undefined) {
        console.error('userInfoがnullまたはundefinedです。')
        return null
      }
      return userInfo
    } catch (error) {
      console.error(' UserInfoServiceのエラー:', error)
      throw error
    }
  }
}
