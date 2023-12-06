<script>
export default {
  emits: ['onClick'],
  methods: {
    onClick(view) {
      this.$emit('onClick', view);
    },
  },
};
</script>

<template>
  <button class="cta" @click.prevent="onClick('Auth')">
    Join the gang!
  </button>
</template>

<style lang="scss" scoped>

</style>
