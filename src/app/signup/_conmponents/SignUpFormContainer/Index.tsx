'use client'

import { AuthProvider, User } from 'firebase/auth'
import React, { ChangeEvent } from 'react'
import { GoogleAuthProvider } from 'firebase/auth'
import { Button, Grid, Typography } from '@/lib/mui/muiRendering'
import {
  Control,
  FieldValues,
  UseFormHandleSubmit,
  useForm,
} from 'react-hook-form'
import { Db_Frameworks, Db_Locates, Db_TechTags } from '@/api/@types'
import { useIcon } from '@/hooks/useIcon'
import { useSignIn } from '../../hooks/useSignIn'
import { SignUpForm } from '../SignUpForm'
import { SelectLogin } from './SelectLogin'
import { useSelectLogin } from '../../hooks/useSelectLogin'
import { CreateUser } from '../../services/createUser'

type Props = {
  locates: Db_Locates[]
}

export const SignUpFormContainer = (props: Props) => {
  const { locates } = props
  const { signIn, user, isLoading, handleSetSelected, selected } = useSignIn()
  const googleProvider = new GoogleAuthProvider()
  const { control, handleSubmit } = useForm({}) // 使用したいメソッド等
  const { icon, handleSetIcon, preview } = useIcon()
  const UserInstance = new CreateUser()

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
      <Typography variant={'h4'}>新規登録</Typography>
      {selected === null ? (
        <SelectLogin
          handleSetSelected={handleSetSelected}
          handleOAuthSignIn={() => signIn(googleProvider)}
        />
      ) : (
        <SignUpForm
          control={control}
          handleSubmit={handleSubmit(UserInstance.create)}
          handleSetIcon={handleSetIcon}
          preview={preview}
          locates={locates}
          user={user}
        />
      )}
    </Grid>
  )
}
