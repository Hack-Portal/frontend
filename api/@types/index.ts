/* eslint-disable */
export type Create_hackathons = {
  name: string
  icon: string
  description?: string | undefined
  link: string
  expired: string
  start_date: string
  term: number
}

export type List_hackathons = {
  hackathons_id?: number | undefined
  name: string
  icon: string
  link: string
  expired: string
  start_date: string
  term: number
  status_tags?: {
    status_id?: number | undefined
    status?: string | undefined
  }[] | undefined
}

export type Create_account = {
  user_id: string
  username: string
  icon?: string | undefined
  explanatory_text?: string | undefined
  locate_id: number
  show_locate: boolean
  show_rate: boolean
}

export type Get_account = {
  user_id: string
  user_name: string
  icon?: string | undefined
  explanatory_text?: string | undefined
  locate: string
  rate: number
  show_locate: boolean
  show_rate: boolean
  tech_tags?: string | undefined
  frameworks?: string | undefined
}

export type Create_room = string

export type AddAccountInRoom = string

export type List_rooms = {
  rooms?: {
    room_id?: string | undefined
    title?: string | undefined
    member_limit?: number | undefined
    created_at?: string | undefined
  }[] | undefined
  hackathon?: {
    hackathons_id?: number | undefined
    hackathon_name?: string | undefined
    icon?: string | undefined
  }[] | undefined
  now_member?: {
    user_id?: string | undefined
    icon?: string | undefined
    is_owner?: boolean | undefined
  }[] | undefined
}[]

export type Locates = {
  locate_id?: number | undefined
  name?: string | undefined
}[]
