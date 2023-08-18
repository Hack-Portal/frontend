'use client'

import { AuthProvider, GoogleAuthProvider, User } from 'firebase/auth'
import React, { ChangeEvent } from 'react'
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
import { Controller, useForm } from 'react-hook-form'
import { useIcon } from '@/hooks/useIcon'
import { SignUpDetailForm } from './SignUpDetailForm'
import { SelectLogin } from './SelectLogin'
import { CreateUser } from '../../services/createUser'
import { EmailSignUpFormData, SignUpFormData } from '../../types/formData'
import { Repository_Locate } from '@/api/@types'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useSignUp } from '../../hooks/useSignUp'
import { SignUpSelectForm } from './SignUpSelectForm'

type Props = {
  locates: Repository_Locate[]
}

export const SignUpFormContainer = (props: Props) => {
  const { locates } = props
  const { icon, handleSetIcon, preview } = useIcon()
  const {
    isLogin,
    user,
    error,
    handleEmailLogin,
    handleGoogleLogin,
    createUser,
  } = useSignUp()
  console.log(user)

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
          mt:5
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
