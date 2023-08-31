'use client'
import { SendInputArea } from './RoomCenter/SendInputArea'
import { Grid } from '@/lib/mui/muiRendering'
import { useChatMessage } from '../_hooks/useChat'
import { useForm } from 'react-hook-form'
import { ChatFormData } from '../_types/ChatFormData'
import { ChatList } from './RoomCenter/ChatList'

import { roomMembersState } from '@/store/atoms/roomMembers'
import { useRecoilValue } from 'recoil'

type Props = {
  roomId: string
}
export const RoomCenter = (props: Props) => {
  const { roomId} = props
  const members = useRecoilValue(roomMembersState) 
  const { chatMessages, handleSendChatMessage,scrollRef } = useChatMessage(
    roomId,
    members,
  )
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
          height: '82vh',
          overflowY: 'scroll',
          bgcolor: '#fff',
          '&::-webkit-scrollbar': {
            width: '0.4em',
            background: 'transparent',
          },
        }}
        ref={scrollRef}
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
