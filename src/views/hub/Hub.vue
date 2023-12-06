<script>
// import { guides } from '../../constants/guides.js';
import Articles from './components/Articles.vue';
import Categories from './components/Categories.vue';

export default {
  components: { Categories, Articles },
  data() {
    return {
      selectedCategory: '',
      guides: [],
    };
  },
  methods: {
    filter(category) {
      this.selectedCategory = category;
    },
    onSelect(selected) {
      this.selectedCategory = selected;
      // this.$router.push({ path: '/guides' });
    },
  },
};
</script>

<template>
  <section class="container">
    <div class="heading">
      <h2 class="title">
        Hub
      </h2>
      <br><br>
      <h4 class="slogan">
        CATEGORIES
      </h4>
      <br>
      <Categories :active-item="selectedCategory" @on-select="onSelect" />

      <br><br>
      <h4 class="slogan">
        GUIDES
      </h4>
      <br>
      <Articles />
      <!-- <p>TODO: Search maybe?</p>

      <p>TODO: Most Viewed Articles / Authors</p>

      <p>TODO: News section ?</p> -->

      <button class="redirect">
        Browse
      </button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  .heading {
    margin-bottom: 5rem;
    .title {
      font-size: 100px;
      font-weight: 100;
    }
    .slogan {
      font-size: 24px;
      font-weight: 200;
    }
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    max-width: 100vw;

    .hero {
      height: 600px;
      width: 70%;
      background-image: linear-gradient(to bottom, transparent, transparent), url('../../assets/2.jpg');
      background-color: transparent;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .cta {
      text-align: center;
      font-size: larger;
      max-width: 20%;
    }
  }

}
</style>
