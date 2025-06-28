<template>
  <div class="flex flex-col lg:flex-row">
    <div class="hidden lg:block fixed top-0 left-0">
      <Sidebar />
    </div>
    <main
      class="flex-1 text-white w-full min-h-[300vw] bg-[#111111] overflow-y-auto lg:pl-17"
    >
      <slot />
    </main>
    <div class="fixed bottom-0 w-full lg:hidden">
      <BottomBar />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
