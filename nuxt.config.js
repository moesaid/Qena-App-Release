export default {
   // Target (https://go.nuxtjs.dev/config-target)
   target: 'static',

   googleAnalytics: {
      id: 'G-WBYP3VW60T',
      dev: false,
   },

   // Global page headers (https://go.nuxtjs.dev/config-head)
   head: {
      title: 'Qena App',
      titleTemplate: 'Everything You Need To Run Your Freelance Business.',
      htmlAttrs: {
         lang: 'en',
         amp: true,
      },
      meta: [
         { charset: 'utf-8' },
         { name: 'viewport', content: 'width=device-width, initial-scale=1' },
         { hid: 'title', name: 'title', content: 'Qena App' },
         {
            hid: 'description',
            name: 'description',
            content: 'Qena App - Everything You Need To Run Your Freelance Business.',
         },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
   },

   // Global CSS (https://go.nuxtjs.dev/config-css)
   css: [],

   styleResources: {},

   // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
   plugins: [],

   // Auto import components (https://go.nuxtjs.dev/config-components)
   components: true,

   // Modules for a dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
   buildModules: [
      // https://go.nuxtjs.dev/tailwindcss
      '@nuxtjs/tailwindcss',
      '@nuxtjs/google-analytics',
   ],

   // Modules (https://go.nuxtjs.dev/config-modules)
   modules: [
      // https://go.nuxtjs.dev/pwa
      '@nuxtjs/pwa',
   ],

   // Build Configuration (https://go.nuxtjs.dev/config-build)
   build: {},
};
