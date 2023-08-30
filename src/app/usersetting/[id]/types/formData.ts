export type ProfileFormData = {
  username: string
  icon: File | null
  show_locate: number // number
  explantory_text: string
  tech_tags: string
  frameworks: string
  email: string
  twitter_link: string
  discord_link: string
  github_link: string
}

export type ProfileFormErrors = {
  [key: string]: string
}
