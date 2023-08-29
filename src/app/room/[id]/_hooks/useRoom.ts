import { Domain_GetRoomResponse } from '@/api/@types'
import { useEffect, useState } from 'react'
import { RoomService } from '../_services/Rooms'
import { useLoginCheck } from '@/hooks/useLoginCheck'
import { useCustomRouter } from '@/components/layouts/hooks/CustomRouter'

export const useRoom = (roomId: string) => {
  const [room, setRoom] = useState<Domain_GetRoomResponse|null>(null)
  const { handlePushRouter } = useCustomRouter()

  const Room = new RoomService()

  const handleSetRooms = async () => {
    try {
      const data = await Room.fetch(roomId)
      setRoom(data)
    } catch (error) {
      console.error('APIリクエストエラー:', error)
      handlePushRouter('/rooms')
    }
  }

  useLoginCheck(handleSetRooms)

  return { room }
}
