import { Box, Textarea } from '@mui/joy'
import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send'

interface SendInputAreaProps {
  onSendMessage: (message: string) => void
}

export const SendInputArea: React.FC<SendInputAreaProps> = ({
  onSendMessage,
}) => {
  const [message, setMessage] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value)
  }

  const handleSend = () => {
    onSendMessage(message)
    setMessage('')
  }

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: '0px',
        padding: '10px 0 10px 0',
        width: 796,
        display: 'flex',
        background: '#fff',
        justifyContent: 'center',
      }}
    >
      <Textarea
        value={message}
        onChange={handleInputChange}
        placeholder="Type in here…"
        sx={{
          width: '90%',
          fontSize: '1rem',
        }}
      />
      <IconButton
        type="button"
        sx={{ p: '10px' }}
        aria-label="search"
        onClick={handleSend}
      >
        <SendIcon color="primary" />
      </IconButton>
    </Box>
  )
}
