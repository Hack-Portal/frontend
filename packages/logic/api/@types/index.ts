/* eslint-disable */
export type Request_CreateHackathon = {
  expired: string
  icon: string
  link: string
  name: string
  start_date: string
  statuses?: number[]
  term: number
}

export type Request_CreateStatusTag = {
  status?: string | undefined
}

export type Request_GetStatusTagByID = {
  id?: number | undefined
}

export type Request_UpdateStatusTag = {
  id?: number | undefined
  status?: string | undefined
}

export type Response_CreateHackathon = {
  expired?: string | undefined
  hackathon_id?: string | undefined
  icon?: string | undefined
  link?: string | undefined
  name?: string | undefined
  start_date?: string | undefined
  status_tags?: Response_StatusTag[] | undefined
  term?: number | undefined
}

export type Response_GetHackathon = {
  expired?: string | undefined
  hackathon_id?: string | undefined
  icon?: string | undefined
  link?: string | undefined
  name?: string | undefined
  start_date?: string | undefined
  status_tags?: Response_StatusTag[] | undefined
  term?: number | undefined
}

export type Response_StatusTag = {
  id?: number | undefined
  status?: string | undefined
}
