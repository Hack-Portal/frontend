'use client'
import { Header } from '@/components/layouts/Header'
import React from 'react'
import { Box, Grid } from '@/lib/mui/muiRendering'
import { RoomCenter } from './_components/RoomCenter/Index'
import { RoomLeft } from './_components/RoomLeft/Index'
import { useTab } from '@/hooks/useTab'
import { useRoom } from './_hooks/useRoom'
import { RoomRight } from './_components/RoomRight/Index'

export const dynamic = 'force-static'

const RoomDetail = ({ params }: { params: { id: string } }) => {
  const roomId = params.id
  const { room } = useRoom(roomId)
  const { tab, handleSetTab } = useTab()
  return (
    <Box
      sx={{
        bgcolor: '#fff',
        maxHeight: '100vh',
        overflowY: 'hidden',
      }}
    >
      {room && (
        <>
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

            <Grid item xs>
              <RoomLeft room={room} tab={tab} handleSetTab={handleSetTab} />
            </Grid>

            {/* chat */}
            <RoomCenter roomId={roomId} members={room.now_member}/>
            {/* chat info */}
            <Grid item xs>
              <RoomRight users={room.now_member!} />
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  )
}

export default RoomDetail
