import { Domain_GetRoomResponse } from '@/api/@types'
import { useEffect, useState } from 'react'
import { RoomService } from '../_services/Rooms'

export const useRoom = (roomId:string) => {
  const [room, setRoom] = useState<Domain_GetRoomResponse>()
  const Room = new RoomService()

  useEffect(() => {
    Room.fetch(roomId).then((res) => {
      handleSetRooms(res)
    })
  }, [])

  const handleSetRooms = (data: Domain_GetRoomResponse) => {
    setRoom(data)
  }

  return { room }
}
