<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  components:{
    AppHeader,
    AppMain
  },
  data() {
    return {
    }
  }
}
</script>

<template>
<AppHeader/>
<AppMain/>
</template>

<style lang="scss">
@use  "bootstrap/scss/bootstrap.scss" as *;
@use "./styles/general.scss" as *;

</style>