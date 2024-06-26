// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image"],
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    apiSecret: '', 
    public: {
      apiBase: process?.env?.NUXT_PUBLIC_CMS_URL || '', 
    }
  },
})