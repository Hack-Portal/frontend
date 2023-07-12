import { Box } from '@mui/joy'
import { Typography } from '@mui/material'
import React from 'react'
import { MemberList } from './MemberList/Index'
import { RoomUser } from '../../types/user'

type Props = {
    users:RoomUser[]
}
export const RoomLeft = (props:Props) => {
  return (
    <Box bgcolor={"#fff"}>
        <Typography variant={"h6"} color={"#333"}>メンバー</Typography>
        <MemberList {...props}/>
    </Box>
  )
}
