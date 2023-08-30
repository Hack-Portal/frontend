import { Avatar, Box, Grid, Typography } from '@/lib/mui/muiRendering'
import React from 'react'
import { ChatList } from '../../../_types/ChatList'
import Link from 'next/link'

type Props = {
  chatMessage: ChatList
  link: string
}
export const OtherChatArea = (props: Props) => {
  const { chatMessage, link } = props

  return (
    <Grid
      container
      sx={{ mt: 1.5, pl: 2 }}
      width={'100%'}
      direction={'row'}
      gap={1}
      justifyContent={'flex-start'}
    >
      <Link href={link}>
        <Avatar src={chatMessage.icon} variant="rounded" />
      </Link>
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
