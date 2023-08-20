import { Header } from '@/components/layouts/Header'
import { HackathonList } from './_components/HackathonList'
import UserRating from '../components/layouts/UserRating'
import { Grid } from '@/lib/mui/muiRendering'
import StackList from '../components/layouts/StackList'
import { TechStack } from '@/types/techStack'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense, useEffect } from 'react'
import { FetchHackathons } from './_services/fetchHackathons'
import { FetchRating } from './_services/fetchRating'
import React from 'react'

const Home = async () => {
  // const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const fetchHackathons = new FetchHackathons()
  const hackathons = await fetchHackathons.fetchAllHackathons()

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
    <Suspense fallback={'...loading'}>
      <Header />
      <Grid container direction="row" justifyContent={'center'}>
        <Grid item xs>
          <UserRating />
        </Grid>
        <Grid item sx={{ p: 3, width: '70vw' }}>
          <Link href="">
            <Image
              src="/image/mainbanner.svg"
              alt="me"
              width={800}
              height={150}
              style={{
                marginBottom: 16,
                width: '100%',
                backgroundColor: '#2A98FD',
              }}
            />
          </Link>

          <Suspense fallback={<div>loading...</div>}>
            {hackathons && <HackathonList hackathons={hackathons} />}
          </Suspense>
        </Grid>
        <Grid item xs>
          <Suspense fallback={<div>Loading...</div>}>
            <StackList techStacks={techStacks} />
          </Suspense>
        </Grid>
      </Grid>
    </Suspense>
  )
}
export default Home
