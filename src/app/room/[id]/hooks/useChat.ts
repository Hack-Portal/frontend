import { FirebaseRepository } from '@/repositories/FirebaseRepository'
import { useEffect, useState } from 'react'

export const useChatMessage = () => {
  const [chatMessages, setChatMessages] = useState<string[] | null>(null)
  const firebaseRepository = FirebaseRepository.getInstance()
  const roomId = 'room1'

  useEffect(() => {
    const { fetchChatMessages } = firebaseRepository

    // チャットメッセージの変更を監視
    const unsubscribe = fetchChatMessages(roomId, (chats) => {
      setChatMessages((prevState)=>prevState?[...prevState,...chats]:chats)
    })

    // コンポーネントのアンマウント時に監視を解除
    return () => {
      unsubscribe && unsubscribe()
    }
  }, [roomId])

  const handleSendChatMessage = async (message: string) => {
    setChatMessages((prevState) =>
      prevState ? [...prevState, message] : [message],
    )
  }

  return { chatMessages, handleSendChatMessage }
}
