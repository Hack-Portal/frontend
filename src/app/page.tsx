'use client'
import { Header } from '@/components/layouts/Header'
import { HackathonThumb } from './types/hackathon'
import { HackathonList } from './_components/HackathonList'
import UserRating from './_components/UserRating'
import { Grid } from '@mui/material'
import Stackimages from './_components/Stackimages'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Home = () => {
  const { data, error } = useSWR<HackathonThumb[]>('/api/hackathons', fetcher)
  if (data === undefined) return <div>loading...</div>

  return (
    <>
      <Header />
      <Grid container direction="row">
        <Grid item sx={{ ml: 4 }}>
          <UserRating users={[]} />
        </Grid>
        <Grid item>
          {data !== undefined && <HackathonList hackathons={data} />}
        </Grid>
        <Grid item>
          <Stackimages />
        </Grid>
      </Grid>
    </>
  )
}
export default Home
