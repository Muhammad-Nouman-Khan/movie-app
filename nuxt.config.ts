import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      tmdbApiKey: process.env.TMDB_API_KEY,
    },
  },
  modules: [
    '@nuxt/icon'
  ]
});
