// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'My Awesome Portfolio (v 14)',
      meta: [
        { name: 'description', content: 'Check my projects' }
      ],
      charset: 'utf-16'
    },
    pageTransition: { name: 'cool', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  typescript: {
    shim: false,
  },
  modules: [
    'vite-plugin-vue-type-imports/nuxt',
    '@pinia/nuxt',
  ],
  css: ['~/assets/css/main.css', '~/assets/css/transitions.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
