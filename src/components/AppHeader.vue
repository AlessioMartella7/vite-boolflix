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
     searchedResult (){
      console.log('AppHeader ha ricevuto il messaggio')
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