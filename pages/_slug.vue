<template>
  <div class="flex place-items-center justify-items-center flex-col">
    <h1 class="text-4xl">{{ planet.title }}</h1>
    <img
      :src="planet.image"
      alt=""
      style="width: 200px; height: 200px"
      class="mt-4"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface Planet {
  title: string;
  description: string;
  distanceFromSun: string;
  image: string;
  dir: string;
  path: string;
  slug: string;
  updatedAt: string;
}

export default Vue.extend({
  name: 'index',

  async asyncData({ params }) {
    // planet should be an array of Planet
    const planet: Array<Planet> = await fetch(
      `https://api.nuxtjs.dev/planets/${params.slug}`
    ).then((res) => res.json());
    console.log(planet);
    return { planet };
  },
});
</script>

