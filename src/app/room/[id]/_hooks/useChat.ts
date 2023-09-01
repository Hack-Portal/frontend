import { FirebaseRepository } from '@/repositories/FirebaseRepository'
import { Chat } from '@/types/chat'

import { useEffect, useRef, useState } from 'react'
import { ChatList } from '../_types/ChatList'
import { Domain_NowRoomAccounts } from '@/api/@types'

export const useChatMessage = (
  roomId: string,
  members: Domain_NowRoomAccounts[] | undefined,
) => {
  const [chatMessages, setChatMessages] = useState<ChatList[] | null>(null)
  const firebaseRepository = FirebaseRepository.getInstance()
  const scrollRef = useRef<HTMLDivElement>(null)
  const { fetchChatMessages, addChatMessage, getUId, getCurrentUser } =
    firebaseRepository

  useEffect(() => {
    if (!members || process.env.NEXT_PUBLIC_ENVIRONMENT === 'local') return
    // チャットメッセージの変更を監視

    const unsubscribe = fetchChatMessages(roomId, (chats) => {
      handleSetChatMessages(chats)
      console.log('a')
    })
    // コンポーネントのアンマウント時に監視を解除

    console.log('deploy')
    return () => {
      unsubscribe && unsubscribe()
    }
  }, [roomId, members])

  useEffect(() => {
    let isMounted = true // マウント状態をトラッキング
    if (scrollRef.current && isMounted) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
    return () => {
      isMounted = false // アンマウントを検出
    }
  }, [chatMessages])

  const handleSetChatMessages = async (chats: Chat[]) => {
    const uid = await getUId()

    // 自分の場合isMineをtrue,相手の場合isMineをfalseにし、アイコンを追加する
    const chatList = chats.map((chat) => {
      const foundMember = members?.find(
        (member) => member.account_id === chat.UID,
      )
      console.log('foundMember', foundMember)
      console.log(members)

      return {
        ...chat,
        isMine: chat.UID === uid,
        icon: foundMember?.icon,
        name: foundMember?.username,
      }
    })

    if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'local') {
      setChatMessages((prevState) =>
        prevState ? [...prevState, ...chatList] : chatList,
      )
    } else {
      setChatMessages(chatList)
    }
  }

  const handleSendChatMessage = async (message: string) => {
    if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'local') {
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
      const result = await addChatMessage(roomId, message)
      return result
    }
  }

  return { chatMessages, handleSendChatMessage, scrollRef }
}
