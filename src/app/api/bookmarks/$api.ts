import type { AspidaClient } from 'aspida'


const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://seaffood.com/api/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/bookmarks'


  return {
    _hackathons_id: (val0: number | string) => {
      const prefix0 = `${PATH0}/${val0}`

    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
