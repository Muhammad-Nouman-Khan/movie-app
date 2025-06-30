<template>
  <div class="flex flex-col">
    <div class="flex flex-col lg:flex-row">
      <div class="hidden lg:block fixed top-0 left-0">
        <Sidebar />
      </div>
      <main
        class="flex-1 text-white w-full min-h-screen bg-[#111111] overflow-y-auto lg:pl-17"
      >
        <slot />
      </main>
    </div>
    <div class="flex-1 text-white w-full bg-[#111111] lg:pl-17 lg:pb-0 pb-16">
      <Footer />
    </div>
    <div class="fixed bottom-0 w-full lg:hidden">
      <BottomBar />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
