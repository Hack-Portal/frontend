/* eslint-disable */
export type Api_AddChatRequestBody = {
  message: string
}

export type Api_BookmarkResponse = {
  description?: string | undefined
  expired?: string | undefined
  hackathon_id?: number | undefined
  icon?: string | undefined
  link?: string | undefined
  name?: string | undefined
  start_date?: string | undefined
  term?: number | undefined
}

export type Api_CreateAccountRequestBody = {
  explanatory_text?: string | undefined
  frameworks?: number[] | undefined
  icon?: string | undefined
  locate_id: number
  password?: string | undefined
  show_locate: boolean
  show_rate: boolean
  tech_tags?: number[] | undefined
  user_id: string
  username: string
}

export type Api_CreateAccountResponses = {
  explanatory_text?: string | undefined
  frameworks?: Db_Frameworks[] | undefined
  icon?: string | undefined
  locate?: string | undefined
  rate?: number | undefined
  show_locate?: boolean | undefined
  show_rate?: boolean | undefined
  tech_tags?: Db_TechTags[] | undefined
  user_id?: string | undefined
  username?: string | undefined
}

export type Api_CreateBookmarkRequestBody = {
  hackathon_id?: number | undefined
  user_id?: string | undefined
}

export type Api_CreateFollowRequestBody = {
  to_user_id: string
}

export type Api_CreateHackathonRequestBody = {
  description?: string | undefined
  expired?: string | undefined
  icon?: string | undefined
  link?: string | undefined
  name?: string | undefined
  start_date?: string | undefined
  status_tags?: number[] | undefined
  term?: number | undefined
}

export type Api_CreatePastWorkRequestBody = {
  account_past_works?: string[] | undefined
  explanatory_text?: string | undefined
  name?: string | undefined
  past_work_frameworks?: number[] | undefined
  past_work_tags?: number[] | undefined
  thumbnail_image?: number[] | undefined
}

export type Api_CreatePastWorkResponse = {
  account_past_works?: Db_AccountPastWorks[] | undefined
  explanatory_text?: string | undefined
  name?: string | undefined
  opus?: number | undefined
  past_work_frameworks?: Db_PastWorkFrameworks[] | undefined
  past_work_tags?: Db_PastWorkTags[] | undefined
  thumbnail_image?: number[] | undefined
}

export type Api_CreateRateRequestBody = {
  rate?: number | undefined
}

export type Api_CreateRoomRequestBody = {
  description: string
  hackathon_id: number
  member_limit: number
  title: string
  user_id: string
}

export type Api_DeleteResponse = {
  result?: string | undefined
}

export type Api_ErrorResponse = {
  error?: string | undefined
}

export type Api_GetAccountResponses = {
  email?: string | undefined
  explanatory_text?: string | undefined
  frameworks?: Db_Frameworks[] | undefined
  icon?: string | undefined
  locate?: string | undefined
  rate?: number | undefined
  show_locate?: boolean | undefined
  show_rate?: boolean | undefined
  tech_tags?: Db_TechTags[] | undefined
  user_id?: string | undefined
  username?: string | undefined
}

export type Api_GetRoomResponse = {
  create_at?: string | undefined
  description?: string | undefined
  hackathon?: Api_hackathonInfo | undefined
  is_status?: boolean | undefined
  member_limit?: number | undefined
  members_frameworks?: Db_RoomFramework[] | undefined
  members_tech_tags?: Db_RoomTechTags[] | undefined
  now_member?: Db_NowRoomAccounts[] | undefined
  room_id?: string | undefined
  title?: string | undefined
}

export type Api_HackathonResponses = {
  description?: string | undefined
  expired?: string | undefined
  hackathon_id?: number | undefined
  icon?: string | undefined
  link?: string | undefined
  name?: string | undefined
  start_date?: string | undefined
  status_tags?: Db_StatusTags[] | undefined
  term?: number | undefined
}

export type Api_RateResponses = {
  create_at?: string | undefined
  rate?: number | undefined
  user_id?: string | undefined
}

export type Api_UpdateAccountRequestBody = {
  explanatory_text?: string | undefined
  hashed_password?: string | undefined
  locate_id?: number | undefined
  rate?: number | undefined
  show_locate?: boolean | undefined
  show_rate?: boolean | undefined
  username?: string | undefined
}

export type Api_UpdateAccountResponse = {
  created_at?: string | undefined
  explanatory_text?: string | undefined
  hashed_password?: string | undefined
  icon?: string | undefined
  locate?: string | undefined
  rate?: number | undefined
  show_locate?: boolean | undefined
  show_rate?: boolean | undefined
  username?: string | undefined
}

export type Api_UpdateRoomRequestBody = {
  description: string
  member_limit: number
  title: string
}

export type Api_hackathonInfo = {
  description?: string | undefined
  expired?: string | undefined
  hackathon_id?: number | undefined
  icon?: string | undefined
  link?: string | undefined
  name?: string | undefined
  start_date?: string | undefined
  status_tags?: Db_StatusTags[] | undefined
  term?: number | undefined
}

export type Db_AccountPastWorks = {
  opus?: number | undefined
  user_id?: string | undefined
}

export type Db_CreateRoomTxResult = {
  accounts?: Db_NowRoomAccounts[] | undefined
  create_at?: string | undefined
  description?: string | undefined
  frameworks?: Db_RoomFramework[] | undefined
  hackathon?: Db_RoomHackathonData | undefined
  hackathon_id?: number | undefined
  is_delete?: boolean | undefined
  member_limit?: number | undefined
  room_id?: string | undefined
  techtags?: Db_RoomTechTags[] | undefined
  title?: string | undefined
}

export type Db_Follows = {
  create_at?: string | undefined
  from_user_id?: string | undefined
  to_user_id?: string | undefined
}

export type Db_Frameworks = {
  framework?: string | undefined
  framework_id?: number | undefined
  tech_tag_id?: number | undefined
}

export type Db_ListRoomTxHackathonInfo = {
  hackathon_id?: number | undefined
  hackathon_name?: string | undefined
  icon?: string | undefined
}

export type Db_ListRoomTxResult = {
  hackathon?: Db_ListRoomTxHackathonInfo | undefined
  members_frameworks?: Db_RoomFramework[] | undefined
  members_tech_tags?: Db_RoomTechTags[] | undefined
  now_member?: Db_NowRoomAccounts[] | undefined
  rooms?: Db_ListRoomTxRoomInfo | undefined
}

export type Db_ListRoomTxRoomInfo = {
  created_at?: string | undefined
  member_limit?: number | undefined
  room_id?: string | undefined
  title?: string | undefined
}

export type Db_Locates = {
  locate_id?: number | undefined
  name?: string | undefined
}

export type Db_NowRoomAccounts = {
  icon?: string | undefined
  is_owner?: boolean | undefined
  user_id?: string | undefined
}

export type Db_PastWorkFrameworks = {
  framework_id?: number | undefined
  opus?: number | undefined
}

export type Db_PastWorkTags = {
  opus?: number | undefined
  tech_tag_id?: number | undefined
}

export type Db_RoomFramework = {
  count?: number | undefined
  framework?: Db_Frameworks | undefined
}

export type Db_RoomHackathonData = {
  icon?: string | undefined
  id?: number | undefined
  name?: string | undefined
}

export type Db_RoomTechTags = {
  count?: number | undefined
  tech_tag?: Db_TechTags | undefined
}

export type Db_StatusTags = {
  status?: string | undefined
  status_id?: number | undefined
}

export type Db_TechTags = {
  language?: string | undefined
  tech_tag_id?: number | undefined
}
