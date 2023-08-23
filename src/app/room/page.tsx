import { Header } from '@/components/layouts/Header'
import { Avatar, Box, CardMedia, Grid } from '@/lib/mui/muiRendering'
import { PostModalWindow } from './_components/PostModalWindow'
import UserRating from '../../components/layouts/UserRating'
import StackList from '@/components/layouts/StackList'
import { TechStack } from '@/types/techStack'
import { Suspense } from 'react'
import { SelectTech } from '../signup/types/tech'
import { RoomList } from './_components/RoomList'
import { CreateUser } from '../signup/services/createUser'
import { FetchHackathons } from '../_services/fetchHackathons'
import { HackathonService } from './_services/Hackathon'

export const dynamic = "force-static";

const Room = async() => {
  const Hackathon = new HackathonService()
  const hackathons = await Hackathon.fetchAll()

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
            <RoomList 
            />
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
        <PostModalWindow hackathons={hackathons}/>
      </Box>
    </>
  )
}

export default Room
