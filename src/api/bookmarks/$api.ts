import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './_hackathon_id@string'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '//https://seaffood.com/api/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/bookmarks'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'

  return {
    _hackathon_id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * Get my bookmarks
         * @returns delete success response
         */
        get: (option: { body: Methods1['get']['reqBody'], config?: T | undefined }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option, 'URLSearchParams').json(),
        /**
         * Get my bookmarks
         * @returns delete success response
         */
        $get: (option: { body: Methods1['get']['reqBody'], config?: T | undefined }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option, 'URLSearchParams').json().then(r => r.body),
        /**
         * Delete the bookmark of the specified hackathon ID
         * @returns delete success response
         */
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['delete']['resBody'], BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).json(),
        /**
         * Delete the bookmark of the specified hackathon ID
         * @returns delete success response
         */
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['delete']['resBody'], BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    /**
     * Create a bookmark from the specified hackathon ID
     * @param option.body - Create Bookmark Request Body
     * @returns create success response
     */
    post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * Create a bookmark from the specified hackathon ID
     * @param option.body - Create Bookmark Request Body
     * @returns create success response
     */
    $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
