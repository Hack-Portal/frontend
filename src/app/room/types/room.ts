import { RoomUserThumb } from './user'
import { RoomHackathonThumb } from './hackathon'
import { Room } from '@/types/room'
import { Tech } from '@/types/tech'
import { FrameWork } from '@/types/framework'

export type RoomThumb={
  hackathon:RoomHackathonThumb
  now_member:RoomUserThumb[]
  techs:Tech[]
  frameworks:FrameWork[]
}&Pick<Room,'id'|'title'|'member_limit'>
