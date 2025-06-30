<template>
  <div
    class="flex flex-col items-center justify-around bg-black text-white border-r border-r-gray-800 p-4 h-screen"
  >
    <Icon
      v-for="item in navigationItems"
      :key="item.path"
      :size="32"
      :name="item.icon"
      class="cursor-pointer transition-colors duration-200"
      :style="{ color: $route.path === item.path ? '#3fc0ac' : '#ffffff' }"
      @click="navigateTo(item.path)"
    />
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

const navigationItems = [
  { icon: "lucide:home", path: "/" },
  { icon: "lucide:film", path: "/movie" },
  { icon: "lucide:tv", path: "/tv" },
  { icon: "lucide:search", path: "/search" },
];

const navigateTo = (path: string) => {
  router.push(path);
};
</script>
