// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css:[
        "vuetify/styles/main.css",
        "@mdi/font/css/materialdesignicons.css"
    ],
    build:{
        transpile: ["vuetify"]
    },
    modules: [
        '@pinia/nuxt',
    ],
    // server: {
    //     port: 8000, 
    //     host: '10.33.67.156'
    //   }
})
