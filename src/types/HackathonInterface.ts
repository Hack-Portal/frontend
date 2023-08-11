import { Api_HackathonResponses, Api_hackathonInfo } from '@/api/@types'

export interface HackathonInterface {
  fetchAll(): Promise<Api_HackathonResponses[]>
  fetchById(hackathon_id: string): Promise<Api_HackathonResponses>
}
