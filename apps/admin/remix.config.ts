import type { AppConfig } from '@remix-run/dev'
import { flatRoutes } from 'remix-flat-routes'

export default {
  tailwind: true,
  postcss: true,
  ignoredRouteFiles: ['**/*'],
  routes: async (defineRoutes) => flatRoutes('routes', defineRoutes),
} satisfies AppConfig
