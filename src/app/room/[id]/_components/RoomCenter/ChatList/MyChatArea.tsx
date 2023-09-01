import { Avatar, Box, Grid, Typography } from '@/lib/mui/muiRendering'
import React from 'react'
import { ChatList } from '../../../_types/ChatList'
import Link from 'next/link'

type Props = {
  chatMessage: ChatList
  link: string
}

export const MyChatArea = (props: Props) => {
  const { chatMessage, link } = props
  return (
    <Grid
      container
      width={'100%'}
      direction={'row'}
      gap={1}
      justifyContent={'flex-end'}
      sx={{ mt: 1.5, pr: 2 }}
    >
      <Box
        sx={{
          bgcolor: 'primary.light',
          borderRadius: '10px 0 10px 10px',
          p: 1,
          textAlign: 'right',
          maxWidth: '70%',
          wordBreak: 'break-word',
        }}
      >
        <Typography color={'#fff'}>{chatMessage.Message}</Typography>
      </Box>
    </Grid>
  )
}
