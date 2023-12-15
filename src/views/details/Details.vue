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
    <!-- <h4>Details</h4> -->
    <Spinner v-if="isLoading" />
    <article v-else class="item">
      <h4 class="title">
        {{ item.title }}
      </h4>
      <h6 class="author">
        by: <strong>{{ item.author }}</strong>
      </h6>
      <div>
        <img :src="item.thumbnail" :alt="item.title">
      </div><br><br>
      <div>
        <p class="content">
          {{ item.content }}
        </p>
      </div><br>
      <h6 class="map">
        map: {{ item.map }}
      </h6>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.item {
  max-width: 60rem;
  margin: 0 auto;

  .title {
    font-family: 'Noto Serif', serif;
    font-size: 100px;
    font-weight: 100;
  }
  .map {
    font-size: 1.2em;
    font-weight: 100;
  }
  .author {
    font-size: 1.5em;
    font-weight: 100;
  }
  .content {
    letter-spacing: .1em;
    text-align: justify;
    padding: 2rem;
  }
}
</style>
