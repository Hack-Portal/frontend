import { Grid, Typography } from '@/lib/mui/muiRendering'
import React from 'react'
import { MemberList } from './RoomRight/MemberList'
import { Domain_NowRoomAccounts } from '@/api/@types'

type Props = {
  users: Domain_NowRoomAccounts[]
}

export const RoomRight = (props: Props) => {
  const { users } = props

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
        borderLeft: '2px solid #eee',
        minHeight: '100%',
      }}
      wrap="nowrap"
      width={'auto'}
    >
      <MemberList users={users} />
    </Grid>
  )
}
