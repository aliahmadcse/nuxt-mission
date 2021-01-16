<template>
  <div>
    <p v-if="$fetchState.pending">Loading Planets ...</p>
    <p v-else-if="$fetchState.error">Error while fetching planets</p>
    <ol v-else>
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
});
</script>
