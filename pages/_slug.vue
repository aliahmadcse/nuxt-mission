<template>
  <div
    class="flex place-items-center justify-items-center flex-col text-center"
  >
    <h1 class="text-4xl">{{ planet.title }}</h1>
    <img
      :src="planet.image"
      alt=""
      style="width: 400px; height: 400px"
      class="mt-4"
    />
    <button @click="toggleShow" class="btn-blue">Show Planets</button>
    <div v-if="show">
      <planets-list></planets-list>
    </div>
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
      show: false,
    };
  },

  head() {
    return {
      title: 'mars',
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

  methods: {
    sayHello(): string {
      return 'Hello world';
    },

    toggleShow(): void {
      this.show = !this.show;
    },
  },
});
</script>

