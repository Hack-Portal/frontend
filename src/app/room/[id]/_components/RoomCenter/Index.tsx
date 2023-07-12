import { CenterArea } from '@/components/layouts/CenterArea'
import { Send } from '@mui/icons-material'
import { Box, Textarea } from '@mui/joy'
import { Divider, Grid, IconButton, InputBase, Paper } from '@mui/material'
import React from 'react'
import { SendInputArea } from './SendInputArea'
import { ChatList } from './ChatList/Index'

export const RoomCenter = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 800,
        minWidth: 800,
        p: 3,
      }}
    >
      <ChatList />
      <SendInputArea />
    </Paper>
  )
}
