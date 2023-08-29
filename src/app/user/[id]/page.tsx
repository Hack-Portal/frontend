'use client'
import { Header } from '@/components/layouts/Header'
import { Paper } from '@/lib/mui/muiRendering'
import React, { Suspense, useEffect, useState } from 'react'
import { Left } from './_components/Left'
import { Center } from './_components/Center'
import { Reight } from './_components/Reight'
import { FetchProfile } from './_services/fetchProfile'
import { FollowService } from './_services/fechFollow'
import { Domain_AccountResponses } from '@/api/@types'

const Profile = ({ params }: { params: { id: string } }) => {
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
  }, [fetchProfile, fetchFollow])

  return (
    <>
      <Header />

      <Paper
        elevation={5}
        sx={{
          margin: 'auto',
          width: '1600px',
          height: '1000px',
          display: 'flex',
          mb: 10,
        }}
      >
        <Left user={userState} follow={followState} follower={followerState} />
        {/* <Center /> */}

        <Reight data={userState} />
      </Paper>
    </>
  )
}
export default Profile
