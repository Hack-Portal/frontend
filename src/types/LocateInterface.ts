import { Repository_Locate } from '@/api/@types'

export interface LocateRepository {
  fetchAll(): Promise<Repository_Locate[]>
}
