'use client'

import { CenterArea } from "@/components/layouts/CenterArea"
import { CenterRecordCard } from "@/components/layouts/CenterRecordCard"
import { Header } from "@/components/layouts/Header"
import { Room } from "./types/room"
import { Avatar } from "@mui/material"

const Member = () => {
  const rooms: Room[] = [
    {
      id: 1,
      title: 'ルーム1',
      member_limit: 5,
      hackathon_id: 1,
      now_member: [
        {
          id: '1',
          icon: 'https://source.unsplash.com/random',
        },
        {
          id: '2',
          icon: 'https://source.unsplash.com/random',
        },
      ],
    },
    {
      id: 2,
      title: 'ルーム1',
      member_limit: 5,
      hackathon_id: 1,
      now_member: [
        {
          id: '1',
          icon: 'https://source.unsplash.com/random',
        },
        {
          id: '2',
          icon: 'https://source.unsplash.com/random',
        },
      ],
    },
    {
      id: 3,
      title: 'ルーム1',
      member_limit: 5,
      hackathon_id: 1,
      now_member: [
        {
          id: '1',
          icon: 'https://source.unsplash.com/random',
        },
        {
          id: '2',
          icon: 'https://source.unsplash.com/random',
        },
      ],
    },
  ]
  return (
    <>
      <Header />
      <CenterArea>
        {rooms.map((room) => (
          <CenterRecordCard key={room.id} href={`/rooms/${room.id}`}>
            <Avatar alt="Remy Sharp" src={room.now_member[0].icon} />
          </CenterRecordCard>
        ))}
      </CenterArea>
    </>
  )
}

export default Member
