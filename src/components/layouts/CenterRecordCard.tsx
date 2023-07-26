import { Card, CardMedia, Paper } from '@mui/material'
import Link from 'next/link'

type Props = {
  link: string
  children: React.ReactNode
}

export const CenterRecordCard = (props: Props) => {
  const { link, children } = props
  return (
    <Link href={link}>
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
    </Link>
  )
}
