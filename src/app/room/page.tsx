'use client'

import { CenterArea } from '@/components/layouts/CenterArea'
import { CenterRecordCard } from '@/components/layouts/CenterRecordCard'
import { Header } from '@/components/layouts/Header'
import { RoomThumb } from './types/room'
import { Avatar, Box, CardMedia, Grid } from '@mui/material'
import { RoomRecordRightBox } from './_components/RoomRecordRightBox'
import ModalWindow from './_components/ModalWindow'
import UserRating from '../../components/layouts/UserRating'
import { UserRatingInfo } from '@/components/types/userRating'
import StackList from '@/components/layouts/StackList'
import { TechStack } from '@/types/techStack'

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
  const userRatingInfo: UserRatingInfo[] = [
    {
      id: '1',
      name: 'test',
      icon: 'https://source.unsplash.com/random',
      rating: 3,
    },
    {
      id: '1',
      name: 'test',
      icon: 'image/vercel.png',
      rating: 3,
    },
    {
      id: '1',
      name: 'test',
      icon: 'https://source.unsplash.com/random',
      rating: 3,
    },
    {
      id: '1',
      name: 'test',
      icon: 'https://source.unsplash.com/random',
      rating: 3,
    },
  ]
  const techStacks: TechStack[] = [
    {
      id: '1',
      label: 'FrontendLang',
      name: 'TypeScript',
      icon: 'image/TypeScript.png',
    },

    {
      id: '2',
      label: 'FrontendFramework',
      name: 'Next.js',
      icon: 'image/Next.png',
    },

    {
      id: '3',
      label: 'UILibrary',
      name: 'MaterialUI',
      icon: 'image/mui.png',
    },

    {
      id: '4',
      label: 'BackendLang',
      name: 'GoLang',
      icon: 'image/go.png',
    },

    {
      id: '5',
      label: 'BackendFramework',
      name: 'Jin',
      icon: 'image/jin.png',
    },
    {
      id: '6',
      label: 'DataBase',
      name: 'Firebase',
      icon: 'image/firebase.png',
    },
    {
      id: '7',
      label: 'DataBase',
      name: 'PostgreSQL',
      icon: 'image/PostgreSQL.png',
    },
    {
      id: '8',
      label: 'other',
      name: 'vercel',
      icon: 'image/vercel.png',
    },
  ]
  return (
    <>
      <Header />

      <Grid container  direction="row">
        <Grid item xs>
          <UserRating users={userRatingInfo} />
        </Grid>
        <Grid item>
          <CenterArea>
            {rooms.map((room) => (
              <CenterRecordCard key={room.id} href={`/room/${room.id}`}>
                <CardMedia
                  component="img"
                  sx={{
                    width: 218,
                    height: 218,
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
        </Grid>
        <Grid item xs>
          <StackList techStacks={techStacks} />
        </Grid>
      </Grid>

      <Box
        sx={{
          position: 'fixed',
          bottom: 10,
          right:10,
          zIndex: 999,
          backgroundColor: '#fff',
          borderRadius: '50%',
          width: 60,
          height: 60,
          boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.2)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ModalWindow />
      </Box>
    </>
  )
}

export default Room
