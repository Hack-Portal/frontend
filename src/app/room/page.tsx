'use client'

import { CenterArea } from '@/components/layouts/CenterArea'
import { CenterRecordCard } from '@/components/layouts/CenterRecordCard'
import { Header } from '@/components/layouts/Header'
import { RoomThumb } from './types/room'
import { Avatar, Box, CardMedia, Grid } from '@mui/material'
import { RoomRecordRightBox } from './_components/RoomRecordRightBox'
import ModalWindow from './_components/ModalWindow'
import UserRating from '../_components/UserRating'
import Stackimages from '../_components/Stackimages'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Room = () => {
  const { data, error } = useSWR<RoomThumb[]>('/api/room', fetcher)
  if (data === undefined) return <div>loading...</div>

  return (
    <>
      <Header />

      <Grid container spacing={2}>
        <Grid item xs={3}>
          <UserRating users={[]} />
        </Grid>
        <Grid item>
          <CenterArea>
            {data.map((room) => (
              <CenterRecordCard key={room.id} href={`/room/${room.id}`}>
                <CardMedia
                  component="img"
                  sx={{
                    width: 230,
                    height: 230,
                    pt: 2,
                    pl: 2,
                    objectFit: 'cover',
                  }}
                  image={room.hackathon.icon}
                  alt={room.hackathon.name}
                />
                <RoomRecordRightBox
                  hackathonName={room.hackathon.name}
                  title={room.title}
                  member_limit={room.member_limit}
                  now_member={room.now_member}
                  techs={room.techs}
                  frameworks={room.frameworks}
                />
              </CenterRecordCard>
            ))}
          </CenterArea>
        </Grid>
        <Grid item>
          <Stackimages />
        </Grid>
      </Grid>

      <Box
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 40,
          zIndex: 999,
        }}
      >
        <ModalWindow />
      </Box>
    </>
  )
}

export default Room
