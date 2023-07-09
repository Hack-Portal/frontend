import { ReactNode } from 'react'
import { Box, Button, TextField } from '@mui/material'

interface Props {
  children: ReactNode
}

export const FormWrap = ({ children }: Props) => {
  //色とか付ける
  return <Box>{children}</Box>
}
