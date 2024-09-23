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
      apiSearchMedia:'https://api.themoviedb.org/3/search/multi',
      apiKey: '4377ddd6b96700ad11f5d9d8592df891',
      
    }
  },
  methods:{
     getSearchedMedia(mediaName){
        axios.get(this.apiSearchMedia, {
          params: {
            api_key: this.apiKey,
            query: mediaName,
          }
        })
        .then((response) => {
          // mio creo una variabile per raccoglierre i risultati
          const result = response.data.results;
          
          // reset risultati di ricerca precedenti se presenti
          store.mediaMovieList = [];
          store.mediaSeriesList = [];
          
          //itero per filtare la tipologia di media ricevuto e successivamente inviarlo allo store
          result.forEach(element => {
            if(element.media_type ==='movie'){
              store.mediaMovieList.push(element)
            } else if ( element.media_type === 'tv'){
              store.mediaSeriesList.push(element);
            }
          });
          console.log('RISULTATO CHIAMATA FILM:', store.mediaMovieList)
          console.log('RISULTATO CHIAMATA SERIE TV:', store.mediaSeriesList)
        })
     } ,

     searchedResult (searchedMediaName){
      console.log('AppHeader ha ricevuto il messaggio', searchedMediaName)
      this.getSearchedMedia(searchedMediaName)
     },
  },
}
</script>

<template>
  <AppHeaderSearch
  @searched-media="searchedResult"
  />
</template>

<style lang="scss" scoped>
</style>