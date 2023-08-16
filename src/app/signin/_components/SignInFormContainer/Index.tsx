'use client'

import { AuthProvider, User } from 'firebase/auth'
import React, { ChangeEvent } from 'react'
import { GoogleAuthProvider } from 'firebase/auth'
import { Button, Typography } from '@/lib/mui/muiRendering'
import { SignInForm } from './SignInForm'
import {
  Control,
  FieldValues,
  UseFormHandleSubmit,
  useForm,
} from 'react-hook-form'
import { Db_Frameworks, Repository_Locate, Db_TechTags } from '@/api/@types'
import { useIcon } from '@/hooks/useIcon'
import { useSignIn } from '../../../signup/hooks/useSignIn'

type Props = {
  locates: Repository_Locate[]
  techTags: Db_TechTags[]
  frameworks: Db_Frameworks[]
}

export const SignInFormContainer = (props: Props) => {
  const { locates, techTags, frameworks } = props

  const handleClickLogin = (data: any) => {
    console.log(data) // フォームの内容が入る
  }
  const { signIn, user, isLoading } = useSignIn()
  const googleProvider = new GoogleAuthProvider()
  const { control, handleSubmit } = useForm({}) // 使用したいメソッド等
  const { icon, handleSetIcon, preview } = useIcon()

  return (
    <>
      <Typography variant={'h4'}>ログイン</Typography>

      <SignInForm
        control={control}
        handleSubmit={handleSubmit}
        user={user}
        isLoading={isLoading}
        handleSetIcon={handleSetIcon}
        preview={preview}
        locates={locates}
        techTags={techTags}
        frameworks={frameworks}
      />
      {user ? (
        <></>
      ) : (
        <Button onClick={() => signIn(googleProvider)}>Googleでログイン</Button>
      )}
      <Button variant="contained" onClick={handleClickLogin}>
        ログイン
      </Button>
    </>
  )
}
