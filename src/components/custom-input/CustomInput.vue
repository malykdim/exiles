<script>
export default {
  props: {
    modelValue: {
      type: String,
    },
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  emits: ['update:modelValue'],
};
</script>

<template>
  <div class="custom-input">
    <label :for="id" class="label"><slot /></label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<style lang="scss" scoped>

</style>
