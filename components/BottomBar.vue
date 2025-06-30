<template>
  <div
    class="flex justify-around items-center w-full bg-black text-white border-t border-t-gray-800 p-4"
  >
    <Icon
      v-for="item in navigationItems"
      :key="item.path"
      :size="30"
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
