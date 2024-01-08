import { Response_GetHackathon, Response_CreateHackathon } from '@/api/@types'

export interface HackathonInterface {
  fetchAll(): Promise<Response_GetHackathon[]>
  create(): Promise<Response_CreateHackathon>
}
