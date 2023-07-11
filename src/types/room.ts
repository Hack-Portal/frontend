import { FrameWork } from './framework'
import { Hackathon } from './hackathon'
import { Tech } from './tech'
import { User } from './user'

export interface Room {
  id: number
  hackathon: Hackathon[]
  title: string
  description: string
  member_limit: number
  now_member: User[]
  tech_tags: Tech[]
  frameworks: FrameWork[]
}
