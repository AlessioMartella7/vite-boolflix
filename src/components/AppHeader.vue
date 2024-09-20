<script>
import AppHeaderSearch from './AppHeaderSearch.vue';
import axios from 'axios';
import {store} from '../store.js'


export default {
  components:{
    AppHeaderSearch,
  },
  data() {
    return {
      store,
      apiSearchMovie:'https://api.themoviedb.org/3/search/movie',
      apiKey: '4377ddd6b96700ad11f5d9d8592df891',
      
    }
  },
  methods:{
     getSearchedMovie(movieName){
        axios.get(this.apiSearchMovie, {
          params: {
            api_key: this.apiKey,
            query: movieName,
          }
        })
        .then((response) => {
          store.movieList = response.data.results;
          console.log('RISULTATO CHIAMATA:', store.movieList)
        })
     } ,

     searchedResult (searchedMovieName){
      console.log('AppHeader ha ricevuto il messaggio', searchedMovieName)
      this.getSearchedMovie(searchedMovieName)
     },
  },
}
</script>

<template>
  <AppHeaderSearch
  @searched-movie="searchedResult"
  />
</template>

<style lang="scss" scoped>
</style>