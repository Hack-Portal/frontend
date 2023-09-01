import { Avatar, Box, Grid, Typography } from '@/lib/mui/muiRendering'
import React from 'react'
import { ChatList } from '../../../_types/ChatList'
import Link from 'next/link'
import { userAgent } from 'next/server'

type Props = {
  chatMessage: ChatList
  link: string
}
export const OtherChatArea = (props: Props) => {
  const { chatMessage, link } = props

  console.log(chatMessage)
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
      <Grid
        container
        direction={'column'}
        gap={0.5}
        sx={{ width: 'auto' }}
        alignItems={'flex-start'}
      >
        <Typography color={'#333'}>{chatMessage.name}</Typography>
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
    </Grid>
  )
}
