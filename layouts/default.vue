<template>
  <div class="flex flex-col lg:flex-row min-h-screen">
    <div class="hidden lg:flex">
      <Sidebar />
    </div>
    <main class="flex-1 min-h-screen bg-[#111111] overflow-y-auto">
      <slot />
    </main>
    <div class="lg:hidden">
      <BottomBar />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
