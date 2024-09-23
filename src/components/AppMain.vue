<script>
import AppMainMoviesItem from './AppMainMoviesItem.vue';
import AppMainSeriesItem from './AppMainSeriesItem.vue';

export default {
    components:{
        AppMainMoviesItem,
        AppMainSeriesItem
    },
    data() {
    return {
      
    }
  }
}
</script>

<template>
    <p>Main</p>
    <AppMainMoviesItem/>
    <AppMainSeriesItem/>
</template>

<style scoped>
</style>