'use client'
import { Card, CardMedia, Paper } from '@/lib/mui/muiRendering'
import { ConfirmModalWindow } from '@/app/room/_components/ConfirmModalWindow'

type Props = {
  link: string
  children: React.ReactNode
}

export const CenterRoomCard = (props: Props) => {
  const { link, children } = props
  return (
    <ConfirmModalWindow href={link}>
      <Card
        sx={{
          minHeight: 250,
          maxHeight: 250,
          maxWidth: 800,
          minWidth: 800,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          p: 2,
          position: 'relative',
        }}
      >
        {children}
      </Card>
    </ConfirmModalWindow>
  )
}
