import { Repository_TechTag, Repository_Framework } from '@/api/@types'

export type ProfileFormData = {
  discord_link: string
  email: string
  explanatory_text: string
  frameworks: [
    {
      framework: string
      framework_id: number
    },
  ]
  github_link: string
  icon: string
  locate: string

  tech_tags: [
    {
      language: string
      tech_tag_id: number
    },
  ]
  twitter_link: string
  username: string
}

export type ProfileFormErrors = {
  [key: string]: string
}
