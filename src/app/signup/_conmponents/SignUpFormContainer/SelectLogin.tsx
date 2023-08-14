import { Button, Typography,Grid } from '@/lib/mui/muiRendering'
import { AuthProvider } from 'firebase/auth'
import React from 'react'
import { LoginType } from '../../types/loginType'

type Props = {
    handleOAuthSignIn: () => void
    handleSetSelected: (selected:LoginType) => void
}
export const SelectLogin = (props:Props) => {
    const {handleSetSelected,handleOAuthSignIn} = props
  return (
    <Grid>
      <Button onClick={handleOAuthSignIn}>
        Googleで登録
      </Button>
      <Typography>または</Typography>
      <Button variant="contained" onClick={()=>handleSetSelected("email")}>
        メールアドレスで登録
      </Button>
    </Grid>
  )
}
