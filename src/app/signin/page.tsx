"use client"
import {
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
} from 'firebase/auth'
import type { AuthProvider } from 'firebase/auth'
import { auth } from '@/firebase/client'
import { useSignIn } from './hooks/useSignIn'
import { Card, CardMedia, Grid } from '@mui/material'

const SignIn=()=> {
  const googleProvider = new GoogleAuthProvider()
  const {isSignIn,handleOAuthSignIn} = useSignIn()

  

  return (
    <Grid container justifyContent={"center"} alignContent={"center"} sx={{width:"100vw",height:"100vh"}}>
      <Card>Choose your sign-in method:
      <CardMedia />
      <br />
      <button onClick={() => handleOAuthSignIn(googleProvider)}>Google</button>
      {isSignIn && <p>Sign in!</p>}
      </Card>
    </Grid>
  )
}
export default SignIn