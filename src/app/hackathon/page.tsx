import { Header } from '@/components/layouts/Header'
import { Suspense } from 'react'
import { FetchHackathons } from './_services/fetchHackathons'
import { Box, Grid, Typography } from '@mui/material'
import { CenterArea } from '@/components/layouts/CenterArea'
import * as Hackathon from '@/app/hackathon/_components/'

// ここでこのページにおける振る舞いを定義してる
// 参考：https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config

export const dynamic = 'force-dynamic'

const Home = async () => {
  // const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const fetchHackathons = new FetchHackathons()
  const hackathons = await fetchHackathons.fetchAllHackathons()

  const TITLE_TEXT_STYLE = {
    fontSize: {
      xs: '1.5rem', // エクストラスモールデバイス
      sm: '2rem', // スモールデバイス
      md: '2rem', // ミディアムデバイス
      lg: '2rem', // ラージデバイス
      xl: '2.3rem', // エクストララージデバイス
    },
  }

  return (
    <>
      <Header />
      <Box sx={{ padding: '30px 10vw 10vw 10vw' }}>
        <Grid container>
          <Typography sx={{ textAlign: 'center', my: 10, ...TITLE_TEXT_STYLE }}>
            新着ハッカソン
          </Typography>
        </Grid>
        <Suspense fallback={<div>loading...</div>}>
          <CenterArea>
            {hackathons?.map((hackathon) => <Hackathon.Record {...hackathon} />)}
          </CenterArea>
        </Suspense>
      </Box>
    </>
  )
}
export default Home
