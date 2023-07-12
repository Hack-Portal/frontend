import { User } from '@/types/user'

export type RoomUser = { isOwner: boolean } & Pick<
  User,
  'id' | 'name' | 'icon' | 'techs' | 'frameworks'
>
