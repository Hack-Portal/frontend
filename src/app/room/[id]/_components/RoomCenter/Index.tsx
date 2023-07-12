import { CenterArea } from '@/components/layouts/CenterArea'
import { Send } from '@mui/icons-material'
import { Box, Textarea } from '@mui/joy'
import { Divider, Grid, IconButton, InputBase, Paper } from '@mui/material'
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
          Height: '100vh',

          borderRight: '2px solid #83c1ff',
          borderLeft: '2px solid #83c1ff',
          bgcolor: '#fff',
        }}
      >
        <ChatList />
        <SendInputArea />
      </Grid>
    </>
  )
}
