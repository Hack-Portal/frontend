import { Domain_AccountResponses } from '@/api/@types'
export type LeftCard = Pick<
  Domain_AccountResponses,
  'account_id' | 'explanatory_text' | 'icon' | 'username' | 'show_rate'
>
