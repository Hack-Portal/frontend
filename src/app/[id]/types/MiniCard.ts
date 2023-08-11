import { Api_hackathonInfo } from '@/api/@types'
export type MiniCard = Pick<
  Api_hackathonInfo,
  'hackathon_id' | 'expired' | 'start_date' | 'term' | 'link'
>
