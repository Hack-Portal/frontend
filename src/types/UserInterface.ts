import {
  Domain_CreateAccountRequest,
  Domain_AccountResponses
} from '@/api/@types'

export interface UserInterface {
  fetchAll: () => Promise<Domain_AccountResponses[]>
  fetchById: (id: string) => Promise<Domain_AccountResponses>
  create: (
    body: Domain_CreateAccountRequest,
    token: string,
  ) => Promise<Domain_AccountResponses>
}
