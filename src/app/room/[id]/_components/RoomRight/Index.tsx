import { Grid } from '@mui/material'
import { Header } from './Header'
import { RoomInfo } from '../../types/room'
import { Information } from './Information/Index'

type Props = {
  roomInfo: Omit<RoomInfo, 'users'>
  tab: number
  handleSetTab: (tab: number) => void
}
export const RoomRight = (props: Props) => {
  const { roomInfo, tab, handleSetTab } = props
  return (
    <Grid
      container
      direction={'column'}
      bgcolor={'#fff'}
      alignItems={'center'}
      sx={{ maxHeight: '100vh', overflowY: 'scroll' }}
      wrap="nowrap"
    >
      <Header
        icon={roomInfo.hackathon.icon}
        title={roomInfo.title}
        handleSetTab={handleSetTab}
        tab={tab}
      />

      <Information roomInfo={roomInfo} tab={tab} />
    </Grid>
  )
}
