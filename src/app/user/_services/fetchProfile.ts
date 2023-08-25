import { UserRepository } from '@/repositories/UserRepository'
export class FetchProfile {
  private UserRepository: UserRepository

  constructor() {
    this.UserRepository = UserRepository.getInstance()
  }

  public async UserInfo(id: string, token: string) {
    try {
      const userInfo = await this.UserRepository.fetchById(id, token)
      console.log(id)

      return userInfo
    } catch (error) {
      console.error('Serviceのエラー:', error)
      throw error
    }
  }
}
