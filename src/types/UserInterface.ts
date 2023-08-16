import {
  Domain_CreateAccountRequest,
  Api_CreateAccountResponses,
  Api_GetAccountResponses,
} from '@/api/@types'

export interface UserInterface {
  fetchAll: () => Promise<Api_GetAccountResponses>
  fetchById: (id: string) => Promise<Api_GetAccountResponses>
  create: (
    body: Domain_CreateAccountRequest,
    token: string,
  ) => Promise<Api_CreateAccountResponses>
}
