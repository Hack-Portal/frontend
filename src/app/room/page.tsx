// "use client"
import { Header } from '@/components/layouts/Header'
import { Avatar, Box, CardMedia, Grid } from '@/lib/mui/muiRendering'
import { PostModalWindow } from './_components/PostModalWindow'
import UserRating from '../../components/layouts/UserRating'
import { UserRatingInfo } from '@/components/types/userRating'
import StackList from '@/components/layouts/StackList'
import { TechStack } from '@/types/techStack'
import { Suspense } from 'react'
import { SelectTech } from '../signup/types/tech'
import { FetchRooms } from './_services/fetchRooms'
import { RoomList } from './[id]/_components/RoomCenter/RoomList'
import { CreateUser } from '../signup/services/createUser'

const Room = () => {
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
      <Suspense fallback={'...loading'}>
        <Header />
        <Grid container direction="row">
          <Grid item xs>
            <UserRating />
          </Grid>
          <Grid item>
            <RoomList />
          </Grid>
          <Grid item xs>
            <StackList techStacks={techStacks} />
          </Grid>
        </Grid>
      </Suspense>
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
        <PostModalWindow />
      </Box>
    </>
  )
}

export default Room
