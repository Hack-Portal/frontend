import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '//https://seaffood.com/api/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/bookmarks/:hackathon_id'
  const GET = 'GET'
  const DELETE = 'DELETE'

  return {
    /**
     * Get my bookmarks
     * @returns delete success response
     */
    get: (option: { body: Methods0['get']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option, 'URLSearchParams').json(),
    /**
     * Get my bookmarks
     * @returns delete success response
     */
    $get: (option: { body: Methods0['get']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option, 'URLSearchParams').json().then(r => r.body),
    /**
     * Delete the bookmark of the specified hackathon ID
     * @returns delete success response
     */
    delete: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['delete']['resBody'], BasicHeaders, Methods0['delete']['status']>(prefix, PATH0, DELETE, option).json(),
    /**
     * Delete the bookmark of the specified hackathon ID
     * @returns delete success response
     */
    $delete: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['delete']['resBody'], BasicHeaders, Methods0['delete']['status']>(prefix, PATH0, DELETE, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
