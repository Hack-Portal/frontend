import { ReactNode } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { Container, Typography } from '@mui/joy'
import { FormWrap } from '../layouts/FormWrap'
import { useState } from 'react'
import { ListItem, ListItemButton } from '@mui/joy'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { ListItemText } from '@mui/material'
import { ListItemIcon } from '@mui/material'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { ModalWindow } from '../ModalWindow'
import { Location } from '../Location'

interface Props {
  children: ReactNode
}

interface FormValues {
  username: string
}

export const RegisterForm = ({ children }: Props) => {
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <Container sx={{ height: '100vh', mt: 10 }}>
      <FormWrap>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
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
          <ModalWindow />

          <Button
            sx={{ mt: 3, mb: 2, width: '200px' }}
            variant="outlined"
            color="primary"
            type="submit"
          >
            登録
          </Button>
        </Box>
      </FormWrap>
    </Container>
  )
}
