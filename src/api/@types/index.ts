/* eslint-disable */
export type Controller_ErrorResponse = {
  error?: string | undefined
}

export type Controller_SuccessResponse = {
  result?: string | undefined
}

export type Domain_AccountRateResponse = {
  account_id?: string | undefined
  icon?: string | undefined
  rate?: number | undefined
  username?: string | undefined
}

export type Domain_AccountResponses = {
  account_id?: string | undefined
  created_at?: string | undefined
  email?: string | undefined
  explanatory_text?: string | undefined
  frameworks?: Repository_Framework[] | undefined
  icon?: string | undefined
  locate?: string | undefined
  rate?: number | undefined
  show_locate?: boolean | undefined
  show_rate?: boolean | undefined
  tech_tags?: Repository_TechTag[] | undefined
  username?: string | undefined
}

export type Domain_AddChatRequestBody = {
  account_id: string
  message: string
}

export type Domain_BookmarkResponse = {
  description?: string | undefined
  expired?: string | undefined
  hackathon_id?: number | undefined
  icon?: string | undefined
  link?: string | undefined
  name?: string | undefined
  start_date?: string | undefined
  term?: number | undefined
}

export type Domain_CreateAccountRequest = {
  explanatory_text?: string | undefined
  frameworks?: number[] | undefined
  locate_id: number
  show_locate?: boolean | undefined
  show_rate?: boolean | undefined
  tech_tags?: number[] | undefined
  user_id: string
  username: string
  icon?: string | undefined
}

export type Domain_CreateBookmarkRequest = {
  account_id?: string | undefined
  opus?: number | undefined
}

export type Domain_CreateFollowRequestBody = {
  to_account_id: string
}

export type Domain_CreateHackathonRequestBody = {
  description?: string | undefined
  expired?: string | undefined
  link?: string | undefined
  name?: string | undefined
  start_date?: string | undefined
  status_tags?: number[] | undefined
  term?: number | undefined
}

export type Domain_CreateRateRequestBody = {
  rate?: number | undefined
}

export type Domain_CreateRoomRequestBody = {
  account_id: string
  description: string
  hackathon_id: number
  member_limit: number
  title: string
}

export type Domain_GetRoomResponse = {
  create_at?: string | undefined
  description?: string | undefined
  hackathon?: Domain_HackathonInfo | undefined
  is_status?: boolean | undefined
  member_limit?: number | undefined
  members_frameworks?: Domain_RoomFramework[] | undefined
  members_tech_tags?: Domain_RoomTechTags[] | undefined
  now_member?: Domain_NowRoomAccounts[] | undefined
  room_id?: string | undefined
  title?: string | undefined
}

export type Domain_HackathonInfo = {
  description?: string
  expired?: string
  hackathon_id?: number | undefined
  icon?: string | undefined
  link?: string | undefined
  name?: string | undefined
  start_date?: string | undefined
  status_tag?: Repository_StatusTag[] | undefined
  term?: number | undefined
}

export type Domain_HackathonResponses = {
  description?: string | undefined
  expired?: string | undefined
  hackathon_id?: number | undefined
  icon?: string | undefined
  link?: string | undefined
  name?: string | undefined
  start_date?: string | undefined
  status_tags?: Repository_StatusTag[] | undefined
  term?: number | undefined
}

export type Domain_ListRoomHackathonInfo = {
  hackathon_id?: number | undefined
  hackathon_name?: string | undefined
  icon?: string | undefined
}

export type Domain_ListRoomResponse = {
  hackathon?: Domain_ListRoomHackathonInfo | undefined
  members_frameworks?: Domain_RoomFramework[] | undefined
  members_tech_tags?: Domain_RoomTechTags[] | undefined
  now_member?: Domain_NowRoomAccounts[] | undefined
  rooms?: Domain_ListRoomRoomInfo | undefined
}

export type Domain_ListRoomRoomInfo = {
  created_at?: string | undefined
  member_limit?: number | undefined
  room_id?: string | undefined
  title?: string | undefined
}

export type Domain_NowRoomAccounts = {
  account_id?: string | undefined
  icon?: string | undefined
  is_owner?: boolean | undefined
}

export type Domain_RoomFramework = {
  count?: number | undefined
  framework?: Repository_Framework | undefined
}

export type Domain_RoomTechTags = {
  count?: number | undefined
  tech_tag?: Repository_TechTag | undefined
}

export type Domain_UpdateAccountRequest = {
  explanatory_text?: string | undefined
  frameworks?: number[] | undefined
  locate_id?: number | undefined
  show_locate?: boolean | undefined
  show_rate?: boolean | undefined
  tech_tags?: number[] | undefined
  user_id?: string | undefined
  username?: string | undefined
}

export type Domain_UpdateRoomRequestBody = {
  description?: string | undefined
  hackathonID?: number | undefined
  member_limit?: number | undefined
  title?: string | undefined
}

export type Repository_Follow = {
  create_at?: string | undefined
  from_account_id?: string | undefined
  to_account_id?: string | undefined
}

export type Repository_Framework = {
  framework?: string | undefined
  framework_id?: number | undefined
  tech_tag_id?: number | undefined
}

export type Repository_Locate = {
  locate_id?: number | undefined
  name?: string | undefined
}

export type Repository_StatusTag = {
  status?: string | undefined
  status_id?: number | undefined
}

export type Repository_TechTag = {
  language?: string | undefined
  tech_tag_id?: number | undefined
}
