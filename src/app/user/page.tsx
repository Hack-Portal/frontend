import { Header } from '@/components/layouts/Header'
import { Paper } from '@/lib/mui/muiRendering'
import React, { Suspense } from 'react'
import { Left } from './_components/Left'
import { Center } from './_components/Center'
import { Reight } from './_components/Reight'
import { FetchProfile } from './_services/fetchProfile'
import { FollowService } from './_services/fechFollow'

const profile = async (props: { params: { id: string; token: string } }) => {
  const { id, token } = props.params

  const fetchProfile = new FetchProfile()
  const fetchFollow = new FollowService()
  const user = await fetchProfile.UserInfo(id, token)
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
        <Left
          data={user}
          techs={user.tech_tags}
          frameworks={user.frameworks}
          follow={follow}
          follower={follower}
        />
        {/* <Center /> */}
        <Reight data={user} />
      </Paper>
    </>
  )
}
export default profile
