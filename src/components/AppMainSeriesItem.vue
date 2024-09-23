<script>

import {store} from '../store.js'

export default {
  data() {
    return {
      store,
    }
  },
  methods:{
    getFlagImg(iso){
      const countryCode = store.languageToCountry[iso];
      if (countryCode) {
        return `https://flagcdn.com/24x18/${countryCode}.png`;
      }
      //in caso di mancata corrispondenza
      return 'https://flagcdn.com/24x18/eu.png';
    }
  }
}
</script>

<template>

<ul>
<li v-for="media in store.mediaSeriesList" :key="media.id">
  <h2>{{ media.name }}</h2>
  <h3>{{ media.original_name }}</h3>
  <img :src="getFlagImg(media.original_language)" :alt="media.original_language">
  <p>{{ media.vote_average }}</p>
</li>
</ul>
</template>

<style lang="scss" scoped>
</style>