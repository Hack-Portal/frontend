import { Card, Typography } from '@mui/material'
import { Contents } from './About/Contents'

export const About = () => {
  return (
    <Card
      sx={{
        display: 'flex',
        p: 5,
        gap: 10,
        borderRadius: '0px',
        boxShadow: 'none',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography
        sx={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#333',
        }}
      >
        hack hackとは？
      </Typography>
      <Typography
        sx={{
          fontSize: '1.5rem',
          color: '#333',
          textAlign: 'center',
        }}
      >
        hack
        hackは、ハッカソンを探し、チームを作るためのdiscordコミュニティです。
        <br />
        現在人が参加しています。
      </Typography>
      <Contents />
    </Card>
  )
}
