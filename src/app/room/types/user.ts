import { User } from '@/types/user'

export type RoomUserThumb = { isOwner: boolean } & Pick<User, 'id' | 'icon'>
