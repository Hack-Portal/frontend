import { vitePlugin as remix } from '@remix-run/dev'
import { flatRoutes } from 'remix-flat-routes'
import { remixRoutes } from 'remix-routes/vite' //型安全にできる
import { visualizer } from 'rollup-plugin-visualizer' // bundle sizeを可視化する
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  build: { rollupOptions: { plugins: [visualizer()] } },
  plugins: [
    remix({
      ignoredRouteFiles: ['**/*'],
      routes: async (defineRoutes) => flatRoutes('routes', defineRoutes),
      ssr: false,
    }),
    remixRoutes(),
    tsconfigPaths(),
  ],
})
