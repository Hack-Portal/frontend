'use client'

import { Header } from '@/components/layouts/Header'
import React from 'react'
import { RoomLeft } from './_components/RoomLeft'
import { RoomRight } from './_components/RoomRight'
import { Grid } from '@mui/material'
import { RoomCenter } from './_components/RoomCenter/Index'

type Props = {}
const RoomDetail = (props: Props) => {
  console.log(props)
  return (
    <>
      <Header />
      <Grid
        container
        direction={'row'}
        justifyContent={'center'}
        sx={{ height: '90vh',position:'absolute',top:'10vh' }}
      >
        {/* config */}
        <RoomLeft />
        {/* chat */}
        <RoomCenter />
        {/* member */}
        <RoomRight />
      </Grid>
    </>
  )
}

export default RoomDetail
