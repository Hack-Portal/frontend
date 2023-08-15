import { Grid } from '@/lib/mui/muiRendering'
import React from 'react'
import { MyChatArea } from './MyChatArea'
import { OtherChatArea } from './OtherChatArea'

type Props = {
  chatMessages: string[] | null
}

export const ChatList = (props: Props) => {
  const { chatMessages } = props
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
      {chatMessages?.map((chatMessage, index) => (
        <MyChatArea chatMessage={chatMessage} key={index + 1} />
      ))}
    </Grid>
  )
}
