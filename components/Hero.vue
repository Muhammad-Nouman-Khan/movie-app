<template>
  <div
    class="w-full h-[400px] flex flex-col justify-center items-start px-8 relative gap-2"
    :style="
      heroMovie && heroMovie?.backdrop_path
        ? {
            backgroundImage: `url('https://image.tmdb.org/t/p/w780${heroMovie.backdrop_path}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }
        : {}
    "
  >
    <div
      class="absolute inset-0 bg-gradient-to-b from-black/0 to-black z-0"
    ></div>
    <h1 class="text-4xl z-10 lg:text-6xl">{{ heroMovie?.title }}</h1>
    <div class="flex gap-2 items-center text-gray-400 z-10">
      <div class="flex">
        <Icon name="lucide:star" style="color: #00acac" />
        <Icon name="lucide:star" style="color: #00acac" />
        <Icon name="lucide:star" style="color: #00acac" />
        <Icon name="lucide:star" style="color: #00acac" />
        <Icon name="lucide:star" style="color: #00acac" />
      </div>
      <span>&bull;</span>
      <span>{{ heroMovie?.release_date }}</span>
      <span>&bull;</span>
      <span>1h 56min</span>
    </div>
    <p
      class="line-clamp-3 z-20 text-gray-300 text-xs md:text-base lg:w-[500px]"
    >
      {{ heroMovie?.overview }}
    </p>
  </div>
</template>

<script setup lang="ts">
const { fetchFromTmdb } = useTmdb();

const props = defineProps<{
  endpoint: string;
}>();

type HeroMovie = {
  backdrop_path: string | null;
  title: string;
  release_date: string;
  overview: string;
};

const heroMovie = ref<HeroMovie | null>(null);

const fetchHeroMovie = async () => {
  try {
    const res = await fetchFromTmdb(props.endpoint);
    heroMovie.value = res.results[0];
  } catch (error) {
    console.error("Error fetching hero movie:", error);
  }
};
onMounted(() => {
  fetchHeroMovie();
});
</script>
