'use client'
import { Header } from '@/components/layouts/Header'
import { Button, Paper, Typography } from '@/lib/mui/muiRendering'
import React from 'react'
import { useState, useEffect } from 'react'
import { Left } from './_components/Left'
import { Center } from './_components/Center'
import { Right } from './_components/Right'
import { FetchProfile } from '../user/[id]/_services/fetchProfile'
import { FollowService } from '../user/[id]/_services/fechFollow'
import { Domain_AccountResponses } from '@/api/@types'

const profileStting = ({ params }: { params: { id: string } }) => {
  const { id } = params
  const fetchProfile = new FetchProfile()
  const fetchFollow = new FollowService()
  const [userState, setUser] = useState<Domain_AccountResponses | undefined>(
    undefined,
  )
  const [followState, setFollow] = useState<number>(0)
  const [followerState, setFollower] = useState<number>(0)

  useEffect(() => {
    ;(async () => {
      const userState = await fetchProfile.UserInfo()
      const followState = await fetchFollow.followCount(id)
      const followerState = await fetchFollow.followerCount(id)
      setUser(userState!)
      setFollow(followState)
      setFollower(followerState)
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
        <Left />
        <Center Userinfo={userState} />
        <Right />
      </Paper>
    </>
  )
}
export default profileStting
