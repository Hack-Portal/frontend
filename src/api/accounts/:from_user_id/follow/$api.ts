import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '//https://seaffood.com/api/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/accounts/:from_user_id/follow'
  const POST = 'POST'
  const DELETE = 'DELETE'

  return {
    /**
     * Follow!!!!!!!!
     * @param option.body - create Follow Request Body
     * @returns succsss response
     */
    post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * Follow!!!!!!!!
     * @param option.body - create Follow Request Body
     * @returns succsss response
     */
    $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    /**
     * Unfollow
     * @returns succsss response
     */
    delete: (option: { body: Methods0['delete']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['delete']['resBody'], BasicHeaders, Methods0['delete']['status']>(prefix, PATH0, DELETE, option, 'URLSearchParams').json(),
    /**
     * Unfollow
     * @returns succsss response
     */
    $delete: (option: { body: Methods0['delete']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['delete']['resBody'], BasicHeaders, Methods0['delete']['status']>(prefix, PATH0, DELETE, option, 'URLSearchParams').json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
