import { Response_StatusTag } from '@hack_portal/logic'
import { useCallback, useState } from 'react'

const Statuses: Response_StatusTag[] = [
  {
    id: 1,
    status: 'status1',
  },
  {
    id: 2,
    status: 'status2',
  },
  {
    id: 3,
    status: 'status3',
  },
]

export const useStatuses = () => {
  // const { data, error } = useAspidaSWR(aspidaClient., {
  //   query: { name: 'mario' },
  //   revalidateOnMount: true,
  //   initialData: { name: 'anonymous' },
  // })

  return {
    statuses: Statuses,
  }
}
