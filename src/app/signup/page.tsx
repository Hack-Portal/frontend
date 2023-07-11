'use client'
import { Card, CardMedia, Grid } from '@mui/material'
import { SignUpForm } from './_conmponents/SignUpForm'
import { SelectTech } from './types/tech'

const SignUp = () => {
  const techs: SelectTech[] = [
    {
      id: 1,
      name: 'Python',
      frameworks: [
        {
          id: 1,
          name: 'Django',
        },
        {
          id: 2,
          name: 'Flask',
        },
        {
          id: 3,
          name: 'FastAPI',
        },
      ],
    },
    {
      id: 2,
      name: 'JavaScript',
      frameworks: [
        {
          id: 1,
          name: 'React',
        },
        {
          id: 2,
          name: 'Vue',
        },
        {
          id: 3,
          name: 'Next',
        },
        {
          id: 4,
          name: 'Nuxt',
        },
      ],
    },
    {
      id: 1,
      name: 'Python',
      frameworks: [
        {
          id: 1,
          name: 'Django',
        },
        {
          id: 2,
          name: 'Flask',
        },
        {
          id: 3,
          name: 'FastAPI',
        },
      ],
    },
    {
      id: 2,
      name: 'JavaScript',
      frameworks: [
        {
          id: 1,
          name: 'React',
        },
        {
          id: 2,
          name: 'Vue',
        },
        {
          id: 3,
          name: 'Angular',
        },
      ],
    },
  ]
  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems={'center'}
      bgcolor={'primary'}
      sx={{ width: '100vw', height: '100vh' }}
    >
      <Card
        sx={{
          width: '80vw',
          height: '80vh',
          maxWidth: '80vw',
          maxHeight: '80vh',
          display: 'flex',
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: '40%', height: '100vh', objectFit: 'cover' }}
          image={'https://source.unsplash.com/random'}
          alt={'left image'}
        />
        <SignUpForm techs={techs} />
      </Card>
    </Grid>
  )
}
export default SignUp
