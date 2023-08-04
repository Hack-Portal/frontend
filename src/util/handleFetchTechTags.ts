import api from '@/api/$api'
import { Db_TechTags } from '@/api/@types'
import axios from 'axios'
import { useState } from 'react'
import aspida from '@aspida/axios'

export const handleFetchTechTags = async () => {
  try {
    const client = api(
      aspida(axios, { baseURL: process.env.NEXT_PUBLIC_API_URL }),
    )
    const response = await client.tech_tags.get()
    const data = await response.body
    return data
  } catch (error) {
    throw new Error('Failed to fetch data')
  }
}
