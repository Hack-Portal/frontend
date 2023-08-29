import { Card, Typography } from '@/lib/mui/muiRendering'
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
        HACK PORTALとは？
      </Typography>
      <Contents/>
    </Card>
  )
}
