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
const profileStting = () => {
  const fetchProfile = new FetchProfile()
  const updateUser = new UpdateUser()

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
          width: '1600px',
          height: '800px',
          display: 'flex',
          mb: 10,
        }}
      >
        {/* <Left Userinfo={userState} /> */}
        <Center Userinfo={userState} updateUser={updateUser} />
      </Paper>
    </>
  )
}
export default profileStting
