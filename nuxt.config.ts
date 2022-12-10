// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiKey: process.env.API_KEY,
      serviceDomain: process.env.SERVICE_DOMAIN,
      sendGridApiKey: process.env.SENDGRID_API_KEY
    }
  },
  app: {
    head: {
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      // title: '3Scode',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Noto+Sans+JP:wght@300;400;500;700&family=Poppins:wght@300;400;500;700&display=swap'
        }
      ]
    }
  },
  css: ['@/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/_function.scss";'
        }
      }
    }
  }
})
