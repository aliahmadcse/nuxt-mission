<template>
  <div>
    <h1 class="text-4xl mb-5">An index vue</h1>
    <lazy-planets-list />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  // layout: 'home',
  name: 'index',
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggleShow(): void {
      this.show = !this.show;
    },
  },
});
</script>

