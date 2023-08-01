import api from '@/api/$api'
import axios from 'axios'
import { useState } from 'react'
import aspida from '@aspida/axios'

export const useFrameworks = () => {
  const [frameworks, setFrameworks] = useState<any[]>([])

  const handleFetchFrameworks = async () => {
    const client = api(
      aspida(axios, { baseURL: process.env.NEXT_PUBLIC_API_URL }),
    )
    const response = await client.frameworks
      .get()
      .then((response) => console.log(response))
    const data = await response
    return data
  }

  return { frameworks, handleFetchFrameworks }
}
