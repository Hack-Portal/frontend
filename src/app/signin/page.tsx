'use client'

import { useSignIn } from './hooks/useSignIn'
import { Card, CardContent, CardMedia, Grid } from '@mui/material'
import {  SignInFormContainer } from './_components/SignInFormContainer/Index'
import { useForm } from 'react-hook-form'
import { useIcon } from '../../hooks/useIcon'
import { handleFetchLocates } from '@/util/handleFetchLocates'
import { useTechTags } from '@/hooks/useTechTags'
import { useFrameworks } from '@/hooks/useFrameworks'

const SignIn = () => {
  const {  handleOAuthSignIn,user,isLoading } = useSignIn()
  const {icon,handleSetIcon,preview}=useIcon()
  const { control, handleSubmit } = useForm({}) // 使用したいメソッド等
  const locates:any = handleFetchLocates()
  const {techTags} = useTechTags()
  const {frameworks} = useFrameworks()

  const submit = (data: any) => {
    console.log(data) // フォームの内容が入る
    console.log(user)
  }
  return (
    <Grid
      container
      justifyContent={'center'}
      alignContent={'center'}
      sx={{ width: '100vw', height: '100vh' }}
    >
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '90vw',
          height: '90vh',
        }}
      >
        <CardMedia
          component={'img'}
          sx={{ width: '50%', height: '100%', objectFit: 'cover' }}
          title="Your title"
          image={'/image/jin.png'}
        />
        <CardContent
          sx={{
            width: '60%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <SignInFormContainer
            handleOAuthSignIn={handleOAuthSignIn}
            control={control}
            handleSubmit={handleSubmit(submit)}
            user={user}
            isLoading={isLoading}
            handleSetIcon={handleSetIcon}
            preview={preview}
            locates={locates}
            techTags={techTags}
            frameworks={frameworks}
          />
        </CardContent>
      </Card>
    </Grid>
  )
}
export default SignIn


