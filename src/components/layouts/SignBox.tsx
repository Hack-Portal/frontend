import { CardContent, Grid, Card, CardMedia, Box } from '@/lib/mui/muiRendering'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const SignBox = (props: Props) => {
  const { children } = props
  return (
    <Grid
      container
      justifyContent={'center'}
      alignContent={'center'}
      sx={{ width: '100vw', height: '100vh' }}
    >
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '90vw',
          height: '90vh',
        }}
      >
        <CardContent
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {children}
        </CardContent>
        <CardMedia
          component={'img'}
          sx={{ width: '60%', height: '100%', objectFit: 'cover' }}
          title="Your title"
          image={'/image/next.png'}
        />
      </Card>
    </Grid>
  )
}
