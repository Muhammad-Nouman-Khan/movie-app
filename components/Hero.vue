<template>
  <div
    class="w-full h-[330px] flex items-center justify-start px-8 relative"
    style="
      background-image: url('https://movies-proxy.vercel.app/ipx/f_webp&s_1220x659/tmdb/fTrQsdMS2MUw00RnzH0r3JWHhts.jpg');
      background-size: auto;
      background-position: center;
      background-position-y: -100px;
    "
  >
    <div
      class="absolute inset-0 z-10"
      style="
        background: linear-gradient(
          to top,
          rgba(0, 0, 0, 0.95) 0%,
          rgba(0, 0, 0, 0.7) 60%,
          rgba(0, 0, 0, 0.2) 100%
        );
      "
    ></div>
    <div class="flex flex-col gap-2 z-20">
      <h1 class="text-3xl font-semibold z-20">A Working Man</h1>
      <div class="flex gap-2 items-center">
        <div class="flex gap-1 items-center">
          <Icon name="lucide:star" />
          <Icon name="lucide:star" />
          <Icon name="lucide:star" />
          <Icon name="lucide:star" />
          <Icon name="lucide:star" />
        </div>
        <span>&bull;</span>
        <span class="text-gray-500 font-semibold">2025</span>
        <span>&bull;</span>
        <span class="text-gray-500 font-semibold">1h 56min</span>
      </div>
      <p
        class="text-xs md:text-base text-gray-400 font-semibold line-clamp-3 lg:line-clamp-4 lg:max-w-[50%]"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eum qui
        vero obcaecati amet ducimus vitae iusto commodi cumque enim, deserunt
        doloremque temporibus sit ipsam odio accusamus esse asperiores doloribus
        aspernatur, sequi saepe, est voluptatum distinctio dolorum! Assumenda
        expedita alias rerum, quasi ipsa recusandae, blanditiis, nemo dolore
        officia hic ratione!
      </p>
    </div>
  </div>
</template>
