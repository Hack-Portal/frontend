'use client'
import { Header } from '@/components/layouts/Header'
import { HackathonThumb } from './types/hackathon'
import { HackathonList } from './_components/HackathonList'
import UserRating from '../components/layouts/UserRating'
import { Grid } from '@mui/material'
import StackList from '../components/layouts/StackList'
import { TechStack } from '@/types/techStack'
import { UserRatingInfo } from '@/components/types/userRating'

const Home = () => {
  const hackathons: HackathonThumb[] = [
    {
      id: 1,
      name: 'ハッカソン1',
      icon: '/image/2.jpg',
      start_date: '2021-10-10',
      expired: '2021-10-10',
      term: 3,
      hackthon_tag: ['タグ1', 'タグ2', 'タグ3'],
    },
    {
      id: 2,
      name: 'ハッカソン1',
      icon: '/image/2.jpg',
      expired: '2021-10-10',
      start_date: '2021-10-10',
      term: 3,
      hackthon_tag: ['タグ1', 'タグ2', 'タグ3'],
    },
    {
      id: 3,
      name: 'ハッカソン1',
      icon: '/image/2.jpg',
      expired: '2021-10-10',
      start_date: '2021-10-10',
      term: 3,
      hackthon_tag: ['タグ1', 'タグ2', 'タグ3'],
    },
    {
      id: 4,
      name: 'ハッカソン1',
      icon: '/image/2.jpg',
      expired: '2021-10-10',
      start_date: '2021-10-10',
      term: 3,
      hackthon_tag: ['タグ1', 'タグ2', 'タグ3'],
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
  const userRatingInfo:UserRatingInfo[] = [
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
