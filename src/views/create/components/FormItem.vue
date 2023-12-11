<script>
export default {
  props: {
    modelValue: {
      type: String,
    },
    field: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
    },
    v$: {
      type: Object,
    },
  },
  emits: ['update:modelValue'],
  methods: {
    onChange(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<template>
  <div class="input-type">
    <fieldset class="fieldset">
      <legend class="legend">
        {{ label }}
      </legend>

      <label :for="field" class="label">{{ label }} <strong v-if="required">*</strong></label>

      <slot>
        <input
          :id="props.field"
          :value="modelValue"
          type="text"
          class="input"
          @input="onChange"
        >
      </slot>

      <div v-if="v$?.aboutData[field].$errors.length" class="input-errors">
        <p v-for="err in v$?.aboutData[field].$errors" :key="err.$uid" class="error-msg">
          error: {{ err.$message }}
        </p>
      </div>
      <!-- <div v-for="error of v$.guide.thumbnail.$errors" :key="error.$uid" class="input-errors">
        <div class="error-msg">
          error: {{ error.$message }}
        </div>
      </div> -->
    </fieldset>
  </div>
</template>

<style lang="scss" scoped>
.input-type {
  color: #fff;

  .input-errors {
    .error-msg {
      color: red;
    }
  }
}
</style>
