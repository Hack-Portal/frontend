import { Card, CardMedia, Paper } from '@/lib/mui/muiRendering'
import Link from 'next/link'

type Props = {
  href: string
  children: React.ReactNode
}

export const CenterRecordCard = (props: Props) => {
  const { href, children } = props
  return (
    <Link href={href} style={{width:"100%"}} >
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
    </Link>
  )
}
