<script>
export default {
  data() {
    return {
      inputSearch: '',
    }
  },
  methods:{
    getSearchedInput(message){
      console.log('ho cliccato sul bottone ed è apparso questo messaggio in App SearchBAR: ', message);
      this.$emit('searchedMedia', message)
      this.inputSearch=''
    },
  },
}
</script>

<template>
<nav class="navbar bg-black">
  <div class="container-fluid">
    <a class="navbar-brand fw-bold fs-4 text-danger p-2" href="#">BOOTFLIX</a>
    <div>
      <input class="rounded-0 me-2" type="text" v-model="inputSearch "@keyup.enter="getSearchedInput(inputSearch)" placeholder="Search">
      <button @click="getSearchedInput(inputSearch)" class="btn btn-outline-success d-none " type="button">Search</button>
    </div>  
  </div>
</nav>
</template>

<style scoped>
</style>