// https://nuxt.com/docs/api/configuration/nuxt-config
import type { ThemeDefinition } from 'vuetify'

const customTheme: ThemeDefinition = {
  dark: false,
  colors: {
    'background': '#C3D2DF',
    'background-darken-1': '#414b54',
    'background-lighter-1': '#ebeff3',
    'surface': '#FFFFFF',
    'primary': '#1A73BD',
    'primary-darken-1': '#3700B3',
    'secondary': '#D64F64',
    'secondary-darken-1': '#018786',
    'subtitle': '#464444',
    'icon': '#FFFFFF',
    'cancelamento': '#D3455B',
    'devolucao': '#E66808',
    'vendas': '#24B2A3',
    'error': '#111111',
    'info': '#2196F3',
    'success': '#4CAF50',
    'warning': '#FB8C00',
  },
}


export default defineNuxtConfig({
  nitro: {
    preset: 'aws-lambda'
  },
  modules: [
    '@invictus.codes/nuxt-vuetify'
  ],
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'customTheme',
        themes: {
          customTheme,
        },
      },

    },
    moduleOptions: {
      treeshaking: true,
      autoImport: true,
    }
  },
  app: {
    cdnURL: 'http://localhost:4000/',
    head: {
      htmlAttrs: {
        lang: 'pt-BR',
      },
      title: 'Anime On lambda',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
    },
  },
  ssr: true,
  components: [
    {
      path: '~/components', // will get any components nested in let's say /components/test too
      pathPrefix: false, // <------------------- here
      extensions: ['vue'],
    },
  ],

})