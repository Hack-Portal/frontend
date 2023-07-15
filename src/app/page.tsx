'use client'
import { Header } from '@/components/layouts/Header'
import { Hackathon } from './types/hackathon'
import { HackathonList } from './_components/HackathonList'
import UserRating from './_components/UserRating'
import { Grid } from '@mui/material'
import Stackimages from './_components/Stackimages'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Home = () => {
  const { data, error } = useSWR<Hackathon[]>(
    'https://seaffood.com/api/v1/hackathons?page_size=3&page_id=1',
    fetcher,
  )
  if (data === undefined) return <div>loading...</div>
  console.log(data)

  return (
    <>
      <Header />
      <Grid container direction="row">
        <Grid item sx={{ ml: 4 }}>
          <UserRating users={[]} />
        </Grid>
        <Grid item>{data && <HackathonList hackathons={data} />} </Grid>
        <Grid item>
          <Stackimages />
        </Grid>
      </Grid>
    </>
  )
}
export default Home
