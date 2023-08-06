import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './_from_user_id@string/follow'
import type { Methods as Methods2 } from './_id/rate'
import type { Methods as Methods3 } from './_user_id@string'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '//https://seaffood.com/api/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/accounts'
  const PATH1 = '/follow'
  const PATH2 = '/rate'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    _from_user_id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        follow: {
          /**
           * Follow!!!!!!!!
           * @param option.body - create Follow Request Body
           * @returns succsss response
           */
          post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json(),
          /**
           * Follow!!!!!!!!
           * @param option.body - create Follow Request Body
           * @returns succsss response
           */
          $post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json().then(r => r.body),
          /**
           * Unfollow
           * @returns success response
           */
          delete: (option: { body: Methods1['delete']['reqBody'], config?: T | undefined }) =>
            fetch<Methods1['delete']['resBody'], BasicHeaders, Methods1['delete']['status']>(prefix, `${prefix0}${PATH1}`, DELETE, option, 'URLSearchParams').json(),
          /**
           * Unfollow
           * @returns success response
           */
          $delete: (option: { body: Methods1['delete']['reqBody'], config?: T | undefined }) =>
            fetch<Methods1['delete']['resBody'], BasicHeaders, Methods1['delete']['status']>(prefix, `${prefix0}${PATH1}`, DELETE, option, 'URLSearchParams').json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`
        }
      }
    },
    _id: (val0: number | string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        rate: {
          /**
           * List Rate for User
           * @returns success response
           */
          get: (option?: { query?: Methods2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json(),
          /**
           * List Rate for User
           * @returns success response
           */
          $get: (option?: { query?: Methods2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json().then(r => r.body),
          /**
           * Create Rate for User
           * @param option.body - Create Rate Request Body
           * @returns success response
           */
          post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option).json(),
          /**
           * Create Rate for User
           * @param option.body - Create Rate Request Body
           * @returns success response
           */
          $post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods2['get']['query'] } | undefined) =>
            `${prefix}${prefix0}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      }
    },
    _user_id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * Return a user from the id specified in the path
         * @returns Get success response
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * Return a user from the id specified in the path
         * @returns Get success response
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * Update user info from requested body
         * @param option.body - Update Account Request Body
         * @returns Update success response
         */
        put: (option: { body: Methods3['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods3['put']['resBody'], BasicHeaders, Methods3['put']['status']>(prefix, prefix0, PUT, option).json(),
        /**
         * Update user info from requested body
         * @param option.body - Update Account Request Body
         * @returns Update success response
         */
        $put: (option: { body: Methods3['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods3['put']['resBody'], BasicHeaders, Methods3['put']['status']>(prefix, prefix0, PUT, option).json().then(r => r.body),
        /**
         * Only you can delete your account (logical delete)
         * @returns delete success response
         */
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods3['delete']['resBody'], BasicHeaders, Methods3['delete']['status']>(prefix, prefix0, DELETE, option).json(),
        /**
         * Only you can delete your account (logical delete)
         * @returns delete success response
         */
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods3['delete']['resBody'], BasicHeaders, Methods3['delete']['status']>(prefix, prefix0, DELETE, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
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