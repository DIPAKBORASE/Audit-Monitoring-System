import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import { resolve } from 'path'
// import fileRouter from 'vite-plugin-file-router'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite({
    routesDirectory: 'src/routes',
    generatedRouteTree: 'src/routeTree.gen.ts',
  }),
    // fileRouter({
    //   routeRouter: 'src/routes',
    //   output: 'src/routeTree.gen.ts',
    // }),
  ],
  server: {
    port:3000
  }
  // resolve: {
  //   alias: {
  //     '@': resolve(__dirname, './src/*'),
  //   },
  // },
})