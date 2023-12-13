<script>
import { getSingleGuide } from '../../dataProviders/guides.js';

export default {
  data() {
    return {
      item: {},
      isLoading: true,
    };
  },
  async created() {
    console.log(this.$route.params.id); // ok
    const response = await getSingleGuide(this.$route.params.id);
    this.item = response;
    console.log(this.item); // ok
    this.isLoading = false;
  },
};
</script>

<template>
  <div>
    <h4>Details</h4>
    <Spinner v-if="isLoading" />
    <article v-else class="item">
      <h4>{{ item.title }}</h4>
      <p>{{ item.map }}</p>
      <div>
        <img :src="item.thumbnail" :alt="item.title">
      </div><br>
      <div>
        <p>{{ item.content }}</p>
      </div>
      <h6>{{ item.author }}</h6>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.item {
  max-width: 60rem;
  margin: 0 auto;
}
</style>
