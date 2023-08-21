'use client'
import React, { ChangeEvent } from 'react'
import {
  Box,
  Grid,
  Typography,
} from '@/lib/mui/muiRendering'

import { SignInForm } from './SignInForm'
import { useSignIn } from '../../hooks/useSignIn'

export const SignInFormContainer = () => {
  const { error,handleEmailLogin,handleGoogleLogin} = useSignIn()
  return (
    <Grid
      container
      direction={'column'}
      alignItems={'center'}
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 5,
          mt: 5,
        }}
      >
        <Typography sx={{ fontSize: 32 }}>ログイン</Typography>
        <SignInForm
          emailLogin={handleEmailLogin}
          googleLogin={handleGoogleLogin}
          error={error}
        />
      </Box>
    </Grid>
  )
}
