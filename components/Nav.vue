<template>
  <div>
    <header
      class="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4"
    >
      <!-- Logo text or image -->
      <div class="flex items-center justify-between mb-4 md:mb-0">
        <h1 class="leading-none text-2xl text-grey-darkest">
          <nuxt-link class="text-2xl font-bold" to="/">Nuxt Mission</nuxt-link>
        </h1>

        <a class="text-black hover:text-orange md:hidden" href="#">
          <i class="fa fa-2x fa-bars"></i>
        </a>
      </div>
      <!-- END Logo text or image -->

      <!-- Search field -->
      <form class="mb-4 w-full md:mb-0 md:w-1/4">
        <label class="hidden" for="search-form">Search</label>
        <input
          class="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full"
          placeholder="Search"
          type="text"
        />
        <button class="hidden">Submit</button>
      </form>
      <!-- END Search field -->

      <!-- Global navigation -->
      <nav>
        <ul class="list-reset md:flex md:items-center">
          <li class="md:mr-5 lg:mr-6 text-lg font-medium">
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li class="md:mr-5 lg:mr-10 text-lg font-medium">
            <nuxt-link to="/about">About</nuxt-link>
          </li>
          <li class="md:mr-5 lg:mr-10 text-lg font-medium">
            <nuxt-link to="/about">About</nuxt-link>
          </li>
        </ul>
      </nav>
      <!-- END Global navigation -->
    </header>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
