import { Domain_ListRoomResponse, Domain_NowRoomAccounts } from '@/api/@types'
import { useEffect, useState } from 'react'
import { RoomService } from '../_services/Room'
import { PostRoom } from '../_types/postroom'
import { useRecoilState } from 'recoil'
import { roomListState } from '@/store/atoms/roomsAtom'
import { useCustomRouter } from '@/components/layouts/hooks/CustomRouter'

export const useRooms = () => {
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

  const handleJoinRoom = async (room: Domain_ListRoomResponse) => {
    const Room = new RoomService()

    try {
      await Room.join(room, () => {
        handlePushRouter(`/room/${room.rooms?.room_id}`)
      })
    } catch (error) {
      console.error('APIリクエストエラー:', error)
      throw error
    }
  }

  useEffect(() => {
    fetchRooms()
  }, [])

  return { rooms, createRoom, previewRoom, handleSetPreview, handleJoinRoom }
}