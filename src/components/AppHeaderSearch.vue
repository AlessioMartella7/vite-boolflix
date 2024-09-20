<script>
export default {
  data() {
    return {
      inputSearch: '',
    }
  },
  methods:{
    getSearchedInput(message){
      console.log('ho cliccato sul bottone ed è apparso questo messaggio: ', message);
    },
  },
}
</script>

<template>
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand">Bootflix</a>
    <div>
      <input class="form-control me-2" type="text" v-model="inputSearch">
      <button @click="getSearchedInput(inputSearch)" class="btn btn-outline-success" type="button">Search</button>
    </div>  
  </div>
</nav>
</template>

<style scoped>
</style>