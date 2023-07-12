import { Box, Textarea } from '@mui/joy'
import { IconButton } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send'

export const SendInputArea = () => {
  return (
    <Box
    sx={{
      position: 'absolute',
      bottom: '5px',
      width: 800,
      display: 'flex',
      direction: 'row',
    }}
  >
    <Textarea
      placeholder="Type in here…"
      defaultValue="Try to put text longer than 4 lines."
      maxRows={25}
      sx={{
        width: '90%',
        fontSize: '1.2rem',
       
      }}
    />
    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
      <SendIcon color="primary" />
    </IconButton>
  </Box>
  )
}
