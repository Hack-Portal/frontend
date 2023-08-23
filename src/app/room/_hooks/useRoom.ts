import { Domain_GetRoomResponse } from '@/api/@types'
import { useEffect, useState } from 'react'
import { RoomService } from '../_services/Room'
import { PostRoom } from '../_types/postroom'
import { useRecoilState } from 'recoil'
import { roomListState } from '@/store/atoms/roomsAtom'

export const useRoom = () => {
  const [rooms, setRooms] =
    useRecoilState<Domain_GetRoomResponse[]>(roomListState)
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

  useEffect(() => {
    fetchRooms()
  }, [])

  return { rooms, createRoom }
}
