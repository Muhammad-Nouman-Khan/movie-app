<template>
  <div
    class="flex justify-around items-center w-full bg-black text-white border-t border-t-gray-800 p-4"
  >
    <Icon
      size="30"
      name="lucide:home"
      class="cursor-pointer transition-colors duration-200"
      :style="{ color: $route.path === '/' ? '#3fc0ac' : '#ffffff' }"
      @click="navigateTo('/')"
    />
    <Icon
      size="30"
      name="lucide:film"
      class="cursor-pointer transition-colors duration-200"
      :style="{ color: $route.path === '/movie' ? '#3fc0ac' : '#ffffff' }"
      @click="navigateTo('/movie')"
    />
    <Icon
      size="30"
      name="lucide:tv"
      class="cursor-pointer transition-colors duration-200"
      :style="{ color: $route.path === '/tv' ? '#3fc0ac' : '#ffffff' }"
      @click="navigateTo('/tv')"
    />
    <Icon
      size="30"
      name="lucide:search"
      class="cursor-pointer transition-colors duration-200"
      :style="{ color: $route.path === '/search' ? '#3fc0ac' : '#ffffff' }"
      @click="navigateTo('/search')"
    />
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

const navigateTo = (path: string) => {
  router.push(path);
};
</script>
