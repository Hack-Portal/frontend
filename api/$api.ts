import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './hackathons'
import type { Methods as Methods1 } from './hackathons/_hackathon_id'
import type { Methods as Methods2 } from './locates'
import type { Methods as Methods3 } from './tech_tags'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'fake' : baseURL).replace(/\/$/, '')
  const PATH0 = '/hackathons'
  const PATH1 = '/locates'
  const PATH2 = '/tech_tags'
  const GET = 'GET'
  const POST = 'POST'

  return {
    hackathons: {
      _hackathon_id: (val1: number | string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          /**
           * ハッカソンをリスト取得する
           * @returns Successful operation
           */
          get: (option: { query: Methods1['get']['query'], config?: T | undefined }) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * ハッカソンをリスト取得する
           * @returns Successful operation
           */
          $get: (option: { query: Methods1['get']['query'], config?: T | undefined }) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods1['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      /**
       * ハッカソンを追加する
       * @param option.body - 新しいハッカソンを作成する
       * @returns Successful operation
       */
      post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
      /**
       * ハッカソンを追加する
       * @param option.body - 新しいハッカソンを作成する
       * @returns Successful operation
       */
      $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
      /**
       * ハッカソンをリスト取得する
       * @returns Successful operation
       */
      get: (option: { query: Methods0['get']['query'], config?: T | undefined }) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * ハッカソンをリスト取得する
       * @returns Successful operation
       */
      $get: (option: { query: Methods0['get']['query'], config?: T | undefined }) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    locates: {
      /**
       * 47都道府県をリスト取得する
       * @returns Successful operation
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * 47都道府県をリスト取得する
       * @returns Successful operation
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    tech_tags: {
      /**
       * techTagsをすべてリストで取得する
       * @returns Successful operation
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * techTagsをすべてリストで取得する
       * @returns Successful operation
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
