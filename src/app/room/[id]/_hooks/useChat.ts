import { FirebaseRepository } from '@/repositories/FirebaseRepository'
import { Chat } from '@/types/chat'

import { useEffect, useState } from 'react'
import { ChatList } from '../_types/ChatList'
import { Domain_NowRoomAccounts } from '@/api/@types'

export const useChatMessage = (roomId:string,members:Domain_NowRoomAccounts[]|undefined) => {
  const [chatMessages, setChatMessages] = useState<ChatList[] | null>(null)
  const firebaseRepository = FirebaseRepository.getInstance()
  
  const { fetchChatMessages, addChatMessage,getUId } = firebaseRepository
  useEffect(() => {
    // チャットメッセージの変更を監視
    // const unsubscribe = fetchChatMessages(roomId, (chats) => {
    //   setChatMessages((prevState) =>
    //     prevState ? [...prevState, ...chats] : chats,
    //   )
    //   console.log(chats);
    // })
    // console.log(chatMessages);
    

    // コンポーネントのアンマウント時に監視を解除
    return () => {
      // unsubscribe && unsubscribe()
    }
  }, [roomId])

  const handleSetChatMessages = async(chats: Chat[]) => {
    const uid = await getUId()

    
    // 自分の場合isMineをtrue,相手の場合isMineをfalseにし、アイコンを追加する
    const chatList = chats.map((chat) => {
      return {
        ...chat,
        isMine: chat.UID === uid,
        icon: members?.find((member) => member.account_id === chat.UID)?.icon,
      }
    }
    )
    setChatMessages((prevState)=>prevState?[...prevState,...chatList]:chatList)
  }

  const handleSendChatMessage = async (message: string) => {
    const uid = await getUId()
    const mychat = {
      Message: message,
      CreatedAt: "2021-09-01T00:00:00.000Z",
      UID: uid,
    }
    const otherchat = {
      Message: message,
      CreatedAt: "2021-09-01T00:00:00.000Z",
      UID:"sample",
    }
    handleSetChatMessages([mychat,otherchat])
    // const result = await addChatMessage(roomId, message)
    // return result
  }


  return { chatMessages, handleSendChatMessage}
}
