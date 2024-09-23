<script>
import AppMainMoviesItem from './AppMainMoviesItem.vue';
import AppMainSeriesItem from './AppMainSeriesItem.vue';
import axios from 'axios';

export default {
    components:{
        AppMainMoviesItem,
        AppMainSeriesItem
    },

    data() {
    return {
      
    }
  },

    methods:{
        getMediaImage (){
            
        }
  },
}
</script>

<template>

    <AppMainMoviesItem/>
    <AppMainSeriesItem/>
</template>

<style scoped>
</style>