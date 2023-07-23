import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './:from_user_id/follow'
import type { Methods as Methods2 } from './:user_id'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '//https://seaffood.com/api/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/accounts'
  const PATH1 = '/accounts/:from_user_id/follow'
  const PATH2 = '/accounts/:user_id'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    _from_user_id: {
      follow: {
        /**
         * Follow!!!!!!!!
         * @param option.body - create Follow Request Body
         * @returns succsss response
         */
        post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).json(),
        /**
         * Follow!!!!!!!!
         * @param option.body - create Follow Request Body
         * @returns succsss response
         */
        $post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
        /**
         * Unfollow
         * @returns succsss response
         */
        delete: (option: { body: Methods1['delete']['reqBody'], config?: T | undefined }) =>
          fetch<Methods1['delete']['resBody'], BasicHeaders, Methods1['delete']['status']>(prefix, PATH1, DELETE, option, 'URLSearchParams').json(),
        /**
         * Unfollow
         * @returns succsss response
         */
        $delete: (option: { body: Methods1['delete']['reqBody'], config?: T | undefined }) =>
          fetch<Methods1['delete']['resBody'], BasicHeaders, Methods1['delete']['status']>(prefix, PATH1, DELETE, option, 'URLSearchParams').json().then(r => r.body),
        $path: () => `${prefix}${PATH1}`
      }
    },
    _user_id: {
      /**
       * Return a user from the id specified in the path
       * @returns Get success response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * Return a user from the id specified in the path
       * @returns Get success response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      /**
       * Update user info from requested body
       * @param option.body - Update Account Request Body
       * @returns Update succsss response
       */
      put: (option: { body: Methods2['put']['reqBody'], config?: T | undefined }) =>
        fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, PATH2, PUT, option).json(),
      /**
       * Update user info from requested body
       * @param option.body - Update Account Request Body
       * @returns Update succsss response
       */
      $put: (option: { body: Methods2['put']['reqBody'], config?: T | undefined }) =>
        fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, PATH2, PUT, option).json().then(r => r.body),
      /**
       * Only you can delete your account (logical delete)
       * @returns delete succsss response
       */
      delete: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['delete']['resBody'], BasicHeaders, Methods2['delete']['status']>(prefix, PATH2, DELETE, option).json(),
      /**
       * Only you can delete your account (logical delete)
       * @returns delete succsss response
       */
      $delete: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['delete']['resBody'], BasicHeaders, Methods2['delete']['status']>(prefix, PATH2, DELETE, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    },
    /**
     * Create an account from the requested body
     * @param option.body - Create Account Request Body
     * @returns create succsss response
     */
    post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * Create an account from the requested body
     * @param option.body - Create Account Request Body
     * @returns create succsss response
     */
    $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
