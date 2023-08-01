import { AuthProvider, User } from 'firebase/auth'
import React, { ChangeEvent } from 'react'
import { GoogleAuthProvider } from 'firebase/auth'
import { Button, Typography } from '@mui/material'
import { SignInForm } from './SignInForm'
import { Control, FieldValues, UseFormHandleSubmit } from 'react-hook-form'
import { Db_Frameworks, Db_Locates, Db_TechTags } from '@/api/@types'

type Props = {
  handleOAuthSignIn: (provider: AuthProvider) => void
  control: Control<FieldValues, any>
  handleSubmit: () => void
  user: User | null
  isLoading: boolean
  handleSetIcon: (file: Blob | null) => void
  preview: string | null
  locates: Db_Locates[]
  techTags: Db_TechTags[]
  frameworks: Db_Frameworks[]
}

export const SignInFormContainer = (props: Props) => {
  const {
    handleOAuthSignIn,
    handleSubmit,
    control,
    user,
    isLoading,
    handleSetIcon,
    preview,
    locates,
    techTags,
    frameworks,
  } = props
  const googleProvider = new GoogleAuthProvider()

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
        <Button onClick={() => handleOAuthSignIn(googleProvider)}>
          Googleでログイン
        </Button>
      )}
      <Button variant="contained" onClick={handleSubmit}>
        送信
      </Button>
    </>
  )
}
