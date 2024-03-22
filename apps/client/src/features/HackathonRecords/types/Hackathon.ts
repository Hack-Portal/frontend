import type { Response_GetHackathon } from '@/api/@types/index'

export type HackathonRecord = {
  expired: UIColumn
  start_date: UIColumn
  term: UIColumn
} & Pick<
  Response_GetHackathon,
  'icon' | 'link' | 'name' | 'status_tags' | 'hackathon_id'
>

interface UIColumn {
  title: string
  date: string
}
