import './dotenv.config';

export default {
  head: {
    htmlAttrs: {
      lang: process.env.APP_LANGUAGE || 'en',
    },
    title: process.env.APP_TITLE || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.APP_DESCRIPTION || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  dev: process.env.NODE_ENV !== 'production',
  server: {
    port: 8080,
    host: '0.0.0.0',
  },
  modules: [
    '@nuxtjs/axios',
  ],
  buildModules: [
    '@nuxtjs/dotenv',
  ],
  axios: {
    baseUrl: process.env.API_URL,
  },
  loading: false,
  css: ['~/assets/css/main.scss'],
  styleResources: {
    scss: ['~/assets/css/main.scss'],
  },
  vue: {
    config: {
      productionTip: false,
    },
  },
};
