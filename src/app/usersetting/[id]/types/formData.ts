import { Repository_TechTag, Repository_Framework } from '@/api/@types'

export type ProfileFormData = {
  username: string
  icon: File | null
  locate: number
  explantory_text: string
  tech_tags: Repository_TechTag[]
  frameworks: Repository_Framework[]
  email: string
  twitter_link: string
  discord_link: string
  github_link: string
}

export type ProfileFormErrors = {
  [key: string]: string
}
