<template>
  <div>
    <h1 class="text-4xl mb-5">An index vue</h1>
    <p v-if="$fetchState.pending">Loading Planets ...</p>
    <p v-else-if="$fetchState.error">Error while fetching planets</p>
    <ol v-else>
      <li class="text-blue-600 hover:underline">
        <nuxt-link to="/nuxt"> nuxt </nuxt-link>
      </li>
      <li v-for="planet in planets" :key="planet.slug">
        <nuxt-link :to="planet.slug" class="text-blue-600 hover:underline">
          {{ planet.title }}
        </nuxt-link>
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Planet } from 'utils/Planet';

export default Vue.extend({
  // layout: 'home',
  name: 'index',

  data() {
    return {
      planets: [{} as Planet],
    };
  },

  async fetch() {
    this.planets = await fetch(`https://api.nuxtjs.dev/planets`).then((res) =>
      res.json()
    );
  },

  methods: {},
});
</script>

