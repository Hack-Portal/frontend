import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_1fgm2mw } from './hackathons';
import type { Methods as Methods_43qnrm } from './hackathons/_hackathon_id@string';
import type { Methods as Methods_17xlycs } from './init_admin';
import type { Methods as Methods_17xuosa } from './rbac';
import type { Methods as Methods_133ugw7 } from './rbac/_policy_id@string';
import type { Methods as Methods_cw4ito } from './status_tags';
import type { Methods as Methods_jz6noo } from './status_tags/_id@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '//api-dev.hack-portal.com/v1' : baseURL).replace(/\/$/, '');
  const PATH0 = '/hackathons';
  const PATH1 = '/init_admin';
  const PATH2 = '/rbac';
  const PATH3 = '/status_tags';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    hackathons: {
      _hackathon_id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          /**
           * Delete Hackathons
           * @returns success response
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_43qnrm['delete']['resBody'], BasicHeaders, Methods_43qnrm['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * Delete Hackathons
           * @returns success response
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_43qnrm['delete']['resBody'], BasicHeaders, Methods_43qnrm['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * List Hackathons
       * @returns success response
       */
      get: (option?: { query?: Methods_1fgm2mw['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1fgm2mw['get']['resBody'], BasicHeaders, Methods_1fgm2mw['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * List Hackathons
       * @returns success response
       */
      $get: (option?: { query?: Methods_1fgm2mw['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1fgm2mw['get']['resBody'], BasicHeaders, Methods_1fgm2mw['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      /**
       * Create Hackathon
       * @param option.body - request body
       * @returns success response
       */
      post: (option: { body: Methods_1fgm2mw['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1fgm2mw['post']['resBody'], BasicHeaders, Methods_1fgm2mw['post']['status']>(prefix, PATH0, POST, option).json(),
      /**
       * Create Hackathon
       * @param option.body - request body
       * @returns success response
       */
      $post: (option: { body: Methods_1fgm2mw['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1fgm2mw['post']['resBody'], BasicHeaders, Methods_1fgm2mw['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1fgm2mw['get']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    init_admin: {
      /**
       * init admin
       * @param option.body - request body
       * @returns success response
       */
      post: (option: { body: Methods_17xlycs['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_17xlycs['post']['resBody'], BasicHeaders, Methods_17xlycs['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * init admin
       * @param option.body - request body
       * @returns success response
       */
      $post: (option: { body: Methods_17xlycs['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_17xlycs['post']['resBody'], BasicHeaders, Methods_17xlycs['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    rbac: {
      _policy_id: (val1: string) => {
        const prefix1 = `${PATH2}/${val1}`;

        return {
          /**
           * Delete Policies
           * @returns success response
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_133ugw7['delete']['resBody'], BasicHeaders, Methods_133ugw7['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * Delete Policies
           * @returns success response
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_133ugw7['delete']['resBody'], BasicHeaders, Methods_133ugw7['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * List Policies
       * @returns success response
       */
      get: (option?: { query?: Methods_17xuosa['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_17xuosa['get']['resBody'], BasicHeaders, Methods_17xuosa['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * List Policies
       * @returns success response
       */
      $get: (option?: { query?: Methods_17xuosa['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_17xuosa['get']['resBody'], BasicHeaders, Methods_17xuosa['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      /**
       * Create RBACPolicy
       * @param option.body - request body
       * @returns success response
       */
      post: (option: { body: Methods_17xuosa['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_17xuosa['post']['resBody'], BasicHeaders, Methods_17xuosa['post']['status']>(prefix, PATH2, POST, option).json(),
      /**
       * Create RBACPolicy
       * @param option.body - request body
       * @returns success response
       */
      $post: (option: { body: Methods_17xuosa['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_17xuosa['post']['resBody'], BasicHeaders, Methods_17xuosa['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
      /**
       * DeleteAll Policies
       * @returns success response
       */
      delete: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_17xuosa['delete']['resBody'], BasicHeaders, Methods_17xuosa['delete']['status']>(prefix, PATH2, DELETE, option).json(),
      /**
       * DeleteAll Policies
       * @returns success response
       */
      $delete: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_17xuosa['delete']['resBody'], BasicHeaders, Methods_17xuosa['delete']['status']>(prefix, PATH2, DELETE, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_17xuosa['get']['query'] } | undefined) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    status_tags: {
      _id: (val1: number) => {
        const prefix1 = `${PATH3}/${val1}`;

        return {
          /**
           * Update StatusTag by id
           * @param option.body - request body
           * @returns success response
           */
          put: (option: { body: Methods_jz6noo['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_jz6noo['put']['resBody'], BasicHeaders, Methods_jz6noo['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * Update StatusTag by id
           * @param option.body - request body
           * @returns success response
           */
          $put: (option: { body: Methods_jz6noo['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_jz6noo['put']['resBody'], BasicHeaders, Methods_jz6noo['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * Get all StatusTag
       * @returns success response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_cw4ito['get']['resBody'], BasicHeaders, Methods_cw4ito['get']['status']>(prefix, PATH3, GET, option).json(),
      /**
       * Get all StatusTag
       * @returns success response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_cw4ito['get']['resBody'], BasicHeaders, Methods_cw4ito['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
      /**
       * Create a new StatusTag
       * @param option.body - request body
       * @returns success response
       */
      post: (option: { body: Methods_cw4ito['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_cw4ito['post']['resBody'], BasicHeaders, Methods_cw4ito['post']['status']>(prefix, PATH3, POST, option).json(),
      /**
       * Create a new StatusTag
       * @param option.body - request body
       * @returns success response
       */
      $post: (option: { body: Methods_cw4ito['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_cw4ito['post']['resBody'], BasicHeaders, Methods_cw4ito['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH3}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
