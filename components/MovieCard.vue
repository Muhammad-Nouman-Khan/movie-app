<template>
  <div
    class="flex flex-col shrink-0 w-[170px] lg:w-[250px] overflow-hidden cursor-pointer"
  >
    <div
      class="border-2 border-gray-800 w-full hover:scale-105 transition-transform duration-300 overflow-hidden"
    >
      <img :src="movie_img" :alt="title" class="w-full h-full object-contain" />
    </div>
    <h3 class="mt-2 text-base">{{ title }}</h3>
    <div class="flex gap-2 items-center">
      <div class="flex items-center">
        <Icon name="lucide:star" style="color: #00acac" />
        <Icon name="lucide:star" style="color: #00acac" />
        <Icon name="lucide:star" style="color: #00acac" />
        <Icon name="lucide:star" style="color: #00acac" />
        <Icon name="lucide:star" style="color: #00acac" />
      </div>
      <span class="text-sm text-gray-400">{{ rating }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  movie_img: string;
  rating: string;
}>();
</script>
