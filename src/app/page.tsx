'use client'
import { Header } from '@/components/layouts/Header'
import { HackathonList } from './_components/HackathonList'
import UserRating from '../components/layouts/UserRating'
import { Grid } from '@mui/material'
import useSWR from 'swr'
import StackList from '../components/layouts/StackList'
import { TechStack } from '@/types/techStack'
import { UserRatingInfo } from '@/components/types/userRating'
import Image from 'next/image'
import Link from 'next/link'
import { HackathonThumb } from './types/hackathon'

const Home = () => {

  
const fetcher = (url: string) => fetch(url).then((res) => res.json())

  const { data, error } = useSWR<HackathonThumb[]>(
    'https://seaffood.com/api/v1/hackathons?page_size=3&page_id=1',
    fetcher,
  )
  if (data === undefined) return <div>loading...</div>
  console.log(data)

  // const hackathons: HackathonThumb[] = [
  //   {
  //     id: 1,
  //     name: 'ハッカソン1',
  //     icon: '/image/2.jpg',
  //     start_date: '2021-10-10',
  //     expired: '2021-10-10',
  //     term: 3,
  //     hackthon_tag: [
  //       'タグ1',
  //       'タグ2',
  //       'タグ3',
  //       'タグ1',
  //       'タグ2',
  //       'タグ3',
  //       'タグ1',
  //       'タグ2',
  //       'タグ3',
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: 'ハッカソン1',
  //     icon: '/image/2.jpg',
  //     expired: '2021-10-10',
  //     start_date: '2021-10-10',
  //     term: 3,
  //     hackthon_tag: ['タグ1', 'タグ2', 'タグ3'],
  //   },
  //   {
  //     id: 3,
  //     name: 'ハッカソン1',
  //     icon: '/image/2.jpg',
  //     expired: '2021-10-10',
  //     start_date: '2021-10-10',
  //     term: 3,
  //     hackthon_tag: ['タグ1', 'タグ2', 'タグ3'],
  //   },
  //   {
  //     id: 4,
  //     name: 'ハッカソン1',
  //     icon: '/image/2.jpg',
  //     expired: '2021-10-10',
  //     start_date: '2021-10-10',
  //     term: 3,
  //     hackthon_tag: ['タグ1', 'タグ2', 'タグ3'],
  //   },
  // ]
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
  return (
    <>
      <Header />
      <Grid container direction="row">
        <Grid item xs>
          <UserRating users={userRatingInfo} />
        </Grid>
        <Grid item>
          <Link href="">
            <Image
              src="/image/mainbanner.svg"
              alt="me"
              width={800}
              height={150}
              style={{ marginBottom: 16 }}
            />
          </Link>
          <HackathonList hackathons={data} />
        </Grid>
        <Grid item xs>
          <StackList techStacks={techStacks} />
        </Grid>
      </Grid>
    </>
  )
}
export default Home
