'use client'
import { Card, CardMedia, Grid } from '@mui/material'
import { SignUpForm } from './_conmponents/SignUpForm'
import { SelectTech } from './types/tech'

const SignUp = () => {
  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems={'center'}
      bgcolor={'primary'}
      sx={{ wtech_tag_idth: '100vw', height: '100vh' }}
    >
      <Card
        sx={{
          wtech_tag_idth: '80vw',
          height: '80vh',
          maxWtech_tag_idth: '80vw',
          maxHeight: '80vh',
          display: 'flex',
        }}
      >
        <CardMedia
          component="img"
          sx={{ wtech_tag_idth: '40%', height: '100vh', objectFit: 'cover' }}
          image={'https://source.unsplash.com/random'}
          alt={'left image'}
        />
        <SignUpForm techs={techs} />
      </Card>
    </Grid>
  )
}
export default SignUp
