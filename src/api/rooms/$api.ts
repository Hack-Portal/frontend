import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './room_id'
import type { Methods as Methods2 } from './room_id/addchat'
import type { Methods as Methods3 } from './room_id/members'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (
    baseURL === undefined ? '//https://seaffood.com/api/v1' : baseURL
  ).replace(/\/$/, '')
  const PATH0 = '/rooms'
  const PATH1 = '/rooms/:room_id'
  const PATH2 = '/rooms/:room_id/addchat'
  const PATH3 = '/rooms/:room_id/members'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    _room_id: {
      addchat: {
        /**
         * Add Chat Room
         * @param option.body - add chat Room Request body
         * @returns success response
         */
        post: (option: {
          body: Methods2['post']['reqBody']
          config?: T | undefined
        }) =>
          fetch<
            Methods2['post']['resBody'],
            BasicHeaders,
            Methods2['post']['status']
          >(prefix, PATH2, POST, option).json(),
        /**
         * Add Chat Room
         * @param option.body - add chat Room Request body
         * @returns success response
         */
        $post: (option: {
          body: Methods2['post']['reqBody']
          config?: T | undefined
        }) =>
          fetch<
            Methods2['post']['resBody'],
            BasicHeaders,
            Methods2['post']['status']
          >(prefix, PATH2, POST, option)
            .json()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH2}`,
      },
      members: {
        /**
         * Add Account In Rooms
         * @returns success response
         */
        post: (option?: { config?: T | undefined } | undefined) =>
          fetch<
            Methods3['post']['resBody'],
            BasicHeaders,
            Methods3['post']['status']
          >(prefix, PATH3, POST, option).json(),
        /**
         * Add Account In Rooms
         * @returns success response
         */
        $post: (option?: { config?: T | undefined } | undefined) =>
          fetch<
            Methods3['post']['resBody'],
            BasicHeaders,
            Methods3['post']['status']
          >(prefix, PATH3, POST, option)
            .json()
            .then((r) => r.body),
        /**
         * Remove Account In Rooms
         * @returns success response
         */
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<
            Methods3['delete']['resBody'],
            BasicHeaders,
            Methods3['delete']['status']
          >(prefix, PATH3, DELETE, option).json(),
        /**
         * Remove Account In Rooms
         * @returns success response
         */
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<
            Methods3['delete']['resBody'],
            BasicHeaders,
            Methods3['delete']['status']
          >(prefix, PATH3, DELETE, option)
            .json()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH3}`,
      },
      /**
       * Get Room
       * @returns success response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods1['get']['resBody'],
          BasicHeaders,
          Methods1['get']['status']
        >(prefix, PATH1, GET, option).json(),
      /**
       * Get Room
       * @returns success response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods1['get']['resBody'],
          BasicHeaders,
          Methods1['get']['status']
        >(prefix, PATH1, GET, option)
          .json()
          .then((r) => r.body),
      /**
       * update Room
       * @param option.body - update Room Request body
       * @returns success response
       */
      put: (option: {
        body: Methods1['put']['reqBody']
        config?: T | undefined
      }) =>
        fetch<
          Methods1['put']['resBody'],
          BasicHeaders,
          Methods1['put']['status']
        >(prefix, PATH1, PUT, option).json(),
      /**
       * update Room
       * @param option.body - update Room Request body
       * @returns success response
       */
      $put: (option: {
        body: Methods1['put']['reqBody']
        config?: T | undefined
      }) =>
        fetch<
          Methods1['put']['resBody'],
          BasicHeaders,
          Methods1['put']['status']
        >(prefix, PATH1, PUT, option)
          .json()
          .then((r) => r.body),
      /**
       * delete Room
       * @returns success response
       */
      delete: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods1['delete']['resBody'],
          BasicHeaders,
          Methods1['delete']['status']
        >(prefix, PATH1, DELETE, option).json(),
      /**
       * delete Room
       * @returns success response
       */
      $delete: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods1['delete']['resBody'],
          BasicHeaders,
          Methods1['delete']['status']
        >(prefix, PATH1, DELETE, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    /**
     * List Account
     * @returns success response
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<
        Methods0['get']['resBody'],
        BasicHeaders,
        Methods0['get']['status']
      >(prefix, PATH0, GET, option).json(),
    /**
     * List Account
     * @returns success response
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<
        Methods0['get']['resBody'],
        BasicHeaders,
        Methods0['get']['status']
      >(prefix, PATH0, GET, option)
        .json()
        .then((r) => r.body),
    /**
     * Create Rooms
     * @param option.body - create Room Request Body
     * @returns success response
     */
    post: (option: {
      body: Methods0['post']['reqBody']
      config?: T | undefined
    }) =>
      fetch<
        Methods0['post']['resBody'],
        BasicHeaders,
        Methods0['post']['status']
      >(prefix, PATH0, POST, option).json(),
    /**
     * Create Rooms
     * @param option.body - create Room Request Body
     * @returns success response
     */
    $post: (option: {
      body: Methods0['post']['reqBody']
      config?: T | undefined
    }) =>
      fetch<
        Methods0['post']['resBody'],
        BasicHeaders,
        Methods0['post']['status']
      >(prefix, PATH0, POST, option)
        .json()
        .then((r) => r.body),
    $path: () => `${prefix}${PATH0}`,
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
