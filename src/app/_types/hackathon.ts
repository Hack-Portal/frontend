import { Domain_HackathonResponses } from '@/api/@types'

export type HackathonThumb = Omit<
  Domain_HackathonResponses,
  'description' | 'link'
>
