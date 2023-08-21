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
import { EmailSignUpFormData } from '../../types/formData'
import { Controller, useForm } from 'react-hook-form'
import Link from 'next/link'

type Props = {
  handleEmailLogin: (data: EmailSignUpFormData) => void
  handleGoogleLogin: () => void
  error?: string
}
export const SignUpSelectForm = (props: Props) => {
  const { error, handleEmailLogin, handleGoogleLogin } = props
  const { control, handleSubmit } = useForm<EmailSignUpFormData>() // 使用したいメソッド等

  return (
    <Grid container direction={'column'} alignItems={'center'} width={'100%'}>
      <Box
        component="form"
        onSubmit={handleSubmit(handleEmailLogin)}
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
          {/* <Typography mb={4} color="#1994e2" fontSize={"0.8rem"}>
            パスワードを忘れた方へ
          </Typography> */}
        </Link>
        <Button sx={{ width: '70%' }} variant="contained" type="submit">
          登録
        </Button>
      </Box>

      <Typography sx={{ fontSize: 16, mt: 3 }}>または</Typography>

      <Paper elevation={1} sx={{ mt: 3, width: '70%' }}>
        <Button sx={{ width: '100%' }} onClick={handleGoogleLogin}>
          <img
            src="/image/google_sign.png"
            alt="google"
            style={{ width: '50%' }}
          />
        </Button>
      </Paper>
      <Typography sx={{ fontSize: 16, mt: 4 }}>
        アカウントをお持ちの方は{' '}
        <Link href={'/signin'} style={{color:"#1994e2"}}>
          ログイン
        </Link>
      </Typography>
    </Grid>
  )
}
