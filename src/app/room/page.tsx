import { Header } from '@/components/layouts/Header'
import { Avatar, Box, CardMedia, Grid } from '@/lib/mui/muiRendering'
import { PostModalWindow } from './_components/PostModalWindow'
import StackList from '@/components/layouts/StackList'
import { TechStack } from '@/types/techStack'
import { Suspense } from 'react'
import { RoomList } from './_components/RoomList'
import { HackathonService } from './_services/Hackathon'
import { UserRating } from '@/components/layouts/UserRating'

export const dynamic = 'force-static'

const Room = async () => {
  const Hackathon = new HackathonService()
  const hackathons = await Hackathon.fetchAll()

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
          <Grid item sx={{ p: 3, width: '70vw' }}>
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
        <PostModalWindow hackathons={hackathons} />
      </Box>
    </>
  )
}

export default Room
