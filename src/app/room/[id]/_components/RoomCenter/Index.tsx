"use client"
import { SendInputArea } from './SendInputArea'
import { Grid } from '@/lib/mui/muiRendering'
import { useChatMessage } from '../../hooks/useChat'
import { useForm } from 'react-hook-form'
import { ChatFormData } from '../../types/ChatFormData'
import { ChatList } from './ChatList/Index'

export const RoomCenter = () => {
  const { chatMessages, handleSendChatMessage } = useChatMessage()
  const { control, handleSubmit,reset } = useForm<ChatFormData>()

  // カスタムフックに移動しようとすると、挙動がおかしくなる
  const onSubmit = (data: ChatFormData) => {
    handleSendChatMessage(data.message)
    reset()
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
       <ChatList chatMessages={chatMessages}/>
        <SendInputArea
          handleSubmit={handleSubmit(onSubmit)}
          control={control}
        />
      </Grid>
    </>
  )
}
