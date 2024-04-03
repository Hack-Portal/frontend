import { useCallback, useMemo, useState } from 'react'
import useAspidaSWR from '@aspida/swr'
import { aspidaClient } from '../../../lib/aspidaClient'
type Proposal = {
  id: number
  url: string
  createdat: Date
}
const Proposals: Proposal[] = [
  {
    id: 1,
    url: 'https://www.google.com',
    createdat: new Date(),
  },
  {
    id: 2,
    url: 'https://www.yahoo.co.jp',
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
  const [activeLink, setActiveLink] = useState('')

  const handleLinkSelection = useCallback(
    (link: string) => setActiveLink(link),
    [],
  )

  return {
    proposals: Proposals,
    selectedLinkState: {
      activeLink,
      handleLinkSelection,
    },
  }
}
