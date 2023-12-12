<script>
export default {
  data() {
    return {
      pages: [
        { url: '/hub', text: 'hub' },
        { url: '/guides', text: 'guides' },
        { url: '/create', text: 'create' },
        { url: '/auth', text: 'login' },
        { url: '/profile', text: 'profile' },
        { url: '/logout', text: 'logout' },
      ],
    };
  },
};
</script>

<template>
  <header class="container header">
    <div class="flex menu">
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-item">
            <router-link to="/">
              <img src="../../../public/vite.svg" alt="logo" class="logo">
            </router-link>
          </li>
        </ul>
      </nav>
      <nav class="nav">
        <ul class="nav-list">
          <li v-for="page in pages" :key="page.url" class="nav-item">
            <router-link :to="page.text">
              {{ page.text }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-bottom: 3rem;
  height: 10vh;

  .menu {
    justify-content: space-between;
  }
}
</style>
