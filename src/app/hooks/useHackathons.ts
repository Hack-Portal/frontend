import { useState } from 'react'
import axios from 'axios'
import aspida from '@aspida/axios'
import api from '@/api/$api'

export const useHackathons = () => {
  const [hackathons, setHackathons] = useState<any[]>([])
  const handleFetchHackathons = async () => {
    try {
      const client = api(
        aspida(axios, { baseURL: process.env.NEXT_PUBLIC_API_URL }),
      )
      const response = await client.hackathons.get({
        body: { page_size: 3, page_id: 1 }, 
      })
      console.log(response)
    } catch (error) {
      // エラー処理
      console.error('APIリクエストエラー:', error)
    }
  }
  return { hackathons, handleFetchHackathons }
}
