import {  Domain_HackathonResponses } from '@/api/@types'
export type MiniCard = Pick<
  Domain_HackathonResponses,
  'hackathon_id' | 'expired' | 'start_date' | 'term' | 'link'
>
