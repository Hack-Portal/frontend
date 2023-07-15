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
  // const fetcher = (url: string) => fetch(url).then((res) => res.json())

  // const { data, error } = useSWR<HackathonThumb[]>(
  //   'https://seaffood.com/api/v1/hackathons?page_size=3&page_id=1',
  //   fetcher,
  // )
  // if (data === undefined) return <div>loading...</div>
  // console.log(data)

  const hackathons: HackathonThumb[] = [
    {
      hackathon_id: 1,
      name: '【技育CAMP】マンスリーハッカソン vol.6',
      icon: '/image/2.jpg',
      start_date: '2023-07-06', //キックオフ
      expired: '2021-06-30', //募集締め切り
      term: 5,
      hackthon_tag: ['初心者歓迎', 'オフライン'],
    },
    {
      hackathon_id: 2,
      name: '【技育CAMP】マンスリーハッカソン vol.8',
      icon: '/image/2.jpg',
      expired: '2023-07-24',
      start_date: '2023-08-03',
      term: 5,
      hackthon_tag: ['初心者歓迎', 'オフライン'],
    },
    {
      hackathon_id: 3,
      name: '【技育CAMP】マンスリーハッカソン vol.7',
      icon: '/image/2.jpg',
      expired: '2021-07-10',
      start_date: '2021-07-21',
      term: 5,
      hackathon_tag: ['初心者歓迎', 'オフライン'],
    },
    {
      hackathon_id: 4,
      name: '【金沢開催】技育CAMPハッカソン【全国を巡る "キャラバン" ハッカソン】',
      icon: '/image/2.jpg',
      expired: '2021-07-12',
      start_date: '2021-07-21',
      term: 3,
      hackathon_tag: ['オフライン'],
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
          <HackathonList hackathons={hackathons} />
        </Grid>
        <Grid item xs>
          <StackList techStacks={techStacks} />
        </Grid>
      </Grid>
    </>
  )
}
export default Home
