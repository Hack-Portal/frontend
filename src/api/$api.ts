import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods0 } from './accounts';
import type { Methods as Methods1 } from './accounts/_account_id/rooms';
import type { Methods as Methods2 } from './accounts/_account_id@string';
import type { Methods as Methods3 } from './accounts/_account_id@string/rate';
import type { Methods as Methods4 } from './accounts/_from_account_id@string/follow';
import type { Methods as Methods5 } from './frameworks';
import type { Methods as Methods6 } from './hackathons';
import type { Methods as Methods7 } from './hackathons/_hackathon_id@string';
import type { Methods as Methods8 } from './locates';
import type { Methods as Methods9 } from './pastworks';
import type { Methods as Methods10 } from './pastworks/_opus@string';
import type { Methods as Methods11 } from './rate';
import type { Methods as Methods12 } from './rooms';
import type { Methods as Methods13 } from './rooms/_room_id@string';
import type { Methods as Methods14 } from './rooms/_room_id@string/addchat';
import type { Methods as Methods15 } from './rooms/_room_id@string/members';
import type { Methods as Methods16 } from './status_tags';
import type { Methods as Methods17 } from './tech_tags';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '//https://seaffood.com/api/v1' : baseURL).replace(/\/$/, '');
  const PATH0 = '/accounts';
  const PATH1 = '/rooms';
  const PATH2 = '/rate';
  const PATH3 = '/follow';
  const PATH4 = '/frameworks';
  const PATH5 = '/hackathons';
  const PATH6 = '/locates';
  const PATH7 = '/pastworks';
  const PATH8 = '/addchat';
  const PATH9 = '/members';
  const PATH10 = '/status_tags';
  const PATH11 = '/tech_tags';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    accounts: {
      _account_id: (val1: number | string) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          rooms: {
            /**
             * Get Join Room
             * @returns success response
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json(),
            /**
             * Get Join Room
             * @returns success response
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH1}`,
          },
        };
      },
      _account_id_string: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          rate: {
            /**
             * List Rate for User
             * @returns success response
             */
            get: (option?: { query?: Methods3['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).json(),
            /**
             * List Rate for User
             * @returns success response
             */
            $get: (option?: { query?: Methods3['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).json().then(r => r.body),
            /**
             * Create Rate for User
             * @param option.body - Create Rate Request Body
             * @returns success response
             */
            post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).json(),
            /**
             * Create Rate for User
             * @param option.body - Create Rate Request Body
             * @returns success response
             */
            $post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods3['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
          /**
           * Return a account from the id specified in the path
           * @returns Get success response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Return a account from the id specified in the path
           * @returns Get success response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * Update account info from requested body
           * @param option.body - Update Account Request Body
           * @returns Update success response
           */
          put: (option: { body: Methods2['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * Update account info from requested body
           * @param option.body - Update Account Request Body
           * @returns Update success response
           */
          $put: (option: { body: Methods2['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          /**
           * Only you can delete your account (logical delete)
           * @returns delete success response
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods2['delete']['resBody'], BasicHeaders, Methods2['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * Only you can delete your account (logical delete)
           * @returns delete success response
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods2['delete']['resBody'], BasicHeaders, Methods2['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      _from_account_id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          follow: {
            /**
             * Get follow account
             * @returns success response
             */
            get: (option?: { query?: Methods4['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json(),
            /**
             * Get follow account
             * @returns success response
             */
            $get: (option?: { query?: Methods4['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json().then(r => r.body),
            /**
             * Follow!!!!!!!!
             * @param option.body - create Follow Request Body
             * @returns success response
             */
            post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, `${prefix1}${PATH3}`, POST, option).json(),
            /**
             * Follow!!!!!!!!
             * @param option.body - create Follow Request Body
             * @returns success response
             */
            $post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, `${prefix1}${PATH3}`, POST, option).json().then(r => r.body),
            /**
             * Remove follow account
             * @returns success response
             */
            delete: (option: { query: Methods4['delete']['query'], config?: T | undefined }) =>
              fetch<Methods4['delete']['resBody'], BasicHeaders, Methods4['delete']['status']>(prefix, `${prefix1}${PATH3}`, DELETE, option).json(),
            /**
             * Remove follow account
             * @returns success response
             */
            $delete: (option: { query: Methods4['delete']['query'], config?: T | undefined }) =>
              fetch<Methods4['delete']['resBody'], BasicHeaders, Methods4['delete']['status']>(prefix, `${prefix1}${PATH3}`, DELETE, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods4['get']['query'] } | { method: 'delete'; query: Methods4['delete']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
        };
      },
      /**
       * Create an account from the requested body
       * @param option.body - Create Account Request
       * @returns create success response
       */
      post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'FormData').json(),
      /**
       * Create an account from the requested body
       * @param option.body - Create Account Request
       * @returns create success response
       */
      $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'FormData').json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    frameworks: {
      /**
       * Get Frameworks
       * @returns success response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH4, GET, option).json(),
      /**
       * Get Frameworks
       * @returns success response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH4}`,
    },
    hackathons: {
      _hackathon_id: (val1: string) => {
        const prefix1 = `${PATH5}/${val1}`;

        return {
          /**
           * Get Hackathon
           * @returns success response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get Hackathon
           * @returns success response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * List Hackathon
       * @returns success response
       */
      get: (option?: { query?: Methods6['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH5, GET, option).json(),
      /**
       * List Hackathon
       * @returns success response
       */
      $get: (option?: { query?: Methods6['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH5, GET, option).json().then(r => r.body),
      /**
       * Register a hackathon from given parameters
       * @param option.body - create hackathon Request Body
       * @returns success response
       */
      post: (option: { body: Methods6['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH5, POST, option).json(),
      /**
       * Register a hackathon from given parameters
       * @param option.body - create hackathon Request Body
       * @returns success response
       */
      $post: (option: { body: Methods6['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH5, POST, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods6['get']['query'] } | undefined) =>
        `${prefix}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    locates: {
      /**
       * Get Frameworks
       * @returns success response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, PATH6, GET, option).json(),
      /**
       * Get Frameworks
       * @returns success response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, PATH6, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH6}`,
    },
    pastworks: {
      _opus: (val1: string) => {
        const prefix1 = `${PATH7}/${val1}`;

        return {
          /**
           * Get PastWork
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get PastWork
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * Update PastWork
           * @param option.body - Update PastWork Request
           * @returns OK
           */
          put: (option: { body: Methods10['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods10['put']['resBody'], BasicHeaders, Methods10['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * Update PastWork
           * @param option.body - Update PastWork Request
           * @returns OK
           */
          $put: (option: { body: Methods10['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods10['put']['resBody'], BasicHeaders, Methods10['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          /**
           * Delete PastWork
           * @returns OK
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods10['delete']['resBody'], BasicHeaders, Methods10['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * Delete PastWork
           * @returns OK
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods10['delete']['resBody'], BasicHeaders, Methods10['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * List PastWork
       * @returns OK
       */
      get: (option?: { query?: Methods9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, PATH7, GET, option).json(),
      /**
       * List PastWork
       * @returns OK
       */
      $get: (option?: { query?: Methods9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, PATH7, GET, option).json().then(r => r.body),
      /**
       * Create a past work from the requested body
       * @param option.body - Create PastWork Request
       * @returns create success response
       */
      post: (option: { body: Methods9['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, PATH7, POST, option).json(),
      /**
       * Create a past work from the requested body
       * @param option.body - Create PastWork Request
       * @returns create success response
       */
      $post: (option: { body: Methods9['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, PATH7, POST, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods9['get']['query'] } | undefined) =>
        `${prefix}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    rate: {
      /**
       * List Account Rate
       * @returns success response
       */
      get: (option?: { query?: Methods11['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * List Account Rate
       * @returns success response
       */
      $get: (option?: { query?: Methods11['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods11['get']['query'] } | undefined) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    rooms: {
      _room_id: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          addchat: {
            /**
             * Add Chat Room
             * @param option.body - add chat Room Request body
             * @returns success response
             */
            post: (option: { body: Methods14['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods14['post']['resBody'], BasicHeaders, Methods14['post']['status']>(prefix, `${prefix1}${PATH8}`, POST, option).json(),
            /**
             * Add Chat Room
             * @param option.body - add chat Room Request body
             * @returns success response
             */
            $post: (option: { body: Methods14['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods14['post']['resBody'], BasicHeaders, Methods14['post']['status']>(prefix, `${prefix1}${PATH8}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH8}`,
          },
          members: {
            /**
             * CloseRoom
             * @param option.body - Close Room Request body
             * @returns success response
             */
            post: (option: { body: Methods15['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods15['post']['resBody'], BasicHeaders, Methods15['post']['status']>(prefix, `${prefix1}${PATH9}`, POST, option).json(),
            /**
             * CloseRoom
             * @param option.body - Close Room Request body
             * @returns success response
             */
            $post: (option: { body: Methods15['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods15['post']['resBody'], BasicHeaders, Methods15['post']['status']>(prefix, `${prefix1}${PATH9}`, POST, option).json().then(r => r.body),
            /**
             * Remove Account In Rooms
             * @returns success response
             */
            delete: (option?: { query?: Methods15['delete']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods15['delete']['resBody'], BasicHeaders, Methods15['delete']['status']>(prefix, `${prefix1}${PATH9}`, DELETE, option).json(),
            /**
             * Remove Account In Rooms
             * @returns success response
             */
            $delete: (option?: { query?: Methods15['delete']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods15['delete']['resBody'], BasicHeaders, Methods15['delete']['status']>(prefix, `${prefix1}${PATH9}`, DELETE, option).json().then(r => r.body),
            $path: (option?: { method: 'delete'; query: Methods15['delete']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH9}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
          /**
           * Get Room
           * @returns success response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get Room
           * @returns success response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * update Room
           * @param option.body - update Room Request body
           * @returns success response
           */
          put: (option: { body: Methods13['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods13['put']['resBody'], BasicHeaders, Methods13['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * update Room
           * @param option.body - update Room Request body
           * @returns success response
           */
          $put: (option: { body: Methods13['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods13['put']['resBody'], BasicHeaders, Methods13['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          /**
           * Add Account In Rooms
           * @param option.body - add account in room Request body
           * @returns success response
           */
          post: (option: { body: Methods13['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods13['post']['resBody'], BasicHeaders, Methods13['post']['status']>(prefix, prefix1, POST, option).json(),
          /**
           * Add Account In Rooms
           * @param option.body - add account in room Request body
           * @returns success response
           */
          $post: (option: { body: Methods13['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods13['post']['resBody'], BasicHeaders, Methods13['post']['status']>(prefix, prefix1, POST, option).json().then(r => r.body),
          /**
           * delete Room
           * @returns success response
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods13['delete']['resBody'], BasicHeaders, Methods13['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * delete Room
           * @returns success response
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods13['delete']['resBody'], BasicHeaders, Methods13['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * List Account
       * @returns success response
       */
      get: (option?: { query?: Methods12['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * List Account
       * @returns success response
       */
      $get: (option?: { query?: Methods12['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      /**
       * Create Rooms
       * @param option.body - create Room Request Body
       * @returns success response
       */
      post: (option: { body: Methods12['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods12['post']['resBody'], BasicHeaders, Methods12['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * Create Rooms
       * @param option.body - create Room Request Body
       * @returns success response
       */
      $post: (option: { body: Methods12['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods12['post']['resBody'], BasicHeaders, Methods12['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods12['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    status_tags: {
      /**
       * Get Frameworks
       * @returns success response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, PATH10, GET, option).json(),
      /**
       * Get Frameworks
       * @returns success response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, PATH10, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH10}`,
    },
    tech_tags: {
      /**
       * Get Frameworks
       * @returns success response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods17['get']['resBody'], BasicHeaders, Methods17['get']['status']>(prefix, PATH11, GET, option).json(),
      /**
       * Get Frameworks
       * @returns success response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods17['get']['resBody'], BasicHeaders, Methods17['get']['status']>(prefix, PATH11, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH11}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
