import axios from 'axios'
import aspida from '@aspida/axios'
import api from '@/api/$api'
import { getAuthorizationHeader } from '@/libs/headerManager'
import { API_URL } from '@/constants/API_URL'

export const aspidaFetcher = (ssr?: boolean) => {
  const ssrAuth = getAuthorizationHeader()
  console.log(API_URL)
  const client = api(
    aspida(axios, {
      baseURL: API_URL,
      headers: ssr ? { authorization: ssrAuth } : { authorization: '' },
    }),
  )
  return client
}
