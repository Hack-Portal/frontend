import { Chat } from '@/types/chat'

export type ChatList = {
  isMine: boolean
  icon?: string
  name?: string
} & Chat
