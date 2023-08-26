import { Domain_ListRoomResponse } from '@/api/@types'
import { useEffect, useState } from 'react'
import { RoomService } from '../_services/Room'
import { PostRoom } from '../_types/postroom'
import { useRecoilState } from 'recoil'
import { roomListState } from '@/store/atoms/roomsAtom'
import { useCustomRouter } from '@/components/layouts/hooks/CustomRouter'

export const useRoom = () => {
  const [rooms, setRooms] =
    useRecoilState<Domain_ListRoomResponse[]>(roomListState)
  const [previewRoom, setPreviewRoom] = useState<Domain_ListRoomResponse>()
  const { handlePushRouter } = useCustomRouter()
  const handleSetPreview = (room: Domain_ListRoomResponse) => {
    setPreviewRoom(room)
  }
  const fetchRooms = async () => {
    const Room = new RoomService()
    const response = await Room.fetchAll()

    if (response) {
      setRooms(response)
    }
  }

  const createRoom = async (data: PostRoom) => {
    const Room = new RoomService()
    const response = await Room.create(data)
    if (response) {
      fetchRooms()
    }
  }

  const handleJoinRoom = async (roomId: string) => {
    const Room = new RoomService()
    try {
      await Room.join(roomId, () => {
        handlePushRouter(`/room/${roomId}`)
      })
    } catch (error) {
      console.error('APIリクエストエラー:', error)
      throw error
    }
  }

  useEffect(() => {
    fetchRooms()
  },[])

  return { rooms, createRoom, previewRoom, handleSetPreview, handleJoinRoom }
}
