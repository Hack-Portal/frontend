import { useState } from 'react'
import axios from 'axios'
import aspida from '@aspida/axios'
import api from '@/api/$api'
import { Api_HackathonResponses } from '@/api/@types'

export const useHackathons = () => {
  const [hackathons, setHackathons] = useState<Api_HackathonResponses[]>([])
  const handleFetchHackathons = async () => {
    try {
      const client: any = api(
        // aspida(axios, { baseURL: 'https://api.seaffood.com/current/v1' }),
        aspida(axios, { baseURL: process.env.NEXT_PUBLIC_API_URL }),
      )
      const response = await client.hackathons.get({
        query: { page_size: 10, page_id: 1, expired: false },
      })
      setHackathons(response.body)
    } catch (error) {
      // エラー処理
      console.error('APIリクエストエラー:', error)
      throw error
    }
  }
  const handleSetHackathons = (hackathons: Api_HackathonResponses[]) => {
    setHackathons(hackathons)
  }
  return { hackathons, handleFetchHackathons, handleSetHackathons }
}
