<template>
  <div class="p-8">
    <div class="flex items-center gap-2">
      <img src="/logo.webp" alt="logo" />
      <h2 class="text-xl">Nuxt Movies</h2>
    </div>
    <div class="flex items-center gap-2">
      <h2 class="text-sm text-gray-400">Made with</h2>
      <NuxtLink
        to="https://nuxt.com/"
        target="_blank"
        class="flex items-center gap-1"
      >
        <img src="/nuxt.svg" class="w-10" alt="logo" />
        <h2 class="font-bold">Nuxt</h2>
      </NuxtLink>
    </div>
    <div class="flex items-center gap-2">
      <h2 class="text-sm text-gray-400">Data provided by</h2>
      <NuxtLink to="https://www.themoviedb.org/" target="_blank">
        <img src="/tmdb.svg" class="w-28" alt="logo" />
      </NuxtLink>
    </div>
    <p class="text-sm text-gray-400 mt-3">
      This project uses the TMDB API but is not endorsed or certified by TMDB.
    </p>
    <div class="flex items-center gap-2 mt-3">
      <NuxtLink
        to="https://github.com/Muhammad-Nouman-Khan/movie-app"
        target="_blank"
      >
        <Icon name="mdi:github" style="height: 30px; width: 30px" />
      </NuxtLink>
      <NuxtLink
        to="https://www.linkedin.com/in/muhammadnoumankhan01/"
        target="_blank"
      >
        <Icon name="mdi:linkedin" style="height: 30px; width: 30px" />
      </NuxtLink>
    </div>
  </div>
</template>
