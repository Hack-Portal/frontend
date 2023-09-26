export type ProfileFormData = {
  frameworks: [
    {
      frameworks: string
    },
  ]
  icon: File | null
  locate_id: number
  explanatory_text: string
  tech_tags: [
    {
      tech_tag_id: number
    },
  ]
  twitter_link: string
  github_link: string
  discord_link: string
  username: string
}

export type ProfileFormErrors = {
  [key: string]: string
}
