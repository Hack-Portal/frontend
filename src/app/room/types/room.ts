import { RoomUserThumb } from './user'
import { RoomHackathonThumb } from './hackathon'
import { Room } from '@/types/room'
import { Tech } from '@/types/tech'
import { Framework } from '@/types/framework'

export type RoomThumb={
  hackathon:RoomHackathonThumb
  now_member:RoomUserThumb[]
  techs:Tech[]
  frameworks:Framework[]
}&Pick<Room,'id'|'title'|'member_limit'>
