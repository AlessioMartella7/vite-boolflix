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
        imgSize:'w300',
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

    <AppMainMoviesItem
    :movieCoverImg ="imgCover"
    />
    
    <AppMainSeriesItem
    :seriesCoverImg ="imgCover"
    />
</template>

<style scoped>
</style>