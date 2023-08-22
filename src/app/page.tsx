import { Header } from '@/components/layouts/Header'
import { HackathonList } from './_components/HackathonList'
import UserRating from '../components/layouts/UserRating'
import { Grid } from '@/lib/mui/muiRendering'
import StackList from '../components/layouts/StackList'
import { TechStack } from '@/types/techStack'
import { UserRatingInfo } from '@/components/types/userRating'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import { FetchHackathons } from './_services/fetchHackathons'

export const dynamic = 'force-static'

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
  // const userRatingInfo: UserRatingInfo[] = [
  //   {
  //     id: '1',
  //     name: 'HackMan',
  //     icon: 'image/user1.png',
  //     rating: 20,
  //   },
  //   {
  //     id: '2',
  //     name: 'HackMania',
  //     icon: 'image/user2.png',
  //     rating: 18,
  //   },
  //   {
  //     id: '3',
  //     name: 'HackNinja',
  //     icon: 'image/user3.png',
  //     rating: 17,
  //   },
  //   {
  //     id: '4',
  //     name: 'Woker',
  //     icon: 'image/user4.png',
  //     rating: 16,
  //   },
  //   {
  //     id: '5',
  //     name: 'HapyHacker',
  //     icon: 'image/user5.png',
  //     rating: 14,
  //   },
  //   {
  //     id: '6',
  //     name: 'BlueCoder',
  //     icon: 'image/user6.png',
  //     rating: 13,
  //   },

  //   {
  //     id: '7',
  //     name: 'purpleCoder',
  //     icon: 'image/user7.png',
  //     rating: 12,
  //   },
  //   {
  //     id: '8',
  //     name: 'Gopher',
  //     icon: 'image/user8.png',
  //     rating: 11,
  //   },
  //   {
  //     id: '9',
  //     name: 'NineHacker',
  //     icon: 'image/user9.png',
  //     rating: 10,
  //   },
  //   {
  //     id: '10',
  //     name: 'TenHacker',
  //     icon: 'image/user10.png',
  //     rating: 9,
  //   },
  // ]
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
