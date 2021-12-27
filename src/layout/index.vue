<template>
  <div id="app">
      <AppHeader></AppHeader>
      <div class="wrapper">
        <router-view></router-view>
      </div>
      <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from './Header.vue'
import AppFooter from './Footer.vue'

export default {
  name: 'AppLayout',
  components: {
    AppHeader,
    AppFooter,
  }
}
</script>

<style>
/* Import bootstrap */
@import '~bootstrap/dist/css/bootstrap.css';

/* Import root css */
@import "../assets/styles/root.css";
</style>
