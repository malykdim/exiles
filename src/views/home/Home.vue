<script>
import AuthButton from './components/AuthButton.vue';
import Heading from './components/Heading.vue';
import Hero from './components/Hero.vue';
import Showcases from './components/Showcases.vue';

export default {
  components: {
    AuthButton,
    Heading,
    Hero,
    Showcases,
  },
  emits: ['onCta'],
  data() {
    return {
      view: 'Home',
    };
  },
  methods: {
    onCta() {
      this.$router.push({ path: '/auth' });
    },
  },
};
</script>

<template>
  <section class="container">
    <Heading />
    <div class="flex">
      <Hero />
      <AuthButton @on-click="onCta()" />
    </div>
    <Showcases />
  </section>
</template>

<style lang="scss" scoped>
.container {
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    max-width: 100vw;

    .cta {
      text-align: center;
      font-size: larger;
      max-width: 20%;
    }
  }
}
</style>
