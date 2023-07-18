'use client'
import { Card, CardMedia, Grtech_tag_id } from '@mui/material'
import { SignUpForm } from './_conmponents/SignUpForm'
import { SelectTech } from './types/tech'

const SignUp = () => {
  return (
    <Grtech_tag_id
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
        <SignUpForm />
      </Card>
    </Grtech_tag_id>
  )
}
export default SignUp
