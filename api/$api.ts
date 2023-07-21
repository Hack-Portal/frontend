import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './account/_id@string'
import type { Methods as Methods1 } from './accounts'
import type { Methods as Methods2 } from './frameworks'
import type { Methods as Methods3 } from './hackathons'
import type { Methods as Methods4 } from './hackathons/_hackathon_id@number'
import type { Methods as Methods5 } from './locates'
import type { Methods as Methods6 } from './rooms'
import type { Methods as Methods7 } from './rooms/_room_id'
import type { Methods as Methods8 } from './tech_tags'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://seaffood.com/api/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/account'
  const PATH1 = '/accounts'
  const PATH2 = '/bookmarks'
  const PATH3 = '/frameworks'
  const PATH4 = '/hackathons'
  const PATH5 = '/locates'
  const PATH6 = '/rooms'
  const PATH7 = '/tech_tags'
  const GET = 'GET'
  const POST = 'POST'

  return {
    account: {
      _id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          /**
           * アカウント情報を取得する
           * @returns Successful operation
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * アカウント情報を取得する
           * @returns Successful operation
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    accounts: {
      /**
       * アカウントを登録する
       * @param option.body - 新しいアカウントを作成する
       * @returns Successful operation
       */
      post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * アカウントを登録する
       * @param option.body - 新しいアカウントを作成する
       * @returns Successful operation
       */
      $post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    bookmarks: {
      _hackathons_id: (val1: number | string) => {
        const prefix1 = `${PATH2}/${val1}`

      }
    },
    frameworks: {
      /**
       * frameworkををすべてリストで取得する
       * @returns Successful operation
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH3, GET, option).json(),
      /**
       * frameworkををすべてリストで取得する
       * @returns Successful operation
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH3}`
    },
    hackathons: {
      _hackathon_id: (val1: number) => {
        const prefix1 = `${PATH4}/${val1}`

        return {
          /**
           * ハッカソンをリスト取得する
           * @returns Successful operation
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * ハッカソンをリスト取得する
           * @returns Successful operation
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      /**
       * ハッカソンを追加する
       * @param option.body - 新しいハッカソンを作成する
       * @returns Successful operation
       */
      post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, PATH4, POST, option).json(),
      /**
       * ハッカソンを追加する
       * @param option.body - 新しいハッカソンを作成する
       * @returns Successful operation
       */
      $post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, PATH4, POST, option).json().then(r => r.body),
      /**
       * ハッカソンをリスト取得する
       * @returns Successful operation
       */
      get: (option: { query: Methods3['get']['query'], config?: T | undefined }) =>
        fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH4, GET, option).json(),
      /**
       * ハッカソンをリスト取得する
       * @returns Successful operation
       */
      $get: (option: { query: Methods3['get']['query'], config?: T | undefined }) =>
        fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods3['get']['query'] } | undefined) =>
        `${prefix}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    locates: {
      /**
       * 47都道府県をリスト取得する
       * @returns Successful operation
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH5, GET, option).json(),
      /**
       * 47都道府県をリスト取得する
       * @returns Successful operation
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH5, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH5}`
    },
    rooms: {
      _room_id: (val1: number | string) => {
        const prefix1 = `${PATH6}/${val1}`

        return {
          /**
           * ルームにアカウントを追加する
           * @returns Successful operation
           */
          post: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, prefix1, POST, option).json(),
          /**
           * ルームにアカウントを追加する
           * @returns Successful operation
           */
          $post: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, prefix1, POST, option).json().then(r => r.body),
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch(prefix, prefix1, GET, option).send(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch(prefix, prefix1, GET, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      /**
       * ルームを作成する
       * @returns Successful operation
       */
      post: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH6, POST, option).json(),
      /**
       * ルームを作成する
       * @returns Successful operation
       */
      $post: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH6, POST, option).json().then(r => r.body),
      /**
       * roomをすべてリストで取得する
       * @returns Successful operation
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH6, GET, option).json(),
      /**
       * roomをすべてリストで取得する
       * @returns Successful operation
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH6, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH6}`
    },
    // tech_tags: {
    //   /**
    //    * techTagsをすべてリストで取得する
    //    * @returns Successful operation
    //    */
    //   get: (option?: { config?: T | undefined } | undefined) =>
    //     fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, PATH7, GET, option).json(),
    //   /**
    //    * techTagsをすべてリストで取得する
    //    * @returns Successful operation
    //    */
    //   $get: (option?: { config?: T | undefined } | undefined) =>
    //     fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, PATH7, GET, option).json().then(r => r.body),
    //   $path: () => `${prefix}${PATH7}`
    // }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
