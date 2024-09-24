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
  <div class="container-fluid pt-5">
        <ul>
          <div class="row justify-content-center gap-2">
          <AppMainMoviesItem
          :movieCoverImg ="imgCover"
          />
          
          <AppMainSeriesItem
          :seriesCoverImg ="imgCover"
          />
        </div>  
      </ul>
  </div>
</template>

<style lang="scss" scoped>
</style>