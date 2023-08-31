import { Avatar, Grid, Typography, Chip } from '@/lib/mui/muiRendering'
import React, { useEffect } from 'react'
import { Domain_AccountResponses } from '@/api/@types'
import { Center } from './Center'

type Props = {
  user: Domain_AccountResponses | undefined
  follow: number | undefined
  follower: number | undefined
}
export const Left = (props: Props) => {
  const { user, follow, follower } = props

  const techs = user?.tech_tags
  const frameworks = user?.frameworks

  return (
    <Grid sx={{ textAlign: 'center' }}>
      <Typography sx={{ fontSize: '25px' }}>Profile</Typography>

      <Grid display={'flex'} textAlign={'center'}>
        {/* 1段目 */}
        <Grid display={'flex'}>
          {/* アイコンとfollw */}
          <Grid
            display={'flex'}
            flexDirection={'column'}
            sx={{
              backgroundColor: '#ccc',
              margin: 'auto',
            }}
          >
            <Avatar
              sx={{ width: 200, height: 200, margin: 'auto' }}
              src={user?.icon}
              alt="Remy Sharp"
            />

            {/* follow まとめ */}
            <Grid
              display={'flex'}
              justifyContent={'space-between'}
              margin={'auto'}
            >
              <Grid textAlign={'center'}>
                <Typography>フォロー</Typography>
                <Typography>{follow}</Typography>
              </Grid>
              <Grid textAlign={'center'}>
                <Typography>フォロワー</Typography>
                <Typography>{follower}</Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* 1-2まとめ */}
          <Grid textAlign={'center'} sx={{ width: '400px' }}>
            <Grid
              display={'flex'}
              justifyContent={'space-around'}
              sx={{ backgroundColor: '#ddd' }}
            >
              {/* name */}
              <Grid textAlign={'center'} alignItems={'center'}>
                <Typography>名前</Typography>
                <Typography sx={{ mt: 1, fontSize: '20px' }}>
                  {user?.username}
                </Typography>
              </Grid>
              {/*  */}
              {/* locate */}
              <Grid sx={{ backgroundColor: '#ddd' }}>
                <Typography>居住地</Typography>
                <Typography sx={{ mt: 1, fontSize: '20px' }}>
                  {user?.locate}
                </Typography>
              </Grid>
              {/*  */}
            </Grid>

            <Grid textAlign={'center'} sx={{ backgroundColor: '#111' }}>
              <Typography color={'#999'}>自己紹介</Typography>
              <Typography sx={{ mt: 2 }}>
                {/* {user?.explanatory_text} */}
              </Typography>
            </Grid>
          </Grid>
          {/*  */}
        </Grid>
        {/* 2段目 */}
      </Grid>
      <Typography sx={{ mt: 3, mb: 3, fontSize: '25px' }}>
        技術スタック
      </Typography>

      <Grid
        alignContent={'space-around'}
        margin={'auto'}
        display={'flex'}
        justifyContent={'space-around'}
        sx={{ mt: 3, width: '200px' }}
      >
        <Chip label="ea" />
        <Chip label="ea" />
        <Chip label="ea" />

        {/* {techs?.map((tech) => {
          return (
            <Chip
              sx={{ mt: 2 }}
              key={tech?.tech_tag_id}
              label={tech?.language}
            />
          )
        })}
        {frameworks?.map((framework) => {
          return (
            <Chip key={framework?.framework_id} label={framework?.framework} />
          )
        })} */}
      </Grid>
    </Grid>
  )
}
