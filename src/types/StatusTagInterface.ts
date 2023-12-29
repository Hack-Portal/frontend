import {
  Response_StatusTag,
  Request_CreateStatusTag,
  Request_UpdateStatusTag,
  Request_GetStatusTagByID,
} from '@/api/@types'

export interface StatusTagInterface {
  fetchAll(): Promise<Response_StatusTag[]>
  //   fetchById(): Promise<Request_GetStatusTagByID[]>
  //   create(): Promise<Request_CreateStatusTag[]>
  //   update(): Promise<Request_UpdateStatusTag[]>
}
