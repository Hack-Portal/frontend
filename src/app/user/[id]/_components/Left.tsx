import { Avatar, Grid, Typography, Chip, Button } from '@/lib/mui/muiRendering'
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
    <Grid sx={{ textAlign: 'center' }} width={'900px'}>
      <Typography
        sx={{
          textAlign: 'left',
          width: '750px',
          margin: 'auto',
          mb: 2,

          fontSize: '25px',
          borderBottom: '2px solid #ccc',
        }}
      >
        Profile
      </Typography>

      <Grid display={'flex'} textAlign={'center'}>
        {/* 1段目 */}
        <Grid display={'flex'} margin={'auto'}>
          {/* アイコンとfollw */}
          <Grid width={200} display={'flex'} flexDirection={'column'}>
            <Avatar
              sx={{ width: 200, height: 200 }}
              src={user?.icon}
              alt="Remy Sharp"
            />

            {/* follow まとめ */}
            <Grid
              display={'flex'}
              justifyContent={'space-between'}
              margin={'auto'}
            >
              <Grid textAlign={'center'} sx={{ mr: 1 }}>
                <Typography color={'#999'}>フォロー</Typography>
                <Typography>{follow ? follow : 0}</Typography>
              </Grid>
              <Grid textAlign={'center'} sx={{ ml: 1 }}>
                <Typography color={'#999'}>フォロワー</Typography>
                <Typography>{follower ? follower : 0}</Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* 1-2まとめ */}
          <Grid textAlign={'center'} sx={{ width: '400px' }}>
            <Grid display={'flex'} justifyContent={'space-around'}>
              {/* name */}
              <Grid textAlign={'center'} alignItems={'center'}>
                <Typography sx={{ mt: 1, fontSize: '20px' }}>
                  {user?.username}
                </Typography>
              </Grid>
              {/*  */}
              {/* locate */}
              <Grid>
                <Typography sx={{ mt: 1, fontSize: '20px' }}>
                  {user?.locate}
                </Typography>
              </Grid>
              {/*  */}
            </Grid>

            <Grid textAlign={'center'}>
              <Typography sx={{ mt: 2 }} color={'#999'}>
                自己紹介
              </Typography>
              <Typography sx={{ mt: 2 }}>
                {user?.explanatory_text
                  ? user?.explanatory_text
                  : 'よろしくお願いします!!!'}
              </Typography>
            </Grid>
          </Grid>
          {/*  */}
        </Grid>
        {/* 2段目 */}
      </Grid>
      <Typography
        sx={{
          textAlign: 'left',
          width: '750px',
          margin: 'auto',
          mb: 2,
          mt: 3,
          fontSize: '25px',
          borderBottom: '2px solid #ccc',
        }}
      >
        技術スタック
      </Typography>

      <Grid
        alignContent={'space-around'}
        textAlign={'left'}
        display={'flex'}
        sx={{ mt: 3, pl: 9, width: '600px' }}
      >
        {techs?.map((tech) => {
          return (
            <Chip
              sx={{ mt: 2, ml: 1, mr: 1 }}
              key={tech?.tech_tag_id}
              label={tech?.language}
            />
          )
        })}
        {frameworks?.map((framework) => {
          return (
            <Chip
              key={framework?.framework_id}
              label={framework?.framework}
              sx={{
                mt: 2,
                ml: 1,
                mr: 1,
              }}
            />
          )
        })}
      </Grid>
    </Grid>
  )
}
