import { Domain_FollowResponse } from '@/api/@types'

export interface FollowInterface {
  fetchFollow(
    followid: string,
    token: string,
  ): Promise<Domain_FollowResponse[] | string>
  fetchFollower(
    followid: string,
    token: string,
  ): Promise<Domain_FollowResponse[]>
}
