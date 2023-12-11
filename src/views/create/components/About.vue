<script>
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';

import FormItem from './FormItem.vue';

export default {
  components: { FormItem },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      aboutData: {
        title: '',
        summary: '',
        thumbnail: '',
        author: '',
        year: null,
      },
    };
  },
  validations() {
    return {
      aboutData: {
        title: '',
        summary: '',
        thumbnail: '',
        author: '',
        year: null,
      },

    };
  },
  methods: {
    async handleSubmit() {
      const isValid = await this.v$.$validate();

      console.log('isValid', isValid);
    },
  },
};
</script>

<template>
  <form class="nested-section" @submit.prevent="handleSubmit">
    <h4>About this guide: </h4>
    <FormItem
      v-model="aboutData.title"
      :v$="v$"
      field="title"
      label="title"
      required
    />
    <FormItem
      v-model="aboutData.summary"
      :v$="v$"
      field="summary"
      label="summary"
      required
    />
    <FormItem
      v-model="aboutData.thumbnail"
      :v$="v$"
      field="thumbnail"
      label="thumbnail"
      required
    />
    <FormItem
      v-model="aboutData.author"
      :v$="v$"
      field="author"
      label="author"
      required
    />
    <!-- <FormItem field="summary" label="summary" required>
      <input
        id="summary"
        v-model="aboutData.summary"
        type="text"
        placeholder="summary"
      >
    </FormItem>
    <FormItem field="thumbnail" label="thumbnail" required>
      <input
        id="thumbnail"
        v-model="aboutData.thumbnail"
        type="text"
        placeholder="thumbnail"
      >
    </FormItem> -->
    <!-- <FormItem field="author" label="author" required>
      <input
        id="author"
        v-model="aboutData.author"
        type="text"
        placeholder="author"
      >
    </FormItem> -->
    <FormItem field="year" label="year" required>
      <input
        id="year"
        v-model="aboutData.year"
        type="number"
        placeholder="year"
      >
    </FormItem>

    <button type="submit" class="submit">
      Next
    </button>
  </form>
</template>

<style lang="scss" scoped>

</style>
