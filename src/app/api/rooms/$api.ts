import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './_room_id'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://seaffood.com/api/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/rooms'
  const GET = 'GET'
  const POST = 'POST'

  return {
    _room_id: (val0: number | string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * ルームにアカウントを追加する
         * @returns Successful operation
         */
        post: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, prefix0, POST, option).json(),
        /**
         * ルームにアカウントを追加する
         * @returns Successful operation
         */
        $post: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, prefix0, POST, option).json().then(r => r.body),
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch(prefix, prefix0, GET, option).send(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch(prefix, prefix0, GET, option).send().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    /**
     * ルームを作成する
     * @returns Successful operation
     */
    post: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * ルームを作成する
     * @returns Successful operation
     */
    $post: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    /**
     * roomをすべてリストで取得する
     * @returns Successful operation
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * roomをすべてリストで取得する
     * @returns Successful operation
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
