import { Grid } from '@mui/material'
import React from 'react'
import { MyChatArea } from './MyChatArea'
import { OtherChatArea } from './OtherChatArea'

type Props = {}
export const ChatList = (props: Props) => {
  return (
    <Grid
      container
      direction={'column'}
      gap={3}
      sx={{
        width: '100%',
        overflowY: 'scroll', // 縦方向にスクロールできるようにする
        mt: 4,

        backgroundColor: '#fff',
      }}
      wrap="nowrap"
    >
      <MyChatArea />
      <OtherChatArea />
    </Grid>
  )
}
