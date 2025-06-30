<template>
  <div>
    <Hero :endpoint="`${type}/${id}`" />
    <MovieDetails :endpoint="`${type}/${id}`" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const type = route.path.split("/")[1];
const id = route.params.id;
</script>
