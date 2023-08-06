import { Api_HackathonResponses } from '@/api/@types'

export type HackathonThumb = Omit<
  Api_HackathonResponses,
  'description' | 'link'
>
