'use client'

import { CenterArea } from '@/components/layouts/CenterArea'
import { CenterRecordCard } from '@/components/layouts/CenterRecordCard'
import { Header } from '@/components/layouts/Header'
import { RoomThumb } from './types/room'
import { Avatar, Box, CardMedia, Grid } from '@/lib/mui/muiRendering'
import { RoomRecordRightBox } from './_components/RoomRecordRightBox'
import { PostModalWindow } from './_components/PostModalWindow'
import UserRating from '../../components/layouts/UserRating'
import { UserRatingInfo } from '@/components/types/userRating'
import StackList from '@/components/layouts/StackList'
import { TechStack } from '@/types/techStack'
import { Suspense, useEffect, useState } from 'react'
import { SelectTech } from '../signup/types/tech'
import { CenterRoomCard } from '@/components/layouts/CenterRoomCard'
import { FetchRooms } from './_services/fetchRooms'

const Room = async () => {
  const fetchRooms = new FetchRooms()
  const rooms = await fetchRooms.fetchAllRooms()

  const techs: SelectTech[] = [
    {
      id: 1,
      name: 'Python',
      frameworks: [
        {
          framework_id: 1,
          framework: 'Django',
          tech_tag_id: 1,
        },
        {
          framework_id: 2,
          framework: 'Flask',
          tech_tag_id: 1,
        },
        {
          framework_id: 3,
          framework: 'FastAPI',
          tech_tag_id: 1,
        },
      ],
    },
    {
      id: 2,
      name: 'JavaScript',
      frameworks: [
        {
          framework_id: 1,
          framework: 'React',
          tech_tag_id: 2,
        },
        {
          framework_id: 2,
          framework: 'Vue',
          tech_tag_id: 2,
        },
        {
          framework_id: 3,
          framework: 'Next',
          tech_tag_id: 2,
        },
        {
          framework_id: 4,
          framework: 'Nuxt',
          tech_tag_id: 2,
        },
      ],
    },
  ]

  const ROOM_LIST: RoomThumb[] = [
    {
      room_id: 'room1',
      title: 'スクリプト言語集団',
      member_limit: 5,
      hackathon: {
        hackathon_id: 1,
        name: '【技育CAMP】マンスリーハッカソン vol.8',
        icon: 'image/1.jpg',
      },
      now_member: [
        {
          id: 'user1',
          isOwner: true,
          icon: 'image/user1.png',
        },
        {
          id: 'user2',
          isOwner: false,
          icon: 'image/user2.png',
        },
      ],
      techs: [
        {
          tech_tag_id: 1,
          language: 'Python',
        },
        {
          tech_tag_id: 2,
          language: 'JavaScript',
        },
      ],
      frameworks: [
        {
          framework_id: 1,
          framework: 'Django',
          tech_tag_id: 1,
        },
        {
          framework_id: 2,
          framework: 'Flask',
          tech_tag_id: 1,
        },
      ],
    },

    {
      room_id: 'room2',
      title: 'ハッカーズ',
      member_limit: 5,
      hackathon: {
        hackathon_id: 1,
        name: '【技育CAMP】マンスリーハッカソン vol.8',
        icon: 'image/3.jpg',
      },
      now_member: [
        {
          id: 'user1',
          isOwner: true,
          icon: 'image/user1.png',
        },
        {
          id: 'user2',
          isOwner: false,
          icon: 'image/user2.png',
        },
      ],
      techs: [
        {
          tech_tag_id: 1,
          language: 'Java',
        },
        {
          tech_tag_id: 2,
          language: 'C#',
        },
      ],
      frameworks: [
        {
          framework_id: 1,
          framework: 'Spring',
          tech_tag_id: 1,
        },
        {
          framework_id: 2,
          framework: '.NET',
          tech_tag_id: 1,
        },
      ],
    },

    {
      room_id: 'room3',
      title: 'デザイナーズ',
      member_limit: 5,
      hackathon: {
        hackathon_id: 2,
        name: '【技育CAMP】マンスリーハッカソン vol.8',
        icon: 'image/3.jpg',
      },
      now_member: [
        {
          id: 'user6',
          isOwner: true,
          icon: 'image/user6.png',
        },
        {
          id: 'user7',
          isOwner: false,
          icon: 'image/user7.png',
        },
      ],
      techs: [
        {
          tech_tag_id: 1,
          language: 'CSS',
        },
        {
          tech_tag_id: 2,
          language: 'JavaScript',
        },
      ],
      frameworks: [
        {
          framework_id: 1,
          framework: 'BootStrap',
          tech_tag_id: 1,
        },
        {
          framework_id: 2,
          framework: '.JQuery',
          tech_tag_id: 2,
        },
      ],
    },

    {
      room_id: 'room4',
      title: '蛇使い',
      member_limit: 5,
      hackathon: {
        hackathon_id: 1,
        name: '【金沢開催】技育CAMPハッカソン【全国を巡る "キャラバン" ハッカソン】',
        icon: 'image/2.jpg',
      },
      now_member: [
        {
          id: 'user10',
          isOwner: true,
          icon: 'image/user10.png',
        },
        {
          id: 'user9',
          isOwner: false,
          icon: 'image/user9.png',
        },
      ],
      techs: [
        {
          tech_tag_id: 1,
          language: 'Python',
        },
      ],
      frameworks: [
        {
          framework_id: 1,
          framework: 'Django',
          tech_tag_id: 2,
        },
        {
          framework_id: 2,
          framework: 'Flask',
          tech_tag_id: 2,
        },
      ],
    },
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
  const [roomList, setRoomList] = useState<RoomThumb[]>(ROOM_LIST)
  const handleCreateRoom = (teamName: string, selectedCount: number) => {
    setRoomList((prev) => [
      {
        room_id: 'room6',
        title: teamName,
        member_limit: selectedCount,
        hackathon: {
          hackathon_id: 1,
          name: '【技育CAMP】マンスリーハッカソン vol.8',
          icon: 'image/1.jpg',
        },
        now_member: [
          {
            id: 'user1',
            isOwner: true,
            icon: 'image/user1.png',
          },
        ],
        techs: [
          {
            tech_tag_id: 1,
            language: 'Python',
          },
        ],
        frameworks: [
          {
            framework_id: 2,
            framework: 'Flask',
            tech_tag_id: 1,
          },
        ],
      },
      ...prev,
    ])
  }
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
                <CenterRoomCard
                  key={room.room_id}
                  link={`/room/${room.room_id}`}
                >
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
                </CenterRoomCard>
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
        <PostModalWindow handleCreateRoom={handleCreateRoom} />
      </Box>
    </>
  )
}

export default Room
