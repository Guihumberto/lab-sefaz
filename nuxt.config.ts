// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    head: {
        meta: [],
        link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat&display=swap"'}
        ]
    },
    css:[
        "vuetify/styles/main.css",
        "@mdi/font/css/materialdesignicons.css"
    ],
    build:{
        transpile: ["vuetify"]
    },
    modules: [
        '@pinia/nuxt',
        '@vueuse/motion/nuxt'
    ],
    motions: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0
            },
          }
        }
      }

})
