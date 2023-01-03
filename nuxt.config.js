import postcssPresetEnv from 'postcss-preset-env'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'swapi-nuxt-tutorial',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  styleResources: {
    scss: [
      '~/assets/styles/includes/_config.scss',
      // '~/assets/styles/includes/_breakpoints.scss',
      // '~/assets/styles/includes/_mixins.scss',
      // '~/assets/styles/includes/_z-layers.scss',
      // '~/assets/styles/includes/_fonts.scss',
      // '~/assets/styles/includes/_typography.scss',
      // '~/assets/styles/includes/_colors.scss',
      // '~/assets/styles/includes/_forms.scss'
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/app.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    // '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: [
        postcssPresetEnv({
          stage: 0,
          browsers: 'cover 90%, last 2 major versions'
        })
      ]
    },
  },

  axios: {
    baseURL: process.env.API_URL
  }
}
