import { Domain_HackathonResponses } from '@/api/@types'

export interface HackathonInterface {
  fetchAll(): Promise<Domain_HackathonResponses[]>
}
