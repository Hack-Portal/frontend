'use client'
import { Grid } from '@/lib/mui/muiRendering'
import { Header } from './Header'
import { Information } from './Information/Index'
import { Domain_GetRoomResponse } from '@/api/@types'


type Props = {
  room: Domain_GetRoomResponse
  tab: number
  handleSetTab: (tab: number) => void
}

export const RoomLeft = (props: Props) => {
  const { room,tab,handleSetTab } = props
  
  return (
    <Grid
      container
      direction={'column'}
      bgcolor={'#fff'}
      alignItems={'center'}
      sx={{
        maxHeight: '90vh',
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
          width: '0.4em',
          background: 'transparent',
        },
        pl: 0.7,
      }}
      wrap="nowrap"
    >
      {room && (
        <>
          <Header
            icon={room.hackathon?.icon}
            title={room.title}
            handleSetTab={handleSetTab}
            tab={tab}
          />
          <Information room={room} tab={tab} />
        </>
      )}
    </Grid>
  )
}
