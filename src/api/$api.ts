import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from './accounts'
import type { Methods as Methods1 } from './accounts/:from_user_id/follow'
import type { Methods as Methods2 } from './accounts/:user_id'
import type { Methods as Methods3 } from './bookmarks'
import type { Methods as Methods4 } from './bookmarks/:hackathon_id'
import type { Methods as Methods5 } from './frameworks'
import type { Methods as Methods6 } from './hackathons'
import type { Methods as Methods7 } from './hackathons/:hackathon_id'
import type { Methods as Methods8 } from './locates'
import type { Methods as Methods9 } from './rooms'
import type { Methods as Methods10 } from './rooms/:room_id'
import type { Methods as Methods11 } from './rooms/:room_id/addchat'
import type { Methods as Methods12 } from './rooms/:room_id/members'
import type { Methods as Methods13 } from './tech_tags'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '//https://seaffood.com/api/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/accounts'
  const PATH1 = '/accounts/:from_user_id/follow'
  const PATH2 = '/accounts/:user_id'
  const PATH3 = '/bookmarks'
  const PATH4 = '/bookmarks/:hackathon_id'
  const PATH5 = '/frameworks'
  const PATH6 = '/hackathons'
  const PATH7 = '/hackathons/:hackathon_id'
  const PATH8 = '/locates'
  const PATH9 = '/rooms'
  const PATH10 = '/rooms/:room_id'
  const PATH11 = '/rooms/:room_id/addchat'
  const PATH12 = '/rooms/:room_id/members'
  const PATH13 = '/tech_tags'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    accounts: {
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
    },
    bookmarks: {
      _hackathon_id: {
        /**
         * Get my bookmarks
         * @returns delete succsss response
         */
        get: (option: { body: Methods4['get']['reqBody'], config?: T | undefined }) =>
          fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH4, GET, option, 'URLSearchParams').json(),
        /**
         * Get my bookmarks
         * @returns delete succsss response
         */
        $get: (option: { body: Methods4['get']['reqBody'], config?: T | undefined }) =>
          fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH4, GET, option, 'URLSearchParams').json().then(r => r.body),
        /**
         * Delete the bookmark of the specified hackathon ID
         * @returns delete succsss response
         */
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods4['delete']['resBody'], BasicHeaders, Methods4['delete']['status']>(prefix, PATH4, DELETE, option).json(),
        /**
         * Delete the bookmark of the specified hackathon ID
         * @returns delete succsss response
         */
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods4['delete']['resBody'], BasicHeaders, Methods4['delete']['status']>(prefix, PATH4, DELETE, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH4}`
      },
      /**
       * Create a bookmark from the specified hackathon ID
       * @param option.body - Create Bookmark Request Body
       * @returns create succsss response
       */
      post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, PATH3, POST, option).json(),
      /**
       * Create a bookmark from the specified hackathon ID
       * @param option.body - Create Bookmark Request Body
       * @returns create succsss response
       */
      $post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH3}`
    },
    frameworks: {
      /**
       * Get Framewroks
       * @returns succsss response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH5, GET, option).json(),
      /**
       * Get Framewroks
       * @returns succsss response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH5, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH5}`
    },
    hackathons: {
      _hackathon_id: {
        /**
         * Get Hackathon
         * @returns succsss response
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, PATH7, GET, option).json(),
        /**
         * Get Hackathon
         * @returns succsss response
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, PATH7, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH7}`
      },
      /**
       * List Hackathon
       * @returns succsss response
       */
      get: (option: { body: Methods6['get']['reqBody'], config?: T | undefined }) =>
        fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH6, GET, option, 'URLSearchParams').json(),
      /**
       * List Hackathon
       * @returns succsss response
       */
      $get: (option: { body: Methods6['get']['reqBody'], config?: T | undefined }) =>
        fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH6, GET, option, 'URLSearchParams').json().then(r => r.body),
      /**
       * Register a hackathon from given parameters
       * @param option.body - create hackathon Request Body
       * @returns succsss response
       */
      post: (option: { body: Methods6['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH6, POST, option).json(),
      /**
       * Register a hackathon from given parameters
       * @param option.body - create hackathon Request Body
       * @returns succsss response
       */
      $post: (option: { body: Methods6['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH6, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH6}`
    },
    locates: {
      /**
       * Get Framewroks
       * @returns succsss response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, PATH8, GET, option).json(),
      /**
       * Get Framewroks
       * @returns succsss response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, PATH8, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH8}`
    },
    rooms: {
      _room_id: {
        addchat: {
          /**
           * Add Chat Room
           * @param option.body - add chat Room Request body
           * @returns succsss response
           */
          post: (option: { body: Methods11['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods11['post']['resBody'], BasicHeaders, Methods11['post']['status']>(prefix, PATH11, POST, option).json(),
          /**
           * Add Chat Room
           * @param option.body - add chat Room Request body
           * @returns succsss response
           */
          $post: (option: { body: Methods11['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods11['post']['resBody'], BasicHeaders, Methods11['post']['status']>(prefix, PATH11, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH11}`
        },
        members: {
          /**
           * Add Account In Rooms
           * @returns succsss response
           */
          post: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods12['post']['resBody'], BasicHeaders, Methods12['post']['status']>(prefix, PATH12, POST, option).json(),
          /**
           * Add Account In Rooms
           * @returns succsss response
           */
          $post: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods12['post']['resBody'], BasicHeaders, Methods12['post']['status']>(prefix, PATH12, POST, option).json().then(r => r.body),
          /**
           * Remove Account In Rooms
           * @returns succsss response
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods12['delete']['resBody'], BasicHeaders, Methods12['delete']['status']>(prefix, PATH12, DELETE, option).json(),
          /**
           * Remove Account In Rooms
           * @returns succsss response
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods12['delete']['resBody'], BasicHeaders, Methods12['delete']['status']>(prefix, PATH12, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH12}`
        },
        /**
         * Get Room
         * @returns succsss response
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, PATH10, GET, option).json(),
        /**
         * Get Room
         * @returns succsss response
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, PATH10, GET, option).json().then(r => r.body),
        /**
         * update Room
         * @param option.body - update Room Request body
         * @returns succsss response
         */
        put: (option: { body: Methods10['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods10['put']['resBody'], BasicHeaders, Methods10['put']['status']>(prefix, PATH10, PUT, option).json(),
        /**
         * update Room
         * @param option.body - update Room Request body
         * @returns succsss response
         */
        $put: (option: { body: Methods10['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods10['put']['resBody'], BasicHeaders, Methods10['put']['status']>(prefix, PATH10, PUT, option).json().then(r => r.body),
        /**
         * delete Room
         * @returns succsss response
         */
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods10['delete']['resBody'], BasicHeaders, Methods10['delete']['status']>(prefix, PATH10, DELETE, option).json(),
        /**
         * delete Room
         * @returns succsss response
         */
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods10['delete']['resBody'], BasicHeaders, Methods10['delete']['status']>(prefix, PATH10, DELETE, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH10}`
      },
      /**
       * List Account
       * @returns succsss response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, PATH9, GET, option).json(),
      /**
       * List Account
       * @returns succsss response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, PATH9, GET, option).json().then(r => r.body),
      /**
       * Create Rooms
       * @param option.body - create Room Request Body
       * @returns succsss response
       */
      post: (option: { body: Methods9['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, PATH9, POST, option).json(),
      /**
       * Create Rooms
       * @param option.body - create Room Request Body
       * @returns succsss response
       */
      $post: (option: { body: Methods9['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, PATH9, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH9}`
    },
    tech_tags: {
      /**
       * Get Framewroks
       * @returns succsss response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, PATH13, GET, option).json(),
      /**
       * Get Framewroks
       * @returns succsss response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, PATH13, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH13}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
