'use client'

import { CenterArea } from '@/components/layouts/CenterArea'
import { CenterRecordCard } from '@/components/layouts/CenterRecordCard'
import { Header } from '@/components/layouts/Header'
import { RoomThumb } from './types/room'
import { Avatar, Box, CardMedia } from '@mui/material'
import { RoomRecordRightBox } from './_components/RoomRecordRightBox'
import ModalWindow from './_components/ModalWindow'

const Room = () => {
  const rooms: RoomThumb[] = [
    {
      id: 1,
      title: 'ルーム1',
      member_limit: 5,
      hackathon: {
        id: 1,
        name: 'ハッカソン1',
        icon: 'https://source.unsplash.com/random',
      },
      now_member: [
        {
          id: '1',
          icon: 'https://source.unsplash.com/random',
          isOwner: true,
        },
        {
          id: '2',
          icon: 'https://source.unsplash.com/random',
          isOwner: false,
        },
      ],
      techs: [
        { id: 1, name: 'React' },
        { id: 2, name: 'TypeScript' },
      ],
      frameworks: [{ id: 1, name: 'Next.js' }],
    },
    {
      id: 2,
      title:
        'saefwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
      member_limit: 5,
      hackathon: {
        id: 1,
        name: 'ハッカソン1',
        icon: 'https://source.unsplash.com/random',
      },
      now_member: [
        {
          id: '1',
          icon: 'https://source.unsplash.com/random',
          isOwner: true,
        },
        {
          id: '2',
          icon: 'https://source.unsplash.com/random',
          isOwner: false,
        },
      ],
      techs: [
        { id: 1, name: 'React' },
        { id: 2, name: 'TypeScript' },
      ],
      frameworks: [{ id: 1, name: 'Next.js' }],
    },
    {
      id: 3,
      title: 'ルーム1',
      member_limit: 5,
      hackathon: {
        id: 1,
        name: 'ハッカソン1',
        icon: 'https://source.unsplash.com/random',
      },
      now_member: [
        {
          id: '1',
          icon: 'https://source.unsplash.com/random',
          isOwner: true,
        },
        {
          id: '2',
          icon: 'https://source.unsplash.com/random',
          isOwner: false,
        },
      ],
      techs: [
        { id: 1, name: 'JavaScript' },
        { id: 2, name: 'TypeScript' },
        { id: 3, name: 'OracleCloud' },
      ],
      frameworks: [
        { id: 1, name: 'Next.js' },
        { id: 2, name: 'Node.js' },
      ],
    },
  ]
  return (
    <>
      <Header />
      <CenterArea>
        {rooms.map((room) => (
          <CenterRecordCard key={room.id} href={`/room/${room.id}`}>
            <CardMedia
              component="img"
              sx={{
                width: 230,
                height: 230,
                pt: 2,
                pl: 2,
                objectFit: 'cover',
              }}
              image={room.hackathon.icon}
              alt={room.hackathon.name}
            />
            <RoomRecordRightBox
              hackathonName={room.hackathon.name}
              title={room.title}
              member_limit={room.member_limit}
              now_member={room.now_member}
              techs={room.techs}
              frameworks={room.frameworks}
            />
          </CenterRecordCard>
        ))}
      </CenterArea>
      <Box
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 40,
          zIndex: 999,
        }}
      >
        <ModalWindow />
      </Box>
    </>
  )
}

export default Room
