import axios from 'axios'
import aspida from '@aspida/axios'
import api from '@client/api/$api'
import { getAuthorizationHeader } from '@client/libs/headerManager'
import { API_URL } from '@client/constants/API_URL'

export const aspidaFetcher = (ssr?: boolean) => {
  const ssrAuth = getAuthorizationHeader()
  const client = api(
    aspida(axios, {
      baseURL: API_URL,
      headers: ssr ? { authorization: ssrAuth } : { authorization: '' },
    }),
  )
  return client
}
