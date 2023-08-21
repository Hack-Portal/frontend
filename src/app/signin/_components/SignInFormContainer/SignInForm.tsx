import React from 'react'
import {
  Avatar,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from '@/lib/mui/muiRendering'
import { EmailSignInFormData } from '../../types/formData'
import { Controller, useForm } from 'react-hook-form'
import Link from 'next/link'

type Props = {
  emailLogin: (data: EmailSignInFormData) => void
  googleLogin: () => void
  error?: string
}

export const SignInForm = (props: Props) => {
  const { emailLogin, googleLogin,error } = props
  const { control, handleSubmit } = useForm<EmailSignInFormData>() // 使用したいメソッド等

  return (
    <Grid container direction={'column'} alignItems={'center'} width={'100%'}>
      <Box
        component="form"
        onSubmit={handleSubmit(emailLogin)}
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <FormControl sx={{ width: '70%', mb: 4 }}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="email"
                placeholder=""
                label="メールアドレス"
                size="small"
              />
            )}
          />
        </FormControl>

        <FormControl sx={{ width: '70%', mb: 1 }}>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="password-input"
                type="password"
                label="パスワード"
                size="small"
              />
            )}
          />
        </FormControl>
        {error && <Typography sx={{ color: 'red' }}>{error}</Typography>}
        <Link
          href="/"
          style={{ width: '70%', display: 'flex', justifyContent: 'flex-end' }}
        >
          <Typography mb={4} color="#1994e2" fontSize={'0.8rem'}>
            パスワードを忘れた方へ
          </Typography>
        </Link>
        <Button sx={{ width: '70%' }} variant="contained" type="submit">
          ログイン
        </Button>
      </Box>

      <Typography sx={{ fontSize: 16, mt: 3 }}>または</Typography>

      <Paper elevation={1} sx={{ mt: 3, width: '70%' }}>
        <Button sx={{ width: '100%' }} onClick={googleLogin}>
          <img
            src="/image/google_sign.png"
            alt="google"
            style={{ width: '50%' }}
          />
        </Button>
      </Paper>
      <Typography sx={{ fontSize: 16, mt: 4 }}>
        アカウントをお持ちでない方は{' '}
        <Link href={'/signup'} style={{ color: '#1994e2' }}>
          会員登録
        </Link>
      </Typography>
    </Grid>
  )
}
