export type ProfileFormData = {
  username: string
  icon: File | null
  locate_id: number
  introduction: string
}

export type ProfileContact = {
  email: string
  twitter_url: string
  github_url: string
  discord_id: string
}

export type ProfileFormErrors = {
  [key: string]: string
}
