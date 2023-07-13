import { Box, Textarea } from '@mui/joy'
import { IconButton } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send'

export const SendInputArea = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: "0px",
        padding: "10px 0 10px 0",
        width: 796,
        display: 'flex',
        background: '#fff',
        justifyContent: 'center',
      }}
    >
      <Textarea
        placeholder="Type in here…"
        sx={{
          width: '90%',
          fontSize: '1rem',
        }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SendIcon color="primary" />
      </IconButton>
    </Box>
  )
}
