import { Domain_GetRoomResponse } from '@/api/@types'
import { useEffect, useState } from 'react'
import { RoomService } from '../_services/Rooms'
import { useLoginCheck } from '@/hooks/useLoginCheck'
import { useCustomRouter } from '@/hooks/useCustomRouter'
import { useTab } from '@/hooks/useTab'
import { useMenu } from '@/hooks/useMenu'
import { FirebaseRepository } from '@/repositories/FirebaseRepository'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { roomStateFamily } from '@/store/selectors/roomSelector'
import { roomMembersState } from '@/store/atoms/roomMembers'
import { RoomRepository } from '@/repositories/RoomRepository'
import { roomState } from '@/store/atoms/roomAtoms'

export const useRoom = (roomId: string) => {
  const [isOwner, setIsOwner] = useState<boolean>(false)
  const [room, setRoom] = useRecoilState(roomState)
  const { handlePushRouter } = useCustomRouter()
  const { tab, handleSetTab } = useTab()
  const { isMenuOpened, anchorEl, handleOpenMenu, handleCloseMenu } = useMenu()
  const firebase = new FirebaseRepository()
  const handleCheckOwner = async (data: Domain_GetRoomResponse) => {
    const result =
      data?.now_member?.find((member) => member.is_owner)?.account_id ===
      (await firebase.getUId())
    setIsOwner(result)
  }
  const handleSetRoom = async () => {
    try {
      if (room.room_id) return
      const Room = new RoomRepository()
      if (await firebase.getCurrentUser()) {
        const token = await firebase.getToken()
        const data = await Room.fetchById(roomId, token)
        setRoom(data)
      } else {
        throw new Error('ユーザーが存在しない')
      }
    } catch (error) {
      console.error('An error occurred while fetching the room:', error)
      throw error
    }
  }
  const handleCheckedMenu = () => {}
  const setRoomMembers = useSetRecoilState(roomMembersState)

  useEffect(() => {}, [])

  useEffect(() => {
    if (room) {
      const members = room.now_member
      setRoomMembers(members!)
    }
    handleCheckOwner(room)
  }, [room, setRoomMembers])

  useLoginCheck(handleSetRoom)

  return {
    anchorEl,
    room,
    tab,
    isMenuOpened,
    isOwner,
    handleOpenMenu,
    handleCloseMenu,
    handleSetTab,
  }
}
