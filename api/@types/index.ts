/* eslint-disable */
export type Hackathons = {
  name: string
  icon: string
  description?: string | undefined
  link: string
  expired: string
  start_date: string
  term: number
  status_tags?: number | undefined
}

export type Rt_hackathons = {
  hackathons_id?: number | undefined
  name: string
  icon: string
  description?: string | undefined
  link: string
  expired: string
  start_date: string
  term: number
  status_tags?: string | undefined
}
