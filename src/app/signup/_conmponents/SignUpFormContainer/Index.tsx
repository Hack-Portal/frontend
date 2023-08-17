'use client'

import { AuthProvider, GoogleAuthProvider, User } from 'firebase/auth'
import React, { ChangeEvent } from 'react'
import { Button, Grid, Typography } from '@/lib/mui/muiRendering'
import {
  Control,
  FieldValues,
  UseFormHandleSubmit,
  useForm,
} from 'react-hook-form'
import { useIcon } from '@/hooks/useIcon'
import { useSignIn } from '../../hooks/useSignIn'
import { SignUpForm } from '../SignUpForm'
import { SelectLogin } from './SelectLogin'
import { useSelectLogin } from '../../hooks/useSelectLogin'
import { CreateUser } from '../../services/createUser'
import { SignUpFormData } from '../../types/formData'
import { Repository_Locate } from '@/api/@types'
import { useRouter } from 'next/navigation'

type Props = {
  locates: Repository_Locate[]
}

export const SignUpFormContainer = (props: Props) => {
  const { locates } = props
  const { signIn, user, isLoading, handleSetSelected, selected } = useSignIn()
  const googleProvider = new GoogleAuthProvider()
  const { control, handleSubmit } = useForm<SignUpFormData>() // 使用したいメソッド等
  const { icon, handleSetIcon, preview } = useIcon()
  const UserInstance = new CreateUser()
  const router = useRouter()

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
      {selected === null ? (
        <SelectLogin
          handleSetSelected={handleSetSelected}
          handleOAuthSignIn={() => signIn(googleProvider)}
        />
      ) : (
        <SignUpForm
          control={control}
          handleSubmit={handleSubmit(async (data) => {
            ;(await UserInstance.create(data))
              ? router.push('/user')
              : router.push('/user')
          })}
          handleSetIcon={handleSetIcon}
          preview={preview}
          locates={locates}
          user={user}
        />
      )}
    </Grid>
  )
}
