'use client'
import { Grid } from '@/lib/mui/muiRendering'
import { Header } from './RoomLeft/Header'
import { Domain_GetRoomResponse } from '@/api/@types'
import { Information } from './RoomLeft/Information'
import { useRoomDetail } from '../_hooks/useRoomDetail'

type Props = {
  roomId: string
}
export const RoomLeft = (props: Props) => {
  const { roomId } = props
  const { room, handleSetTab, tab } = useRoomDetail(roomId)

  return (
    <Grid
      container
      direction={'column'}
      bgcolor={'#fff'}
      alignItems={'center'}
      sx={{
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
          width: '0.4em',
          background: 'transparent',
        },
        pl: 0.7,
        maxWidth: '320px',
        height: '100%',
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
