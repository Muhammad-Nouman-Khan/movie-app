<template>
  <section class="p-8 flex flex-col gap-4">
    <div class="flex justify-between items-center">
      <h2 class="text-2xl">{{ title }}</h2>
      <p class="text-gray-500 cursor-pointer hover:underline">Explore More</p>
    </div>
    <div class="flex overflow-x-auto gap-2 pb-10">
      <MovieCard
        v-for="movie in movies"
        :key="movie.id"
        :title="movie.title"
        :name="movie.name"
        :movie_img="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
        :rating="movie.vote_average.toFixed(1)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  endpoint: string;
}>();

const { fetchFromTmdb } = useTmdb();

type Movie = {
  id: number;
  title: string | null;
  name: string | null;
  poster_path: string;
  vote_average: number;
};

const movies = ref<Movie[]>([]);

const fetchMovies = async () => {
  try {
    const response = await fetchFromTmdb(props.endpoint);
    movies.value = response.results;
    console.log("Movies:", movies.value);
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};
onMounted(() => {
  fetchMovies();
});
</script>
