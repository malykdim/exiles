<script>
import { RouterView } from 'vue-router';
import AppHeader from './components/app-header/AppHeader.vue';
import AppFooter from './components/app-footer/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    RouterView,
  },
  data() {
    return {
    };
  },
};
</script>

<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
  <AppFooter />
</template>

<style lang="scss" scoped>
  main {
    position: absolute;
    top: 10vh;
    bottom: 5vh;
    left: 0;
    right: 0;
    overflow: auto;
  }
</style>
