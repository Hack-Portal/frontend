'use client'
import { Header } from '@/components/layouts/Header'
import { Paper } from '@/lib/mui/muiRendering'
import React, { Suspense, use, useEffect } from 'react'
import { Left } from './_components/Left'
import { Center } from './_components/Center'
import { Reight } from './_components/Reight'
import { FetchProfile } from './_services/fetchProfile'
import { FollowService } from './_services/fechFollow'

const profile = async (props: {
  params: {
    id: string
  }
}) => {
  const { id } = props.params

  const fetchProfile = new FetchProfile()
  const fetchFollow = new FollowService()

  const user = await fetchProfile.UserInfo(id)
  const follow = await fetchFollow.followCount(id)
  const follower = await fetchFollow.followerCount(id)

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
        <Suspense fallback={<div>loading...</div>}>
          <Left
            data={user}
            techs={user.tech_tags}
            frameworks={user.frameworks}
            follow={follow}
            follower={follower}
          />
          {/* <Center /> */}
          <Reight data={user} />
        </Suspense>
      </Paper>
    </>
  )
}
export default profile
