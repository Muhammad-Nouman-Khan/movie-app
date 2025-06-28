<template>
  <section class="p-8 flex flex-col gap-4">
    <div class="flex justify-between items-center">
      <h2 class="text-2xl">{{ title }}</h2>
      <p class="text-gray-500 cursor-pointer hover:underline">Explore More</p>
    </div>
    <div class="flex overflow-x-auto gap-2 pb-10">
      <MovieCard
        title="A Working Man"
        movie_img="https://movies-proxy.vercel.app/ipx/f_webp&s_800x1200/tmdb/xUkUZ8eOnrOnnJAfusZUqKYZiDu.jpg"
        rating="6.2"
      />
      <MovieCard
        title="A Working Man"
        movie_img="https://movies-proxy.vercel.app/ipx/f_webp&s_800x1200/tmdb/xUkUZ8eOnrOnnJAfusZUqKYZiDu.jpg"
        rating="6.2"
      />
      <MovieCard
        title="A Working Man"
        movie_img="https://movies-proxy.vercel.app/ipx/f_webp&s_800x1200/tmdb/xUkUZ8eOnrOnnJAfusZUqKYZiDu.jpg"
        rating="6.2"
      />
      <MovieCard
        title="A Working Man"
        movie_img="https://movies-proxy.vercel.app/ipx/f_webp&s_800x1200/tmdb/xUkUZ8eOnrOnnJAfusZUqKYZiDu.jpg"
        rating="6.2"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
