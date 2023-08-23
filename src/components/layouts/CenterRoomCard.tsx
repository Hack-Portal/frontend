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
    <ConfirmModalWindow href={link} >
      <Card
        sx={{
          minHeight: 250,
          maxHeight: 250,
          width: "100%",
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          p: 2,
          position: 'relative',
          boxSizing: 'border-box',
          "&:hover":{boxShadow:"0px 0px 2px  1px #1E90FF"}
        }}
      >
        {children}
      </Card>
    </ConfirmModalWindow>
  )
}
