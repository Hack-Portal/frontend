import type { Response_GetHackathon } from '@/api/@types'
import type { HackathonRecord } from '@/features/HackathonRecords/types/Hackathon'
import { formatDate } from '@/utils/formatDate'

export const convertTermInfoToObj = (
  fetchHackathons: Response_GetHackathon[],
): HackathonRecord[] => {
  const hackathons = fetchHackathons.map((hackathon) => {
    return {
      ...hackathon,
      expired: {
        date: hackathon.expired ? formatDate(hackathon.expired) : '',
        title: '募集〆',
      },
      start_date: {
        date: hackathon.start_date ? formatDate(hackathon.start_date) : '',
        title: '開催日',
      },
      term: {
        date: hackathon.term ? `${String(hackathon.term)}日間` : '',
        title: '期間',
      },
    }
  })
  return hackathons
}
