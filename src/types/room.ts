import { Framework } from './framework'
import { Hackathon } from './hackathon'
import { Tech } from './tech'
import { User } from './user'

export interface Room {
  room_id: string
  is_delete: boolean
  Hackathon: Hackathon
  title: string
  description: string
  member_limit: number
  created_at: string
  now_member: User[]
  RoomsTechTags: RoomsTechTags[]
  RoomsFrameworks: RoomsFrameworks[]
}

type RoomsTechTags = {
  count: number
  tech_tag:Tech
}

type RoomsFrameworks = {
  framework:Framework
  count: number
}
