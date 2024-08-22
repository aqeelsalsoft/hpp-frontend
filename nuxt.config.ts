// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({

  // App Default Config
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'  // Set the desired language attribute
      },
      title: 'Half Price Packaging',  // Set your default page title here
    }
  },

  // Alias Declaration
  alias: {
    "@": resolve(__dirname, "/"),
  },

  // CSS Files Declarations
  css: ["~/assets/css/main.scss"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Modules Declarations
  modules: ["@nuxt/image", "@nuxtjs/google-fonts"],

  // Nuxt Image Module Config
  image: {
    dir: ""
  },

  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Quicksand: [300, 400, 500, 600, 700],
    }
  }

})