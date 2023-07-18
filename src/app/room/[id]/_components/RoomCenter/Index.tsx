import { useState } from 'react'
import { SendInputArea } from './SendInputArea'
import { Grid } from '@mui/material'
import { MyChatArea } from './ChatList/MyChatArea'
import { OtherChatArea } from './ChatList/OtherChatArea'

export const RoomCenter = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    [],
  )

  const handleSend = (message: string) => {
    setMessages((prev) => [...prev, { sender: 'me', text: message }])
  }

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
        {messages.map((message, index) => (
          <MyChatArea key={index} text={message.text} />
        ))}
        <SendInputArea onSendMessage={handleSend} />
      </Grid>
    </>
  )
}
