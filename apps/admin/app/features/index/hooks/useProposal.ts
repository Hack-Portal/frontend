import { useCallback, useMemo, useState } from 'react'
import useAspidaSWR from '@aspida/swr'
import { aspidaClient } from '../../../lib/aspidaClient'
import { useStatuses } from './useStatuses'
import { assertNonNullable } from '@hack_portal/logic/utils/assert'
import { Request_CreateHackathon } from '@hack_portal/logic'
import { getOGP } from '../utils/ogp'
type Proposal = {
  id: number
  url: string
  createdat: Date
}

const Proposals: Proposal[] = [
  {
    id: 1,
    url: 'https://qiita.com/',
    createdat: new Date(),
  },
  {
    id: 2,
    url: 'https://talent.supporterz.jp/events/9cc19961-9f1d-4d51-ba76-2abb5b42e30b/',
    createdat: new Date(),
  },
  {
    id: 3,
    url: 'https://www.bing.com',
    createdat: new Date(),
  },
]
export const useProposal = () => {
  // const { data, error } = useAspidaSWR(aspidaClient., {
  //   query: { name: 'mario' },
  //   revalidateOnMount: true,
  //   initialData: { name: 'anonymous' },
  // })
  const [hackathonDraft, setHackathonDraft] = useState<Request_CreateHackathon>(
    {
      expired: new Date().toISOString(),
      link: '',
      name: '',
      start_date: new Date().toISOString(),
      statuses: [],
      icon: '',
      term: 0,
    },
  )
  const { statuses } = useStatuses()
  // assertNonNullable(statuses)

  const handlePostHackathon = useCallback(
    (hackathonDraft: Request_CreateHackathon) => {
      console.log(hackathonDraft)
    },
    [hackathonDraft],
  )

  const handleSetDraftHackathon = useCallback(
    async (url: string) => {
      const result = await getOGP(url)

      setHackathonDraft({
        ...hackathonDraft,
        name: result.title ? result.title : '',
        icon: result.image ? result.image : '',
        link: url,
      })
    },
    [hackathonDraft],
  )

  return {
    proposals: Proposals,
    hackathonDraftState: {
      hackathonDraft,
      handlePostHackathon,
      handleSetDraftHackathon,
    },
    statuses: statuses,
  }
}
