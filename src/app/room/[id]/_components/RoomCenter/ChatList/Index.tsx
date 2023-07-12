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
        maxHeight: '80vh',
        overflowY: 'scroll', // 縦方向にスクロールできるようにする
        pb: 3,
        mt: 1.5,
        backgroundColor: '#fff',
      }}
      wrap="nowrap"
    >
      <MyChatArea />
      <OtherChatArea />
    </Grid>
  )
}
