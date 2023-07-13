import { CenterArea } from '@/components/layouts/CenterArea'
import { Send } from '@mui/icons-material'
import { Box, Textarea } from '@mui/joy'
import {
  Divider,
  Drawer,
  Grid,
  IconButton,
  InputBase,
  Paper,
} from '@mui/material'
import React from 'react'
import { SendInputArea } from './SendInputArea'
import { ChatList } from './ChatList/Index'

export const RoomCenter = () => {
  return (
    <>
      <Grid
        sx={{
          maxWidth: 800,
          minWidth: 800,
          minHeight: '90vh',
          maxHeight: '90vh',
          overflowY: 'scroll',
          borderRight: '2px solid #eee',
          borderLeft: '2px solid #eee',
          bgcolor: '#fff',
          '&::-webkit-scrollbar': {
            width: '0.4em',
            background: 'transparent',
          },
        }}
      >
         
        <ChatList />
        <SendInputArea />
      </Grid>
    </>
  )
}
