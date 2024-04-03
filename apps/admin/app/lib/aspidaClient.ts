import aspida from '@aspida/axios' // "@aspida/fetch", "@aspida/node-fetch"
import api from '@hack_portal/logic/api/$api'
import axios from 'axios'

export const aspidaClient = api(
  aspida(axios, {
    baseURL: process.env.NEXT_PUBLIC_PRODUCT_API_URL,
  }),
)
