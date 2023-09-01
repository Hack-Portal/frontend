import { Header } from '@/components/layouts/Header'
import React from 'react'
import { Box, Grid } from '@/lib/mui/muiRendering'
import { RoomCenter } from './_components/RoomCenter'
import { RoomLeft } from './_components/RoomLeft'
import { RoomRight } from './_components/RoomRight'
import { RoomHeader } from './_components/RoomHeader'
import { HackathonService } from './_services/Hackathon'

export const dynamic = 'force-static'

const RoomDetail = async ({ params }: { params: { id: string } }) => {
  const roomId = params.id
  const Hackathon = new HackathonService()
  const hackathons = await Hackathon.fetchAll()

  return (
    <>
      <Header />

      <Box
        sx={{
          bgcolor: '#fff',
          overflowY: 'hidden',
          height: 'calc(100vh - 56px)',
        }}
      >
        {/* container */}
        <Grid container direction={'row'} height={'100%'}>
          {/* info */}
          <Grid item xs={2.5}>
            <RoomLeft roomId={roomId}/>
          </Grid>
          {/* info */}

          {/* right area with header*/}
          <Grid
            item
            xs={9.5}
            sx={{
              borderRight: '2px solid #eee',
              borderLeft: '2px solid #eee',
            }}
            height={'100%'}
          >
            <Grid
              container
              justifyContent={'center'}
              bgcolor={'#fff'}
              direction={'column'}
            >
              <Grid item xs={2}>
                <RoomHeader roomId={roomId} hackathons={hackathons}/>
              </Grid>
              {/* right area */}
              <Grid item xs={10} height={'100%'}>
                <Grid container direction={'row'} height={'100%'}>
                  <Grid item xs={9.5}>
                    <RoomCenter roomId={roomId} />
                  </Grid>
                  <Grid item xs={2.5}>
                    <RoomRight />
                  </Grid>
                </Grid>
              </Grid>
              {/* right area*/}
            </Grid>
            {/* right area with header*/}
          </Grid>
        </Grid>
        {/* container */}
      </Box>
    </>
  )
}

export default RoomDetail
