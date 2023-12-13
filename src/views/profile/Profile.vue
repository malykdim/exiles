<script>
import { mapState } from 'pinia';
import { useUserStore } from '../../store/userStore.js';

export default {
  computed: {
    ...mapState(useUserStore, ['user', 'isAuthenticated']),
  },
  // created() {
  //   if (!this.isAuthenticated) {
  //     this.$router.push('/auth');
  //   }
  // },
};
</script>

<template>
  <div class="container">
    <div class="heading">
      <h2 class="title">
        {{ user.data.username }}
      </h2>
      <br><br>
      <p class="slogan" @click="toggleIsLogin">
        welcome home!
      </p>
    </div>
    <article class="card">
      <div class="user-info">
        <p>{{ user.data.email }}</p>
      </div>
      <router-link to="/guides">
        View Guides
      </router-link>
      <br><br>
      <router-link to="/create">
        Create Guide
      </router-link>
      <br><br>
      <button>Logout</button>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.container {
  .heading {
    margin-bottom: 5rem;
    .title {
      font-family: 'Noto Serif', serif;
      font-size: 100px;
      font-weight: 100;
    }
    .slogan {
      font-size: 24px;
      font-weight: 200;
    }
  }
  .user-info {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: .5rem;
    margin-bottom: 1.5rem;
    border: 1px solid #ddd;
    border-radius: 5px;

    p {
      margin-bottom: 0;
    }
  }
}
</style>
