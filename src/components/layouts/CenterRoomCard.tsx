'use client'
import { Card, CardMedia, Paper } from '@/lib/mui/muiRendering'
import { ConfirmModalWindow } from '@/app/(room)/_components/ConfirmModalWindow'
import { Domain_ListRoomResponse } from '@/api/@types'

type Props = Partial<{
  link: string
  children: React.ReactNode
  handleSetPreview: () => void
  previewRoom: Domain_ListRoomResponse
  handleJoinRoom: () => void
}>

export const CenterRoomCard = (props: Props) => {
  const {
    link = '',
    children,
    previewRoom,
    handleSetPreview,
    handleJoinRoom,
  } = props
  return (
    <ConfirmModalWindow
      href={link}
      previewRoom={previewRoom}
      handleSetPreview={handleSetPreview}
      handleJoinRoom={handleJoinRoom}
    >
      <Card
        sx={{
          minHeight: 250,
          maxHeight: 250,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          p: 2,
          position: 'relative',
          boxSizing: 'border-box',
          '&:hover': { boxShadow: '0px 0px 2px  1px #1E90FF' },
        }}
      >
        {children}
      </Card>
    </ConfirmModalWindow>
  )
}
