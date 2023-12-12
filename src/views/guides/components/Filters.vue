<script>
// deleted import of a json file: /constants/guides.js and deleted the file all togethr
export default {
  props: {
    activeItem: {
      type: String,
      required: true,
    },
  },
  emits: ['onSelect'],
  data() {
    return {
      // guides,
    };
  },
  methods: {
    onSelect(selected) {
      const val = this.activeItem === selected ? '' : selected;
      this.$emit('onSelect', val);
    },
  },
};
</script>

<template>
  <div class="categories">
    <!-- <article
      v-for="item in guides"
      :key="item.id"
      class="topics"
      :class="[activeItem === cat.value ? 'topics primary' : 'topics secondary outline']"
      @click="onSelect(item.id)"
    >
      {{ item.categories }}
    </article> -->
    <article>
      sth
    </article>
  </div>
</template>

<style lang="scss" scoped>
    .categories {
        display: flex;
        flex-wrap: wrap;
        gap: .5rem;

        .topics {
            padding: 1rem 2rem;
            margin-top: 0;
            width: 9.5rem;
        }
    }
</style>
