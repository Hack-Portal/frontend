/* eslint-disable */
export type Models_CasbinPolicy = {
  PType?: string | undefined
  V0?: string | undefined
  V1?: string | undefined
  V2?: string | undefined
  V3?: string | undefined
}

export type Models_RbacPolicy = {
  p_type?: string | undefined
  policy_id?: number | undefined
  v0?: number | undefined
  v1?: string | undefined
  v2?: string | undefined
  v3?: string | undefined
}

export type Request_CreateHackathon = {
  expired: string
  link: string
  name: string
  start_date: string
  'statuses[]'?: number[] | undefined
  term: number
}

export type Request_CreateRbacPolicy = {
  policies?: Models_CasbinPolicy[] | undefined
}

export type Request_CreateStatusTag = {
  status?: string | undefined
}

export type Request_InitAdmin = {
  init_admin_token: string
  name: string
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

export type Response_CreateRbacPolicy = {
  id?: number[] | undefined
}

export type Response_DeleteRbacPolicy = {
  policy_id?: number | undefined
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

export type Response_ListRbacPolicies = {
  policies?: Models_RbacPolicy[] | undefined
}

export type Response_StatusTag = {
  id?: number | undefined
  status?: string | undefined
}

export type Response_User = {
  name?: string | undefined
  password?: string | undefined
  user_id?: string | undefined
}
