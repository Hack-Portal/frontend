import { Domain_HackathonResponses } from '@/api/@types'
export type CenterCard = Pick<
Domain_HackathonResponses,
  'description' | 'hackathon_id' | 'icon' | 'name'
>
