import React from 'react'
import { Suspense } from 'react'
import { FetchHackathons } from './_services/fetchHackathons'
import { Grid, Typography } from '@mui/material'
import * as Hackathon from '../../features/HackathonRecord/components/index'

// ここでこのページにおける振る舞いを定義してる
// 参考：https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config

export const dynamic = 'force-dynamic'

const Home = async () => {
  // const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const fetchHackathons = new FetchHackathons()
  const hackathons = await fetchHackathons.fetchAllHackathons()


  return (
    <>
      <Grid
        container
        direction={'column'}
        sx={{ padding: '30px  3vw 0 3vw' }}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Grid container sx={{ maxWidth: '1980px' }}>
          <Typography
            sx={{
              textAlign: 'center',

              my: [5,10],
              ...TITLE_TEXT_STYLE,
            }}
          >
            新着ハッカソン
          </Typography>
        </Grid>
        <Suspense fallback={<div>loading...</div>}>
          <Grid
            container
            justifyContent={'center'}
            gap={'32px'}
            sx={{ width: '100%', maxWidth: '1980px' }}
          >
            {hackathons?.map((hackathon) => (
              <Hackathon.Record {...hackathon} key={hackathon.hackathon_id}/>
            ))}
          </Grid>
        </Suspense>
      </Grid>
    </>
  )
}

const TITLE_TEXT_STYLE = {
  fontSize: {
    xs: '1.2rem', // エクストラスモールデバイス
    sm: '2rem', // スモールデバイス
    md: '2rem', // ミディアムデバイス
    lg: '2rem', // ラージデバイス
    xl: '2.3rem', // エクストララージデバイス
  },
}

export default Home
