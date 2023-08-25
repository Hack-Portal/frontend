import { FirebaseRepository } from '@/repositories/FirebaseRepository'
import { FollowRepository } from '@/repositories/FollowRepository'
export class FollowService {
  private FollowRepository: FollowRepository
  private firebaseRepository: FirebaseRepository

  constructor() {
    this.FollowRepository = FollowRepository.getInstance()
    this.firebaseRepository = FirebaseRepository.getInstance()
  }

  public async followCount(id: string) {
    const token = await this.firebaseRepository.getToken()

    try {
      const followCount = await this.FollowRepository.fetchFollow(id, token)
      console.log(token)
      return followCount.length
    } catch (error) {
      console.error('Serviceのエラー:', error)
      throw error
    }
  }
  public async followerCount(id: string) {
    const token = await this.firebaseRepository.getToken()

    try {
      const followerCount = await this.FollowRepository.fetchFollower(id, token)
      return followerCount.length
    } catch (error) {
      console.error('Serviceのエラー:', error)
      throw error
    }
  }
}
