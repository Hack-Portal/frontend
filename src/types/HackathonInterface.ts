import { Response_GetHackathon } from '@/api/@types'

export interface HackathonInterface {
  fetchAll(): Promise<Response_GetHackathon[]>
}
