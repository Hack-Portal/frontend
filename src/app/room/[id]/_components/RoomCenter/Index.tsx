'use client'
import { SendInputArea } from './SendInputArea'
import { Grid } from '@/lib/mui/muiRendering'
import { useChatMessage } from '../../_hooks/useChat'
import { useForm } from 'react-hook-form'
import { ChatFormData } from '../../_types/ChatFormData'
import { ChatList } from './ChatList/Index'
import { Domain_NowRoomAccounts } from '@/api/@types'

type Props = {
  roomId: string
  members?:Domain_NowRoomAccounts[]
}
export const RoomCenter = (props: Props) => {
  const { roomId,members } = props
  const { chatMessages, handleSendChatMessage } = useChatMessage(roomId,members)
  const { control, handleSubmit, reset } = useForm<ChatFormData>()

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
        <ChatList chatMessages={chatMessages} />
        <SendInputArea
          handleSubmit={handleSubmit(onSubmit)}
          control={control}
        />
      </Grid>
    </>
  )
}
