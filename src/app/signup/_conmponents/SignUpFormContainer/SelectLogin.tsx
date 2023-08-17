import {
  Button,
  Typography,
  Grid,
  Link,
  FormControl,
  InputLabel,
  Input,
  TextField,
  Paper,
} from '@/lib/mui/muiRendering'
import { AuthProvider } from 'firebase/auth'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { LoginType } from '../../types/loginType'
import { Box } from '@mui/joy'

type Props = {
  handleOAuthSignIn: () => void
  handleSetSelected: (selected: LoginType) => void
}

export const SelectLogin = (props: Props) => {
  const { handleSetSelected, handleOAuthSignIn } = props
  const { control, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
    // ここでログイン処理などを行う
  }

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography sx={{ textAlign: 'center', fontSize: 32, mt: 2, mb: 2 }}>
        新規登録
      </Typography>
      <Paper elevation={3} sx={{ mt: 4, width: '65%' }}>
        <Button sx={{ width: '100%' }} onClick={handleOAuthSignIn}>
          <img
            src="/image/google_sign.png"
            alt="google"
            style={{ width: '50%' }}
          />
        </Button>
      </Paper>

      <Typography sx={{ fontSize: 16, mt: 2 }}>または</Typography>
      <Box sx={{ textAlign: 'center' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl sx={{ mt: 2, width: '70%' }}>
            <Typography sx={{ textAlign: 'left' }}>Email</Typography>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField {...field} id="email" placeholder="Email" />
              )}
            />
          </FormControl>

          <FormControl sx={{ mt: 2, width: '70%' }}>
            <Typography sx={{ textAlign: 'left' }}>パスワード</Typography>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  id="password-input"
                  type="password"
                  placeholder="password"
                />
              )}
            />
          </FormControl>

          <Button
            sx={{ mt: 3, width: '70%' }}
            variant="contained"
            type="submit"
          >
            メールアドレスで登録
          </Button>
        </form>

        <Typography sx={{ fontSize: 16, mt: 4 }}>
          アカウントをお持ちの方は <Link href={'/signin'}>ログイン</Link>
        </Typography>
      </Box>
    </Box>
  )
}
