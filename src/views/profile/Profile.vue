<script>
import { mapState } from 'pinia';
import { useUserStore } from '../../store/userStore.js';

export default {
  computed: {
    ...mapState(useUserStore, ['profile', 'isAuthenticated']),
  },
  created() {
    if (!this.isAuthenticated) {
      this.$router.push('/auth');
    }
  },
};
</script>

<template>
  <div>
    <article class="card">
      <h4>Profile</h4>
      <p>{{ profile.username }}</p>
    </article>
  </div>
</template>

<style lang="scss" scoped>
    .card {
        max-width: 15rem;
    }
</style>
