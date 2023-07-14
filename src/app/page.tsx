'use client'
import { Header } from '@/components/layouts/Header'
import { HackathonThumb } from './types/hackathon'
import { HackathonList } from './_components/HackathonList'
import UserRating from './_components/UserRating'
import { Grid } from '@mui/material'
import Stackimages from './_components/Stackimages'

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
  return (
    <>
      <Header />
      <Grid container direction="row">
        <Grid item sx={{ ml: 4 }}>
          <UserRating users={[]} />
        </Grid>
        <Grid item>
          <HackathonList hackathons={hackathons} />
        </Grid>
        <Grid item>
          <Stackimages />
        </Grid>
      </Grid>
    </>
  )
}
export default Home
