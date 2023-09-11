import { Chat } from '@/types/chat'
import { useEffect, useRef, useState } from 'react'
import { ChatList } from '../_types/ChatList'
import { Domain_NowRoomAccounts } from '@/api/@types'
import { FirebaseService } from '../_services/Firebase'
import { RoomDetailService } from '../_services/RoomDetail'

export const useChatMessage = (
  roomId: string,
  members: Domain_NowRoomAccounts[] | undefined,
) => {
  const [chatMessages, setChatMessages] = useState<ChatList[] | null>(null)
  const Firebase = new FirebaseService()
  const Room = new RoomDetailService()
  const scrollRef = useRef<HTMLDivElement>(null)
  const nodeEnv = process.env.NEXT_PUBLIC_ENVIRONMENT
  const { fetchChatMessages, getUId, getCurrentUser } = Firebase
  const { createChatMessage } = Room

  useEffect(() => {
    if (!members || nodeEnv === 'local') return
    // チャットメッセージの変更を監視

    const unsubscribe = fetchChatMessages(roomId, (chats) => {
      handleSetChatMessages(chats)
    })
    // コンポーネントのアンマウント時に監視を解除

    return () => {
      unsubscribe && unsubscribe()
    }
  }, [roomId, members])

  // チャットに合わせてスクロールする
  useEffect(() => {
    let isMounted = true // マウント状態をトラッキング
    if (scrollRef.current && isMounted) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
    return () => {
      isMounted = false // アンマウントを検出
    }
  }, [chatMessages])

  const handleSetChatMessages = async (chats: Chat[]):Promise<void> => {
    const uid = await getUId()
    // 自分の場合isMineをtrue,相手の場合isMineをfalseにし、アイコンを追加する
    const chatList = chats.map((chat) => {
      const foundMember = members?.find(
        (member) => member.account_id === chat.UID,
      )

      return {
        ...chat,
        isMine: chat.UID === uid,
        icon: foundMember?.icon,
        name: foundMember?.username,
      }
    })

    if (nodeEnv === 'local') {
      setChatMessages((prevState) =>
        prevState ? [...prevState, ...chatList] : chatList,
      )
    } else {
      setChatMessages(chatList)
    }
  }

  const handleSendChatMessage = async (message: string): Promise<void> => {
    if (nodeEnv === 'local') {
      const uid = await getUId()
      const user = await getCurrentUser()
      const name = user?.displayName

      const mychat = {
        Message: message,
        CreatedAt: '2021-09-01T00:00:00.000Z',
        UID: uid,
        name: name,
      }
      const otherchat = {
        Message: message,
        CreatedAt: '2021-09-01T00:00:00.000Z',
        UID: 'TmEsXEWsb0QZh10yDWZGL7PqvlK2',
        name: name,
      }
      handleSetChatMessages([mychat, otherchat])
    } else {
      await createChatMessage(roomId, message)
    }
  }

  return { chatMessages, handleSendChatMessage, scrollRef }
}
