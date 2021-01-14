<template>
  <div class="flex place-items-center justify-items-center flex-col text-center">
    <h1 class="text-4xl">{{ planet.title }}</h1>
    <img
      :src="planet.image"
      alt=""
      style="width: 400px; height: 400px"
      class="mt-4"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Planet } from 'utils/Planet';

export default Vue.extend({
  name: 'index',

  data() {
    return {
      planet: {} as Planet,
    };
  },
  async asyncData({ params }) {
    // planet should be an array of Planet
    const planet: Planet | void = await fetch(
      `https://api.nuxtjs.dev/planets/${params.slug}`
    ).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(res.status.toString());
      }
    });
    return { planet };
  },
});
</script>

