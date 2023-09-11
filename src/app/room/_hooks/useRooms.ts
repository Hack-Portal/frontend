import { Domain_ListRoomResponse, Domain_NowRoomAccounts } from '@/api/@types'
import { useEffect, useState } from 'react'
import { RoomService } from '../_services/Room'
import { PostRoom } from '../_types/postroom'
import { useRecoilState } from 'recoil'
import { roomListState } from '@/store/atoms/roomsAtom'
import { useCustomRouter } from '@/hooks/useCustomRouter'
import { useLoginCheck } from '@/hooks/useLoginCheck'
import { useError } from '@/hooks/useError'
import { NODE_ENV } from '@/constants/NODE_ENV'
import { RoomRepository } from '@/repositories/RoomRepository'
import { FirebaseRepository } from '@/repositories/FirebaseRepository'
import { RoomAccountRepository } from '@/repositories/RoomAcount'
import { FirebaseMockRepository } from '@/repositories/mocks/FirebaseMockRepository'
import { RoomMockRepository } from '@/repositories/mocks/RoomMockRepository'
import { RoomAccountMockRepository } from '@/repositories/mocks/RoomAccountMockRepository'

export const useRooms = () => {
  const roomRepo =
    NODE_ENV === 'local' ? new RoomMockRepository() : new RoomRepository()
  const firebaseRepo =
    NODE_ENV === 'local'
      ? new FirebaseMockRepository()
      : new FirebaseRepository()
  const roomAccountRepo =
    NODE_ENV === 'local'
      ? new RoomAccountMockRepository()
      : new RoomAccountRepository()

  const [rooms, setRooms] =
    useRecoilState<Domain_ListRoomResponse[]>(roomListState)
  const [previewRoom, setPreviewRoom] = useState<Domain_ListRoomResponse>()
  const { handlePushRouter } = useCustomRouter()
  const handleSetPreview = (room: Domain_ListRoomResponse) => {
    setPreviewRoom(room)
  }
  const { handleError } = useError()
  const Room = new RoomService(roomRepo, firebaseRepo, roomAccountRepo)

  const fetchRooms = async () => {
    try {
      const response = await Room.fetchAll()
      setRooms(response)
    } catch (error: unknown) {
      if (error instanceof Error) {
        // 型ガード
        console.error('APIリクエストエラー:', error.message)
        handleError(error)
      } else {
        console.error('未知のエラー:', error)
      }
    }
  }

  const createRoom = async (data: PostRoom) => {
    const response = await Room.create(data)
    if (response) {
      fetchRooms()
    }
  }

  const handleJoinRoom = async (room: Domain_ListRoomResponse) => {
    try {
      await Room.join(room, () => {
        handlePushRouter(`/room/${room.rooms?.room_id}`)
      })
    } catch (error) {
      console.error('APIリクエストエラー:', error)
      throw error
    }
  }

  useLoginCheck(fetchRooms)

  return { rooms, createRoom, previewRoom, handleSetPreview, handleJoinRoom }
}
