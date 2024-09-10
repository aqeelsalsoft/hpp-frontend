// https://nuxt.com/docs/api/configuration/nuxt-config

// nuxt.config.ts
import { defineNuxtModule } from 'nuxt';
import { resolve } from "path";
export default defineNuxtConfig({

  compatibilityDate:['2024-09-06'],
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

  // postcss: {
  //   plugins: {
  //     tailwindcss: {},
  //     autoprefixer: {},
  //   },
  // },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === 'production'
          ? { preset: ['default', { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production
    },
  },

  // Modules Declarations
  modules: ["@nuxt/image", "@nuxtjs/google-fonts", '@nuxt/ui'],

  // Nuxt Image Module Config
  image: {
    provider: 'ipx',
    // provider: 'netlify',
    // domains: ['hppfrontend.netlify.app/'],
    // dir: "",
  },

  // Importing Google Fonts
  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Quicksand: [300, 400, 500, 600, 700],
    }
  },

  // Swiper Js Config
  swiper: {
    // Global swiper options can be configured here
    modules: ['autoplay', 'effect-coverflow'],
  },

})