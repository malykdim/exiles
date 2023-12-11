<script>
import FormItem from './FormItem.vue';

export default {
  components: { FormItem },

};
</script>

<template>
  <form class="nested-section">
    <h4>Nested Section</h4>
    <FormItem field="summary" label="summary" required>
      <input id="summary" type="text">
    </FormItem>
  </form>
</template>

<style lang="scss" scoped>
.nested-section {
  background: #666;
  h4 {
    color: #ddd;
  }
}
</style>
