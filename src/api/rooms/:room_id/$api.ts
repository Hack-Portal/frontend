import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './addchat'
import type { Methods as Methods2 } from './members'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '//https://seaffood.com/api/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/rooms/:room_id'
  const PATH1 = '/rooms/:room_id/addchat'
  const PATH2 = '/rooms/:room_id/members'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    addchat: {
      /**
       * Add Chat Room
       * @param option.body - add chat Room Request body
       * @returns succsss response
       */
      post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * Add Chat Room
       * @param option.body - add chat Room Request body
       * @returns succsss response
       */
      $post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    members: {
      /**
       * Add Account In Rooms
       * @returns succsss response
       */
      post: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH2, POST, option).json(),
      /**
       * Add Account In Rooms
       * @returns succsss response
       */
      $post: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
      /**
       * Remove Account In Rooms
       * @returns succsss response
       */
      delete: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['delete']['resBody'], BasicHeaders, Methods2['delete']['status']>(prefix, PATH2, DELETE, option).json(),
      /**
       * Remove Account In Rooms
       * @returns succsss response
       */
      $delete: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['delete']['resBody'], BasicHeaders, Methods2['delete']['status']>(prefix, PATH2, DELETE, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    },
    /**
     * Get Room
     * @returns succsss response
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * Get Room
     * @returns succsss response
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * update Room
     * @param option.body - update Room Request body
     * @returns succsss response
     */
    put: (option: { body: Methods0['put']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['put']['resBody'], BasicHeaders, Methods0['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * update Room
     * @param option.body - update Room Request body
     * @returns succsss response
     */
    $put: (option: { body: Methods0['put']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['put']['resBody'], BasicHeaders, Methods0['put']['status']>(prefix, PATH0, PUT, option).json().then(r => r.body),
    /**
     * delete Room
     * @returns succsss response
     */
    delete: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['delete']['resBody'], BasicHeaders, Methods0['delete']['status']>(prefix, PATH0, DELETE, option).json(),
    /**
     * delete Room
     * @returns succsss response
     */
    $delete: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['delete']['resBody'], BasicHeaders, Methods0['delete']['status']>(prefix, PATH0, DELETE, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
