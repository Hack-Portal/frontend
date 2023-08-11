import { Api_hackathonInfo } from '@/api/@types'
export type CenterCard = Pick<
  Api_hackathonInfo,
  'description' | 'hackathon_id' | 'icon' | 'name'
>
