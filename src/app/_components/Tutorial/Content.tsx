import { Box, Card, Typography } from '@mui/material'
import { SideBar } from './SideBar'

type Props = {
  title: string
  sub: { title: JSX.Element; description: string; image: string }[]
}

export const Content = (props: Props) => {
  const { title, sub } = props

  return (
    <Card
      sx={{
        display: 'flex',

        gap: 5,
        borderRadius: '0px',
        boxShadow: 'none',
        flexDirection: 'column',
        mb: 10,
      }}
    >
      <Typography
        sx={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#333',
          textAlign: 'center',
          mt: 10,
        }}
      >
        {title}
      </Typography>
      <SideBar sub={sub} />
    </Card>
  )
}
