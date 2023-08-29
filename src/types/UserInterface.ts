import {
  Domain_CreateAccountRequest,
  Domain_AccountResponses,
} from '@/api/@types'

export interface UserInterface {
  fetchById: (
    id: string,
    token: string,
  ) => Promise<Domain_AccountResponses | string>
  create: (
    body: Domain_CreateAccountRequest,
    token: string,
  ) => Promise<Domain_AccountResponses>
  update: (
    id: string,
    body: Domain_CreateAccountRequest,
    token: string,
  ) => Promise<Domain_AccountResponses>
}
