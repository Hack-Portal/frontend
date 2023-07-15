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
import useSWR from 'swr'
import { fetcher } from '@/util/fetcher'
import { Suspense } from 'react'
import { SelectTech } from '../signup/types/tech'

const Room = () => {
  // const { data, error } = useSWR<RoomThumb[]>('/api/room', fetcher)
  const techs: SelectTech[] = [
    {
      id: 1,
      name: 'Python',
      frameworks: [
        {
          id: 1,
          name: 'Django',
        },
        {
          id: 2,
          name: 'Flask',
        },
        {
          id: 3,
          name: 'FastAPI',
        },
      ],
    },
    {
      id: 2,
      name: 'JavaScript',
      frameworks: [
        {
          id: 1,
          name: 'React',
        },
        {
          id: 2,
          name: 'Vue',
        },
        {
          id: 3,
          name: 'Next',
        },
        {
          id: 4,
          name: 'Nuxt',
        },
      ],
    },
    {
      id: 1,
      name: 'Python',
      frameworks: [
        {
          id: 1,
          name: 'Django',
        },
        {
          id: 2,
          name: 'Flask',
        },
        {
          id: 3,
          name: 'FastAPI',
        },
      ],
    },
    {
      id: 2,
      name: 'JavaScript',
      frameworks: [
        {
          id: 1,
          name: 'React',
        },
        {
          id: 2,
          name: 'Vue',
        },
        {
          id: 3,
          name: 'Angular',
        },
      ],
    },
  ]
  const roomList: RoomThumb[] = [
    {
      id: 'room1',
      title: 'Awesome Hack Room 1',
      member_limit: 5,
      hackathon: {
        id: '1',
        name: '【技育CAMP】マンスリーハッカソン vol.8',
        icon: 'image/hackathon1.png',
      },
      now_member: [
        {
          id: 'user1',
          name: 'User 1',
          icon: 'image/user1.png',
        },
        {
          id: 'user2',
          name: 'User 2',
          icon: 'image/user2.png',
        },
      ],
      techs: [
        {
          id: 1,
          name: 'Python',
        },
        {
          id: 2,
          name: 'JavaScript',
        },
      ],
      frameworks: [
        {
          id: 1,
          name: 'Django',
        },
        {
          id: 2,
          name: 'React',
        },
      ],
    },
    {
      id: 'room2',
      title: 'Diverse Coders United',
      member_limit: 4,
      hackathon: {
        id: '2',
        name: '【技育CAMP】マンスリーハッカソン vol.6',
        icon: 'image/hackathon2.png',
      },
      now_member: [
        {
          id: 'user3',
          name: 'User 3',
          icon: 'image/user3.png',
        },
        {
          id: 'user4',
          name: 'User 4',
          icon: 'image/user4.png',
        },
      ],
      techs: [
        {
          id: 3,
          name: 'Java',
        },
        {
          id: 4,
          name: 'C#',
        },
      ],
      frameworks: [
        {
          id: 3,
          name: 'Spring',
        },
        {
          id: 4,
          name: '.NET',
        },
      ],
    },
    {
      id: 'room3',
      title: 'NextGen UI/UX Designers',
      member_limit: 3,
      hackathon: {
        id: '3',
        name: '【技育CAMP】マンスリーハッカソン vol.7',
        icon: 'image/hackathon3.png',
      },
      now_member: [
        {
          id: 'user5',
          name: 'User 5',
          icon: 'image/user5.png',
        },
      ],
      techs: [
        {
          id: 5,
          name: 'CSS',
        },
      ],
      frameworks: [
        {
          id: 5,
          name: 'Bootstrap',
        },
      ],
    },
    {
      id: 'room4',
      title: 'Blockchain Innovators',
      member_limit: 4,
      hackathon: {
        id: '4',
        name: '【金沢開催】技育CAMPハッカソン【全国を巡る "キャラバン" ハッカソン】',
        icon: 'image/hackathon4.png',
      },
      now_member: [
        {
          id: 'user6',
          name: 'User 6',
          icon: 'image/user6.png',
        },
        {
          id: 'user7',
          name: 'User 7',
          icon: 'image/user7.png',
        },
      ],
      techs: [
        {
          id: 6,
          name: 'Solidity',
        },
      ],
      frameworks: [
        {
          id: 6,
          name: 'Truffle',
        },
      ],
    },
    // Continue the same way with the rest of the rooms
    // ...
  ]

  const userRatingInfo: UserRatingInfo[] = [
    {
      id: '1',
      name: 'HackMan',
      icon: 'image/user1.png',
      rating: 20,
    },
    {
      id: '2',
      name: 'HackMania',
      icon: 'image/user2.png',
      rating: 18,
    },
    {
      id: '3',
      name: 'HackNinja',
      icon: 'image/user3.png',
      rating: 17,
    },
    {
      id: '4',
      name: 'Woker',
      icon: 'image/user4.png',
      rating: 16,
    },
    {
      id: '5',
      name: 'HapyHacker',
      icon: 'image/user5.png',
      rating: 14,
    },
    {
      id: '6',
      name: 'BlueCoder',
      icon: 'image/user6.png',
      rating: 13,
    },

    {
      id: '7',
      name: 'purpleCoder',
      icon: 'image/user7.png',
      rating: 12,
    },
    {
      id: '8',
      name: 'Gopher',
      icon: 'image/user8.png',
      rating: 11,
    },
    {
      id: '9',
      name: 'NineHacker',
      icon: 'image/user9.png',
      rating: 10,
    },
    {
      id: '10',
      name: 'TenHacker',
      icon: 'image/user10.png',
      rating: 9,
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

      <Grid container direction="row">
        <Grid item xs>
          <UserRating users={userRatingInfo} />
        </Grid>
        <Grid item>
          <CenterArea>
            <Suspense fallback={<div>loading...</div>}>
              {roomList?.map((room) => (
                <CenterRecordCard key={room.id} href={`/room/${room.id}`}>
                  <CardMedia
                    component="img"
                    sx={{
                      width: 218,
                      height: 218,
                      objectFit: 'cover',
                    }}
                    // image={room.hackathon.icon //
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
            </Suspense>
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
          right: 10,
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
