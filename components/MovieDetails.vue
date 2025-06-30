<template>
  <div class="p-4">
    <div class="flex items-center justify-center w-full gap-8 text-white py-8">
      <h1 class="cursor-pointer text-2xl">OVERVIEW</h1>
      <h1 class="cursor-pointer text-2xl">VIDEOS</h1>
      <h1 class="cursor-pointer text-2xl">PHOTOS</h1>
    </div>
    <div class="flex gap-4">
      <div class="hidden md:flex lg:w-[500px] w-[300px] h-[500px]">
        <img
          :src="`https://image.tmdb.org/t/p/original${movieDetails?.poster_path}`"
          alt=""
          class="w-full h-full object-contain"
        />
      </div>
      <div class="flex flex-1 flex-col gap-4">
        <h1 class="text-3xl">Storyline</h1>
        <p class="text-gray-400">{{ movieDetails?.overview }}</p>
        <div class="flex flex-col gap-2 text-gray-400 text-sm">
          <div v-if="movieDetails?.release_date" class="flex gap-2">
            <p>Released :</p>
            <p>{{ movieDetails.release_date }}</p>
          </div>
          <div v-if="movieDetails?.budget" class="flex gap-2">
            <p>Budget :</p>
            <p>${{ movieDetails.budget.toLocaleString() }}</p>
          </div>
          <div v-if="movieDetails?.revenue" class="flex gap-2">
            <p>Revenue :</p>
            <p>${{ movieDetails.revenue.toLocaleString() }}</p>
          </div>
          <div class="flex gap-2">
            <p>Genre :</p>
            <p class="flex flex-wrap gap-2">
              <span
                v-for="genre in movieDetails?.genres"
                :key="genre.id"
                class="px-3 py-1 rounded-lg bg-[#23272f] text-xs font-semibold text-[#3fc0ac] hover:bg-[#3fc0ac] hover:text-black transition-colors duration-200 cursor-pointer"
              >
                {{ genre.name }}
              </span>
            </p>
          </div>
          <div class="flex gap-2">
            <p>Status :</p>
            <p>{{ movieDetails?.status }}</p>
          </div>
          <div class="flex gap-2">
            <p>Language :</p>
            <p>{{ movieDetails?.original_language }}</p>
          </div>
          <div class="flex gap-2">
            <p>Companies:</p>
            <p>
              {{
                movieDetails?.production_companies
                  .map((company) => company.name)
                  .join(", ")
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  endpoint: string;
}>();

const { fetchFromTmdb } = useTmdb();

type MovieDetails = {
  poster_path: string;
  overview: string;
  release_date: string;
  budget: number;
  revenue: number;
  // *********************
  genres: {
    id: number;
    name: string;
  }[];
  status: string;
  original_language: string;
  production_companies: {
    name: string;
  }[];
};

const movieDetails = ref<MovieDetails | null>(null);

const fetchMovieDetails = async () => {
  try {
    const res = await fetchFromTmdb(props.endpoint);
    movieDetails.value = res;
    console.log(movieDetails.value);
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
};

onMounted(() => {
  fetchMovieDetails();
});
</script>
