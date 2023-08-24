import { Domain_FollowResponse } from '@/api/@types'

export interface FollowInterface {
  fetchFollow(id: string): Promise<Domain_FollowResponse[]>
  fetchFollower(id: string): Promise<Domain_FollowResponse[]>
}
