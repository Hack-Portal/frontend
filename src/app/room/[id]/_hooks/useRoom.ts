import { Domain_GetRoomResponse } from '@/api/@types'
import { useEffect, useState } from 'react'
import { RoomService } from '../_services/Rooms'
import { useLoginCheck } from '@/hooks/useLoginCheck'
import { useCustomRouter } from '@/hooks/useCustomRouter'
import { useTab } from '@/hooks/useTab'
import { useMenu } from '@/hooks/useMenu'
import { FirebaseRepository } from '@/repositories/FirebaseRepository'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { roomStateFamily } from '@/store/selectors/roomSelector'
import { roomMembersState } from '@/store/atoms/roomMembers'

export const useRoom = (roomId: string) => {
  const [isOwner, setIsOwner] = useState<boolean>(false)
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
  const handleCheckedMenu = () => {}
  const room = useRecoilValue(roomStateFamily(roomId))
  const setRoomMembers = useSetRecoilState(roomMembersState)

  useEffect(() => {
    if (room) {
      const members = room.now_member
      setRoomMembers(members!)
    }
    handleCheckOwner(room)
    console.log(room)
  }, [room, setRoomMembers])

  useLoginCheck(() => console.log('check'))

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
