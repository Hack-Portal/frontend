import { Response_GetHackathon } from '@client/api/@types/index'

export type HackathonRecord = {
  expired: UIColumn
  start_date: UIColumn
  term: UIColumn
} & Pick<
  Response_GetHackathon,
  'icon' | 'link' | 'name' | 'status_tags' | 'hackathon_id'
>

type UIColumn = {
  title: string
  date: string
}

