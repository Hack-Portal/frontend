'use client'

import { Header } from '@/components/layouts/Header'
import React from 'react'
import { RoomLeft } from './_components/RoomLeft/Index'
import { RoomRight } from './_components/RoomRight'
import { Grid } from '@mui/material'
import { RoomCenter } from './_components/RoomCenter/Index'

type Props = {}
const RoomDetail = (props: Props) => {
  console.log(props)
  const room = {
    id: 1,
    name: 'test1',
    user: [
      {
        id: "1",
        name: 'test1',
        icon: 'https://source.unsplash.com/random',
        isOwner: true,
        techs: [
          { id: 1, name: 'React' },
          { id: 2, name: 'TypeScript' },
        ],
        frameworks: [{ id: 1, name: 'Next.js' }],
      },
      {
        id: "2",
        name: 'test1',
        icon: 'https://source.unsplash.com/random',
        isOwner: true,
        techs: [
          { id: 1, name: 'React' },
          { id: 2, name: 'TypeScript' },
        ],
        frameworks: [{ id: 1, name: 'Next.js' }],
      }
    ],
  }
  return (
    <>
      <Header />
      <Grid
        container
        direction={'row'}
        justifyContent={'center'}
        sx={{ height: '90vh', position: 'absolute', top: '10.1vh' }}
      >
        {/* member */}
        <Grid xs>
          <RoomLeft users={room.user} />
        </Grid>
        {/* chat */}
        <RoomCenter />
        {/* chat info */}
        <Grid xs>
          <RoomRight />
        </Grid>
      </Grid>
    </>
  )
}

export default RoomDetail
