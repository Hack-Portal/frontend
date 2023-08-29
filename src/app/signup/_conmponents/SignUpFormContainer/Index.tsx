'use client'

import React, {useEffect } from 'react'
import {
  Box,
  Grid,
  Typography,
} from '@/lib/mui/muiRendering'
import { SignUpDetailForm } from './SignUpDetailForm'
import { Repository_Locate } from '@/api/@types'
import { useSignUp } from '../../hooks/useSignUp'
import { SignUpSelectForm } from './SignUpSelectForm'
import { useCustomRouter } from '@/components/layouts/hooks/CustomRouter'
import { LoginCheck } from '@/services/LoginCheck'

type Props = {
  locates: Repository_Locate[]
}

export const SignUpFormContainer = (props: Props) => {
  const { locates } = props
  const {
    isLogin,
    user,
    error,
    handleEmailLogin,
    handleGoogleLogin,
    createUser,
    handleSetIcon,
    preview,
  } = useSignUp()

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
        <Typography sx={{ fontSize: 32 }}>新規登録</Typography>
        {isLogin ? (
          <SignUpDetailForm
            createUser={createUser}
            handleSetIcon={handleSetIcon}
            preview={preview}
            locates={locates}
            user={user}
          />
        ) : (
          <SignUpSelectForm
            handleEmailLogin={handleEmailLogin}
            handleGoogleLogin={handleGoogleLogin}
            error={error}
          />
        )}
      </Box>
    </Grid>
  )
}
