<script>
export default {
  data() {
    return {
      inputSearch: '',
    }
  }
}
</script>

<template>
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand">Bootflix</a>
    <div>
      <input class="form-control me-2" type="text" v-model="inputSearch">
      <button class="btn btn-outline-success" type="button">Search</button>
    </div>  
  </div>
</nav>
</template>

<style scoped>
</style>