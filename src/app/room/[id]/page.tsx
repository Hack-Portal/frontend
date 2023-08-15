import { Header } from '@/components/layouts/Header'
import React from 'react'
import { Box, Grid } from '@/lib/mui/muiRendering'
import { RoomCenter } from './_components/RoomCenter/Index'
import { RoomInfo } from './types/room'
import { useTab } from '@/hooks/useTab'
import { RoomLeft } from './_components/RoomLeft/Index'
import { RoomRight } from './_components/RoomRight/Index'

type Props = {}

const RoomDetail = (props: Props) => {

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
          marginTop: '-16px',
        }}
      >
        {/* member */}
        {/* <Grid item xs>
          {data && roomInfo && (
            <RoomLeft
              roomInfo={roomInfo}
              tab={tab}
              handleSetTab={handleSetTab}
            />
          )}
        </Grid> */}

        {/* chat */}
        <RoomCenter />
        {/* chat info */}
        <Grid item xs>
          {/* <RoomRight users={users} /> */}
        </Grid>
      </Grid>
    </Box>
  )
}

export default RoomDetail
