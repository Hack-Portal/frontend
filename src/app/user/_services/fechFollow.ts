import { FirebaseRepository } from '@/repositories/FirebaseRepository'
import { FollowRepository } from '@/repositories/FollowRepository'
export class FollowService {
  private FollowRepository: FollowRepository
  private firebaseRepository: FirebaseRepository

  constructor() {
    this.FollowRepository = FollowRepository.getInstance()
    this.firebaseRepository = FirebaseRepository.getInstance()
  }

  public async followCount(followid: string) {
    const token = await this.firebaseRepository.getToken()
    console.log(token)
    try {
      const followCount = await this.FollowRepository.fetchFollow(
        followid,
        token,
      )
      return followCount.length
    } catch (error) {
      console.error('followServiceのエラー:', error)
      throw error
    }
  }
  public async followerCount(followid: string) {
    const token = await this.firebaseRepository.getToken()
    try {
      const followerCount = await this.FollowRepository.fetchFollower(
        followid,
        token,
      )
      console.log(followid)

      return followerCount.length
    } catch (error) {
      console.error('Serviceのエラー:', error)
      throw error
    }
  }
}
