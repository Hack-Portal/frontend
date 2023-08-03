import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './accounts'
import type { Methods as Methods1 } from './accounts/_from_user_id@string/follow'
import type { Methods as Methods2 } from './accounts/_id/rate'
import type { Methods as Methods3 } from './accounts/_user_id@string'
import type { Methods as Methods4 } from './bookmarks'
import type { Methods as Methods5 } from './bookmarks/_hackathon_id@string'
import type { Methods as Methods6 } from './frameworks'
import type { Methods as Methods7 } from './hackathons'
import type { Methods as Methods8 } from './hackathons/_hackathon_id@string'
import type { Methods as Methods9 } from './locates'
import type { Methods as Methods10 } from './rooms'
import type { Methods as Methods11 } from './rooms/_room_id@string'
import type { Methods as Methods12 } from './rooms/_room_id@string/addchat'
import type { Methods as Methods13 } from './rooms/_room_id@string/members'
import type { Methods as Methods14 } from './tech_tags'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '//https://seaffood.com/api/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/accounts'
  const PATH1 = '/follow'
  const PATH2 = '/rate'
  const PATH3 = '/bookmarks'
  const PATH4 = '/frameworks'
  const PATH5 = '/hackathons'
  const PATH6 = '/locates'
  const PATH7 = '/rooms'
  const PATH8 = '/addchat'
  const PATH9 = '/members'
  const PATH10 = '/tech_tags'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    accounts: {
      _from_user_id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          follow: {
            /**
             * Follow!!!!!!!!
             * @param option.body - create Follow Request Body
             * @returns succsss response
             */
            post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, `${prefix1}${PATH1}`, POST, option).json(),
            /**
             * Follow!!!!!!!!
             * @param option.body - create Follow Request Body
             * @returns succsss response
             */
            $post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, `${prefix1}${PATH1}`, POST, option).json().then(r => r.body),
            /**
             * Unfollow
             * @returns success response
             */
            delete: (option: { body: Methods1['delete']['reqBody'], config?: T | undefined }) =>
              fetch<Methods1['delete']['resBody'], BasicHeaders, Methods1['delete']['status']>(prefix, `${prefix1}${PATH1}`, DELETE, option, 'URLSearchParams').json(),
            /**
             * Unfollow
             * @returns success response
             */
            $delete: (option: { body: Methods1['delete']['reqBody'], config?: T | undefined }) =>
              fetch<Methods1['delete']['resBody'], BasicHeaders, Methods1['delete']['status']>(prefix, `${prefix1}${PATH1}`, DELETE, option, 'URLSearchParams').json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH1}`
          }
        }
      },
      _id: (val1: number | string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          rate: {
            /**
             * List Rate for User
             * @returns success response
             */
            get: (option?: { query?: Methods2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).json(),
            /**
             * List Rate for User
             * @returns success response
             */
            $get: (option?: { query?: Methods2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).json().then(r => r.body),
            /**
             * Create Rate for User
             * @param option.body - Create Rate Request Body
             * @returns success response
             */
            post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).json(),
            /**
             * Create Rate for User
             * @param option.body - Create Rate Request Body
             * @returns success response
             */
            $post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods2['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        }
      },
      _user_id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          /**
           * Return a user from the id specified in the path
           * @returns Get success response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Return a user from the id specified in the path
           * @returns Get success response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * Update user info from requested body
           * @param option.body - Update Account Request Body
           * @returns Update success response
           */
          put: (option: { body: Methods3['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods3['put']['resBody'], BasicHeaders, Methods3['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * Update user info from requested body
           * @param option.body - Update Account Request Body
           * @returns Update success response
           */
          $put: (option: { body: Methods3['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods3['put']['resBody'], BasicHeaders, Methods3['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          /**
           * Only you can delete your account (logical delete)
           * @returns delete success response
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods3['delete']['resBody'], BasicHeaders, Methods3['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * Only you can delete your account (logical delete)
           * @returns delete success response
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods3['delete']['resBody'], BasicHeaders, Methods3['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
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
    },
    bookmarks: {
      _hackathon_id: (val1: string) => {
        const prefix1 = `${PATH3}/${val1}`

        return {
          /**
           * Get my bookmarks
           * @returns delete success response
           */
          get: (option: { body: Methods5['get']['reqBody'], config?: T | undefined }) =>
            fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, prefix1, GET, option, 'URLSearchParams').json(),
          /**
           * Get my bookmarks
           * @returns delete success response
           */
          $get: (option: { body: Methods5['get']['reqBody'], config?: T | undefined }) =>
            fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, prefix1, GET, option, 'URLSearchParams').json().then(r => r.body),
          /**
           * Delete the bookmark of the specified hackathon ID
           * @returns delete success response
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods5['delete']['resBody'], BasicHeaders, Methods5['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * Delete the bookmark of the specified hackathon ID
           * @returns delete success response
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods5['delete']['resBody'], BasicHeaders, Methods5['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      /**
       * Create a bookmark from the specified hackathon ID
       * @param option.body - Create Bookmark Request Body
       * @returns create success response
       */
      post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, PATH3, POST, option).json(),
      /**
       * Create a bookmark from the specified hackathon ID
       * @param option.body - Create Bookmark Request Body
       * @returns create success response
       */
      $post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH3}`
    },
    frameworks: {
      /**
       * Get Frameworks
       * @returns success response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH4, GET, option).json(),
      /**
       * Get Frameworks
       * @returns success response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH4}`
    },
    hackathons: {
      _hackathon_id: (val1: string) => {
        const prefix1 = `${PATH5}/${val1}`

        return {
          /**
           * Get Hackathon
           * @returns success response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get Hackathon
           * @returns success response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      /**
       * List Hackathon
       * @returns success response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, PATH5, GET, option).json(),
      /**
       * List Hackathon
       * @returns success response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, PATH5, GET, option).json().then(r => r.body),
      /**
       * Register a hackathon from given parameters
       * @param option.body - create hackathon Request Body
       * @returns success response
       */
      post: (option: { body: Methods7['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, PATH5, POST, option).json(),
      /**
       * Register a hackathon from given parameters
       * @param option.body - create hackathon Request Body
       * @returns success response
       */
      $post: (option: { body: Methods7['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, PATH5, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH5}`
    },
    locates: {
      /**
       * Get Frameworks
       * @returns success response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, PATH6, GET, option).json(),
      /**
       * Get Frameworks
       * @returns success response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, PATH6, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH6}`
    },
    rooms: {
      _room_id: (val1: string) => {
        const prefix1 = `${PATH7}/${val1}`

        return {
          addchat: {
            /**
             * Add Chat Room
             * @param option.body - add chat Room Request body
             * @returns success response
             */
            post: (option: { body: Methods12['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods12['post']['resBody'], BasicHeaders, Methods12['post']['status']>(prefix, `${prefix1}${PATH8}`, POST, option).json(),
            /**
             * Add Chat Room
             * @param option.body - add chat Room Request body
             * @returns success response
             */
            $post: (option: { body: Methods12['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods12['post']['resBody'], BasicHeaders, Methods12['post']['status']>(prefix, `${prefix1}${PATH8}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH8}`
          },
          members: {
            /**
             * Add Account In Rooms
             * @returns success response
             */
            post: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods13['post']['resBody'], BasicHeaders, Methods13['post']['status']>(prefix, `${prefix1}${PATH9}`, POST, option).json(),
            /**
             * Add Account In Rooms
             * @returns success response
             */
            $post: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods13['post']['resBody'], BasicHeaders, Methods13['post']['status']>(prefix, `${prefix1}${PATH9}`, POST, option).json().then(r => r.body),
            /**
             * Remove Account In Rooms
             * @returns success response
             */
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods13['delete']['resBody'], BasicHeaders, Methods13['delete']['status']>(prefix, `${prefix1}${PATH9}`, DELETE, option).json(),
            /**
             * Remove Account In Rooms
             * @returns success response
             */
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods13['delete']['resBody'], BasicHeaders, Methods13['delete']['status']>(prefix, `${prefix1}${PATH9}`, DELETE, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH9}`
          },
          /**
           * Get Room
           * @returns success response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get Room
           * @returns success response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * update Room
           * @param option.body - update Room Request body
           * @returns success response
           */
          put: (option: { body: Methods11['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods11['put']['resBody'], BasicHeaders, Methods11['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * update Room
           * @param option.body - update Room Request body
           * @returns success response
           */
          $put: (option: { body: Methods11['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods11['put']['resBody'], BasicHeaders, Methods11['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          /**
           * delete Room
           * @returns success response
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods11['delete']['resBody'], BasicHeaders, Methods11['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * delete Room
           * @returns success response
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods11['delete']['resBody'], BasicHeaders, Methods11['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      /**
       * List Account
       * @returns success response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, PATH7, GET, option).json(),
      /**
       * List Account
       * @returns success response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, PATH7, GET, option).json().then(r => r.body),
      /**
       * Create Rooms
       * @param option.body - create Room Request Body
       * @returns success response
       */
      post: (option: { body: Methods10['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods10['post']['resBody'], BasicHeaders, Methods10['post']['status']>(prefix, PATH7, POST, option).json(),
      /**
       * Create Rooms
       * @param option.body - create Room Request Body
       * @returns success response
       */
      $post: (option: { body: Methods10['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods10['post']['resBody'], BasicHeaders, Methods10['post']['status']>(prefix, PATH7, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH7}`
    },
    tech_tags: {
      /**
       * Get Frameworks
       * @returns success response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, PATH10, GET, option).json(),
      /**
       * Get Frameworks
       * @returns success response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, PATH10, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH10}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
