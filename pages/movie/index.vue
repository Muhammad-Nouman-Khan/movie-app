<template>
  <div>
    <Hero endpoint="movie/popular" />
    <MovieSection title="Popular Movies" endpoint="movie/popular" />
    <MovieSection title="Top Rated Movies" endpoint="movie/top_rated" />
    <MovieSection title="Upcoming Movies" endpoint="movie/upcoming" />
    <MovieSection title="Now Playing Movies" endpoint="movie/now_playing" />
  </div>
</template>
