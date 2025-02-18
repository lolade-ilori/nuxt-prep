// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  app: {
    head: {
      title: "Nuxt Prep",
      meta: [
        { name: "description", content: "Everything about Nuxt 3" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.svg" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" }
      ],
    },
  },

})
