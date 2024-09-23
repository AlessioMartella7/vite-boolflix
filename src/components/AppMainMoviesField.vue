<script>

import {store} from '../store.js'

export default {
  data() {
    return {
      store,
    }
  }
}
</script>

<template>

<ul>
<li v-for="media in store.mediaMovieList" :key="media.id">
  <h2>{{ media.title }}</h2>
  <h3>{{ media.original_title }}</h3>
  <p>{{ media.original_language }}</p>
  <p>{{ media.vote_average }}</p>
</li>
</ul>
</template>

<style lang="scss" scoped>
</style>