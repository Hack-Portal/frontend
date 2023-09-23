import {
  Domain_GetRoomResponse,
  Domain_UpdateRoomRequestBody,
} from '@/api/@types'
import { useEffect, useState } from 'react'
import { RoomDetailService } from '../_services/RoomDetail'
import { useLoginCheck } from '@/hooks/useLoginCheck'
import { useTab } from '@/hooks/useTab'
import { useMenu } from '@/hooks/useMenu'
import { FirebaseRepository } from '@/repositories/FirebaseRepository'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { roomMembersState } from '@/store/atoms/roomMembers'
import { roomState } from '@/store/atoms/roomAtoms'
import { RoomRepository } from '@/repositories/RoomRepository'
import { NODE_ENV } from '@/constants/NODE_ENV'
import { FirebaseMockRepository } from '@/repositories/mocks/FirebaseMockRepository'
import { RoomMockRepository } from '@/repositories/mocks/RoomMockRepository'
import { useCustomRouter } from '@/hooks/useCustomRouter'

export const useRoomDetail = (roomId: string) => {
  const [isOwner, setIsOwner] = useState<boolean>(false)
  const [room, setRoom] = useRecoilState(roomState)
  const setRoomMembers = useSetRecoilState(roomMembersState)
  const { tab, handleSetTab } = useTab()
  const { isMenuOpened, anchorEl, handleOpenMenu, handleCloseMenu } = useMenu()
  const { handlePushRouter } = useCustomRouter()
  const firebaseRepo =
    NODE_ENV === 'mock'
      ? new FirebaseMockRepository()
      : new FirebaseRepository()
  const RoomRepo =
    NODE_ENV === 'mock' ? new RoomMockRepository() : new RoomRepository()
  const Room = new RoomDetailService(RoomRepo, firebaseRepo)

  /**
   *
   * @param data
   * @returns
   * 自分がルームのオーナーかどうかを判定する
   */
  const handleCheckOwner = async (data: Domain_GetRoomResponse) => {
    const result =
      data?.now_member?.find((member) => member.is_owner)?.account_id ===
      (await firebaseRepo.getUId())
    setIsOwner(result)
  }

  /**
   * ルーム情報を取得してstateにセットする
   */
  const handleSetRoom = async () => {
    try {
      const data = await Room.fetchById(roomId)
      setRoom(data)
      handleCheckOwner(data)
      setRoomMembers(data.now_member!)
      console.log('room', room)
    } catch (error) {
      console.error('An error occurred while fetching the room:', error)
      throw error
    }
  }

  /**
   * ルーム情報を更新する
   */
  const handleUpdateRoom = async (roomInfo: Domain_UpdateRoomRequestBody) => {
    try {
      const data = await Room.update(roomId, roomInfo)
      setRoom(data)
      handleCheckOwner(data)
    } catch (error) {
      console.error('An error occurred while fetching the room:', error)
      throw error
    }
  }

  /**
   * ルームを削除する
   */
  const handleDeleteORLeaveRoom = async () => {
    if (isOwner) {
      try {
        await Room.delete(roomId)
      } catch (error) {
        console.error('An error occurred while fetching the room:', error)
        throw error
      }
    } else {
      try {
        await Room.leave(roomId)
      } catch (error) {
        console.error('An error occurred while fetching the room:', error)
        throw error
      }
    }
    handlePushRouter('/room')
  }

  useLoginCheck(handleSetRoom)

  //  アンマウント時にstateを初期化する
  useEffect(() => {
    return () => {
      setRoom({})
      setRoomMembers([])
    }
  }, [])

  return {
    anchorEl,
    room,
    tab,
    isMenuOpened,
    isOwner,
    handleOpenMenu,
    handleCloseMenu,
    handleSetTab,
    handleUpdateRoom,
    handleDeleteORLeaveRoom,
  }
}
