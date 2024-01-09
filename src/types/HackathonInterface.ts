import {
  Response_GetHackathon,
  Response_CreateHackathon,
  Request_CreateHackathon,
} from '@/api/@types'

export interface HackathonInterface {
  fetchAll(): Promise<Response_GetHackathon[]>
  post(data: Request_CreateHackathon): Promise<Response_CreateHackathon>
}
