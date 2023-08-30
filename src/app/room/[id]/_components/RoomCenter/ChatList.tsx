import { Grid } from '@/lib/mui/muiRendering'
import React from 'react'
import { MyChatArea } from './ChatList/MyChatArea'
import { OtherChatArea } from './ChatList/OtherChatArea'
import { ChatList as ChatListType } from '../../_types/ChatList'
import { Domain_NowRoomAccounts } from '@/api/@types'

type Props = {
  chatMessages: ChatListType[] | null
  members?: Domain_NowRoomAccounts[]
}

export const ChatList = (props: Props) => {
  const { chatMessages } = props

  return (
    <Grid
      container
      direction={'column'}
      gap={3}
      sx={{
        width: '100%',
        mt: 2,
        mb: 12,
        backgroundColor: '#fff',
        '& ::-webkit-scrollbar': {
          display: 'none',
        },
        '& :hover': {
          '::-webkit-scrollbar': {
            display: 'inline',
          },
        },
      }}
      wrap="nowrap"
    >
      {chatMessages?.map((chatMessage, index) =>
        chatMessage.isMine ? (
          <MyChatArea chatMessage={chatMessage} key={index + 1} link={`/user/${chatMessage.UID}`}/>
        ) : (
          <OtherChatArea chatMessage={chatMessage} key={index + 1} link={`/user/${chatMessage.UID}`}/>
        ),
      )}
    </Grid>
  )
}
