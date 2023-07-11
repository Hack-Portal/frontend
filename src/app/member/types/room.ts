import { RoomUserList } from './user'

export interface Room {
  id: number
  hackathon_id: number
  title: string
  // "description": "testtesttesttest",
  member_limit: number
  now_member: RoomUserList[]
  // "tech_tags": null,
  // "frameworks": null
}
