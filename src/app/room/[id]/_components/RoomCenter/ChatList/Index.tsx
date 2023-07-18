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
        mt: 2,
        mb: 12,
        backgroundColor: '#fff',
        '& ::-webkit-scrollbar': {
          display: 'none',
        },
        '& :hover': {
          '::-webkit-scrollbar': {
            display: 'inline',
          },
        },
      }}
      wrap="nowrap"
    >
      <MyChatArea text={''} />
      <OtherChatArea />
      <MyChatArea text={''} />
      <OtherChatArea />
      <MyChatArea text={''} />
    </Grid>
  )
}
