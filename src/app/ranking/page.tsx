'use client'
import { Header } from '@/components/layouts/Header'

import { Box, Card, CardMedia, Grid } from '@/lib/mui/muiRendering'
import useSWR from 'swr'
import { TechStack } from '@/types/techStack'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import StackList from '@/components/layouts/StackList'
import UserRating from '@/components/layouts/UserRating'
import { RankingList } from './_components/RankingList'
import { RoomRecordRightBox } from '../room/_components/RoomRecordRightBox'
import { CenterArea } from '@/components/layouts/CenterArea'
import { CenterRecordCard } from '@/components/layouts/CenterRecordCard'
const Ranking = () => {
  const techStacks: TechStack[] = [
    {
      id: '1',
      label: 'FrontendLang',
      name: 'TypeScript',
      icon: 'image/TypeScript.png',
    },

    {
      id: '2',
      label: 'FrontendFramework',
      name: 'Next.js',
      icon: 'image/Next.png',
    },

    {
      id: '3',
      label: 'UILibrary',
      name: 'MaterialUI',
      icon: 'image/mui.png',
    },

    {
      id: '4',
      label: 'BackendLang',
      name: 'GoLang',
      icon: 'image/go.png',
    },

    {
      id: '5',
      label: 'BackendFramework',
      name: 'Jin',
      icon: 'image/jin.png',
    },
    {
      id: '6',
      label: 'DataBase',
      name: 'Firebase',
      icon: 'image/firebase.png',
    },
    {
      id: '7',
      label: 'DataBase',
      name: 'PostgreSQL',
      icon: 'image/PostgreSQL.png',
    },
    {
      id: '8',
      label: 'other',
      name: 'vercel',
      icon: 'image/vercel.png',
    },
  ]

  return (
    <>
      <Header />

      <Grid container direction="row">
        <Grid item xs>
          <UserRating />
        </Grid>
        <Grid item sx={{ p: 3, width: '70vw' }}>
          <CenterArea>
            <Suspense fallback={<div>loading...</div>}>
              <Card
                sx={{
                  minHeight: 250,
                  maxHeight: 250,
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  p: 2,
                  position: 'relative',
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: 218,
                    height: 218,
                    objectFit: 'cover',
                  }}
                  image="image/1.jpg"
                  alt="img"
                />
                <RankingList />
              </Card>
            </Suspense>
          </CenterArea>
        </Grid>
        <Grid item xs>
          <StackList techStacks={techStacks} />
        </Grid>
      </Grid>

      <Box
        sx={{
          position: 'fixed',
          bottom: 10,
          right: 10,
          zIndex: 999,
          backgroundColor: '#fff',
          borderRadius: '50%',
          width: 60,
          height: 60,
          boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.2)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      ></Box>
    </>
  )
}
export default Ranking
