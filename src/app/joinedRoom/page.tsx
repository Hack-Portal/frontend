'use client'
import { CenterArea } from '@/components/layouts/CenterArea'
import { Header } from '@/components/layouts/Header'
import React from 'react'
import { RoomList } from './_components/RoomList'
import { RoomListThumb } from '../room/types/roomList'

const JoinedRoom = () => {
  const rooms: RoomListThumb[] = [
    {
      room_id: '1',
      title: 'test',
      hackathon: {
        hackathon_id: 1,
        icon: 'https://picsum.photos/200/300',
      },
    },
    {
      room_id: '1',
      title: 'test',
      hackathon: {
        hackathon_id: 1,
        icon: 'https://picsum.photos/200/300',
      },
    },
  ]
  return (
    <>
      <Header />
      <CenterArea gap={0}>
        <RoomList rooms={rooms} />
      </CenterArea>
    </>
  )
}

export default JoinedRoom
