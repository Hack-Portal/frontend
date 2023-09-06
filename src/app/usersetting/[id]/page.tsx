'use client'
import { Header } from '@/components/layouts/Header'
import { Button, Paper, Typography } from '@/lib/mui/muiRendering'
import React from 'react'
import { useState, useEffect } from 'react'
import { Left } from './_components/Left'
import { Center } from './_components/Center'

import { Domain_AccountResponses } from '@/api/@types'
import { FetchProfile } from '@/app/user/[id]/_services/fetchProfile'
import { UpdateUser } from './_services/updateUser'
import { useIcon } from '@/hooks/useIcon'
const profileStting = () => {
  const fetchProfile = new FetchProfile()
  const updateUser = new UpdateUser()
  const { icon, handleSetIcon, preview } = useIcon()

  const [userState, setUser] = useState<Domain_AccountResponses | undefined>(
    undefined,
  )

  useEffect(() => {
    ;(async () => {
      const userState = await fetchProfile.UserInfo()
      setUser(userState!)
    })()
  }, [])

  return (
    <>
      <Header />

      <Paper
        elevation={5}
        sx={{
          margin: 'auto',
          width: '1200px',
          height: '700px',
          mt: 4,
          mb: 10,
        }}
      >
        <Typography textAlign={'center'} sx={{ fontSize: '24px', pt: 3 }}>
          プロフィール編集
        </Typography>

        {/* <Left Userinfo={userState} /> */}
        <Center
          Userinfo={userState}
          updateUser={updateUser}
          handleSetIcon={handleSetIcon}
          preview={preview}
          icon={icon}
        />
      </Paper>
    </>
  )
}
export default profileStting
