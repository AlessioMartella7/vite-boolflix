<script>
import AppHeaderSearch from './AppHeaderSearch.vue';


export default {
  components:{
    AppHeaderSearch,
  },
  data() {
    return {
      
    }
  },
  methods:{
     searchedResult (message){
      console.log('AppHeader ha ricevuto il messaggio', message)
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