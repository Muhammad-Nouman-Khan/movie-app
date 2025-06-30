<template>
  <div>
    <Hero endpoint="movie/popular" />
    <MovieSection title="Popular Movies" endpoint="movie/popular" />
    <MovieSection title="Popular TV Shows" endpoint="tv/popular" />
  </div>
</template>

<script setup lang="ts"></script>
