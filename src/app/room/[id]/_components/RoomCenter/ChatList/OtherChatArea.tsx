import { Avatar, Box, Grid, Typography } from '@/lib/mui/muiRendering'
import React from 'react'
import { ChatList } from '../../../_types/ChatList'

type Props = {
  chatMessage: ChatList
}
export const OtherChatArea = (props:Props) => {
  const {chatMessage} = props
  return (
    <Grid
      container
      sx={{ mt: 1.5, pl: 2 }}
      width={'100%'}
      direction={'row'}
      gap={1}
      justifyContent={'flex-start'}
    >
      <Avatar src={chatMessage.icon} variant="rounded" />
      <Box
        sx={{
          bgcolor: '#eee',
          borderRadius: '0 10px 10px 10px',
          p: 1,
          maxWidth: '70%',
          wordBreak: 'break-word',
        }}
      >
        <Typography color={'#333'}>{chatMessage.Message}</Typography>
      </Box>
    </Grid>
  )
}
