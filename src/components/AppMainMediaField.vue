<script>
import AppMainMoviesItem from './AppMainMoviesItem.vue';
import AppMainSeriesItem from './AppMainSeriesItem.vue';
import { store } from '../store';

export default {
    components:{
        AppMainMoviesItem,
        AppMainSeriesItem
    },

    data() {
        
    return {
        store,
        baseImgUrl: 'https://image.tmdb.org/t/p/',
        imgSize:'w342',
        imgCover: ``,
        
    }
  },
  methods:{

    createImgCoverUrl () {
        this.imgCover = `${this.baseImgUrl}${this.imgSize}`;
        return 
    }
  },
  
  created(){
    this.createImgCoverUrl();
  }
}
</script>

<template>
  <div class="container-fluid">
        <ul>
          <AppMainMoviesItem
          :movieCoverImg ="imgCover"
          />
          
          <AppMainSeriesItem
          :seriesCoverImg ="imgCover"
          />
      </ul>
  </div>
</template>

<style lang="scss" scoped>
</style>