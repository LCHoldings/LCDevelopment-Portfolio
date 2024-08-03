// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/sanity', "@nuxtjs/tailwindcss", "shadcn-nuxt", '@nuxtjs/color-mode'],
  css: ['~/assets/css/main.css'],

  sanity: {
    projectId: process.env.NUXT_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_SANITY_DATASET,
    useCdn: false, // `false` if you want to ensure fresh data
    apiVersion: process.env.NUXT_SANITY_API_VERSION || '2024-03-15',
    visualEditing: {
      studioUrl: process.env.NUXT_SANITY_STUDIO_URL || 'http://localhost:3333',
      token: process.env.NUXT_SANITY_API_READ_TOKEN,
      stega: true,
    },
  },

  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },

  postcss: {
    plugins: {
      autoprefixer: {},
      'postcss-nested': {},
      tailwindcss: {},
    },
  },

  compatibilityDate: '2024-08-02',

  devtools: { enabled: true },
})