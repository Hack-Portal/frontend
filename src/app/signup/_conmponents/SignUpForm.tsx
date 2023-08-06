import React from 'react'
import { Location } from './Location'
import { Box, Button, Card, Grid, TextField,Typography } from '@/lib/mui/muiRendering'
import { useForm } from 'react-hook-form'
import { Tech } from '@/types/tech'
import { TechsList } from './TechList'

interface FormValues {
  username: string
}

export const SignUpForm = () => {
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
      <TechsList />

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
