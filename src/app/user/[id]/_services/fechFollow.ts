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
      const follow = await this.FollowRepository.fetchFollow(id, token)
      if (follow === null || follow === undefined) {
        console.error('followCountがnullまたはundefinedです。')
        return 0
      }
      return follow.length
    } catch (error) {
      console.error('followServiceのエラー:', error)
      throw error
    }
  }
  public async followerCount(id: string) {
    const token = await this.firebaseRepository.getToken()
    try {
      const follower = await this.FollowRepository.fetchFollower(id, token)
      if (follower === null || follower === undefined) {
        console.error('followCountがnullまたはundefinedです。')
        return 0
      }
      return follower.length
    } catch (error) {
      console.error('followServiceのエラー:', error)
      throw error
    }
  }
}
