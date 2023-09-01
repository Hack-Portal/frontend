export type ProfileFormData = {
  discord_link: string
  email: string
  explanatory_text: string
  frameworks: [
    {
      framework_id: number
    },
  ]
  github_link: string
  icon: File | null
  locate: string

  tech_tags: [
    {
      tech_tag_id: number
    },
  ]
  twitter_link: string
  username: string
}

export type ProfileFormErrors = {
  [key: string]: string
}
