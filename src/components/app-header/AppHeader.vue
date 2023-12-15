<script>
import { mapState } from 'pinia';
import { useUserStore } from '../../store/userStore.js';
import { logout } from '../../dataProviders/auth.js';

export default {
  data() {
    return {
      pages: [
        { url: '/hub', text: 'hub' },
        { url: '/guides', text: 'guides' },
        { url: '/create', text: 'create' },
      ],
    };
  },
  computed: {
    ...mapState(useUserStore, ['user', 'currentSessionToken', 'logoutUser']),
  },
  methods: {
    async logUserOut() {
      const response = await logout(this.currentUserSessionToken);
      console.log(response);

      this.logoutUser();
      console.log(this.user);

      this.$router.push('/');
    },
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
          <li v-if="!user">
            <router-link to="/login">
              <strong>login</strong>
            </router-link>
          </li>
          <li v-if="user">
            <router-link to="/profile">
              <strong>{{ user.username }}</strong>
            </router-link>
          </li>
          <li v-if="user">
            <button @click="logUserOut">
              <strong>logout</strong>
            </button>
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
