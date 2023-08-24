import { FollowRepository } from '@/repositories/FollowRepository'
import { UserRepository } from '@/repositories/UserRepository'
export class FetchProfile {
  private FollowRepository: FollowRepository
  private UserRepository: UserRepository

  constructor() {
    this.FollowRepository = FollowRepository.getInstance()
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

  public async followCount(id: string) {
    try {
      const followCount = await this.FollowRepository.fetchFollow(id)
      return followCount.length
    } catch (error) {
      console.error('Serviceのエラー:', error)
      throw error
    }
  }
  public async followerCount(id: string) {
    try {
      const followerCount = await this.FollowRepository.fetchFollower(id)
      return followerCount.length
    } catch (error) {
      console.error('Serviceのエラー:', error)
      throw error
    }
  }
}
