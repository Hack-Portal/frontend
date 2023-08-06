import { Grid } from '@/lib/mui/muiRendering'
import { Header } from './Header'
import { RoomInfo } from '../../types/room'
import { Information } from './Information/Index'

type Props = {
  roomInfo: Omit<RoomInfo, 'users'>
  tab: number
  handleSetTab: (tab: number) => void
}

export const RoomLeft = (props: Props) => {
  const { roomInfo, tab, handleSetTab } = props
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
      <Header
        icon={roomInfo.Hackathon.icon}
        title={roomInfo.title}
        handleSetTab={handleSetTab}
        tab={tab}
      />

      <Information roomInfo={roomInfo} tab={tab} />
    </Grid>
  )
}
