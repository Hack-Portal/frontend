import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './hackathon_id'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (
    baseURL === undefined ? '//https://seaffood.com/api/v1' : baseURL
  ).replace(/\/$/, '')
  const PATH0 = '/hackathons'
  const PATH1 = '/hackathons/:hackathon_id'
  const GET = 'GET'
  const POST = 'POST'

  return {
    _hackathon_id: {
      /**
       * Get Hackathon
       * @returns success response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods1['get']['resBody'],
          BasicHeaders,
          Methods1['get']['status']
        >(prefix, PATH1, GET, option).json(),
      /**
       * Get Hackathon
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
      $path: () => `${prefix}${PATH1}`,
    },
    /**
     * List Hackathon
     * @returns success response
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<
        Methods0['get']['resBody'],
        BasicHeaders,
        Methods0['get']['status']
      >(prefix, PATH0, GET, option).json(),
    /**
     * List Hackathon
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
     * Register a hackathon from given parameters
     * @param option.body - create hackathon Request Body
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
     * Register a hackathon from given parameters
     * @param option.body - create hackathon Request Body
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
