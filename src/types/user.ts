import { Locate } from "./locate"
import { Tech } from "./tech"

export interface User {
  id: string
  name: string
  icon: string
  explanatory_text: string
  locate: Locate
  show_locate: boolean
  show_rate: boolean
  rate: number
  Techs: null|Tech[]
  Frameworks: null
}
