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
<p>MainMoviesField</p>
<ul>
<li v-for="movie in store.movieList" :key="movie.id">
  <h2>{{ movie.title }}</h2>
  <h3>{{ movie.original_title }}</h3>
  <p>{{ movie.original_language }}</p>
  <p>{{ movie.vote_average }}</p>
</li>
</ul>
</template>

<style lang="scss" scoped>
</style>