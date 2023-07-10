import React from 'react'
import { Container, Sheet, Typography } from '@mui/joy'
import { Location } from './Location'
import { Box, Button, Card, Grid, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { Tech } from '@/types/tech'
import { TechsList } from './TechList'

interface FormValues {
  username: string
}
type Props = {
  techs: Tech[]
}
export const SignUpForm = (props: Props) => {
  const { techs } = props
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Typography sx={{ mt: 15, mb: 5 }}>アイコンとか入れる</Typography>
      <TextField
        {...register('username', { required: true })}
        sx={{ width: '400px' }}
        id="username"
        label="お名前"
        disabled={false}
      />
      <Location />
      <TechsList techs={techs} />

      <Button
        sx={{ mt: 3, mb: 2, width: '200px' }}
        variant="outlined"
        color="primary"
        type="submit"
      >
        登録
      </Button>
    </Grid>
  )
}
