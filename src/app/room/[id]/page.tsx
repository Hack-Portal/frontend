'use client'

import { Header } from '@/components/layouts/Header'
import React from 'react'
import { Box, Grid } from '@mui/material'
import { RoomCenter } from './_components/RoomCenter/Index'
import { RoomInfo } from './types/room'
import { useTab } from '@/hooks/useTab'
import { RoomLeft } from './_components/RoomLeft/Index'
import { RoomRight } from './_components/RoomRight/Index'
import useSWR from 'swr'

type Props = {}

const fetcher = (url: string) => fetch(url).then((res) => res.json())
const RoomDetail = (props: Props) => {
  const { data, error } = useSWR<RoomInfo>('/api/Room', fetcher)
  const { tab, handleSetTab } = useTab()

  if (data === undefined) return <div>loading...</div>

  const users = data.users === undefined ? [] : data.users
  const roomInfo = data
  // const { users, ...roomInfo } = data
  console.log(tab)

  return (
    <Box
      sx={{
        bgcolor: '#fff',
        maxHeight: '100vh',
        overflowY: 'hidden',
      }}
    >
      <Header />

      <Grid
        container
        justifyContent={'center'}
        sx={{
          maxHeight: '90vh',
        }}
      >
        {/* member */}
        <Grid item xs>
          {data !== undefined && (
            <RoomLeft
              roomInfo={roomInfo}
              tab={tab}
              handleSetTab={handleSetTab}
            />
          )}
        </Grid>

        {/* chat */}
        <RoomCenter />
        {/* chat info */}
        <Grid item xs>
          <RoomRight users={users} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default RoomDetail
