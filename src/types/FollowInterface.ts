import { Domain_FollowResponse } from '@/api/@types'

export interface FollowInterface {
  fetchFollow(id: string, token: string): Promise<Domain_FollowResponse[]>
  fetchFollower(id: string, token: string): Promise<Domain_FollowResponse[]>
}
