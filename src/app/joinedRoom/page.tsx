'use client'
import { CenterArea } from '@/components/layouts/CenterArea'
import { Header } from '@/components/layouts/Header'
import React from 'react'
import { RoomList } from './_components/RoomList'
import { RoomListThumb } from '../room/room'
import useSWR from 'swr'
import { HackathonThumb } from '../types/hackathon'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const JoinedRoom = () => {
  const { data, error } = useSWR<RoomListThumb[]>('/api/rooms', fetcher)

  // if(data === undefined) return <div>loading...</div>
  return (
    <>
      <Header />
      <CenterArea gap={0}>
        {data !== undefined && <RoomList rooms={data} />}
      </CenterArea>
    </>
  )
}

export default JoinedRoom
