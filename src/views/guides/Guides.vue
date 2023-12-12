<script>
import useGuidesStore from '../../store/guidesStore.js';
import { getAllGuides } from '../../dataProviders/guides.js';

// import Filters from './components/Filters.vue';
import Spinner from '../../components/spinner/Spinner.vue';
import ListItemCard from './components/ListItemCard.vue';

export default {
  components: { ListItemCard, Spinner },
  setup() {
    const guidesStore = useGuidesStore();
    return { guidesStore };
  },
  data() {
    return {
      guides: [],
      isLoading: true,
      // selectedCategory: '',
    };
  },
  async created() {
    this.guides = await getAllGuides();
    this.isLoading = false;
    // selected() {
    //   if (this.selectedCategory === '') {
    //     return this.guides;
    //   }

    //   return this.guides.filter(item => item.categories === this.selectedCategory);
    // },
  },
  mounted() {
    console.log(this.guidesStore.guides);
  },
  methods: {
    // filter(category) {
    //   this.selectedCategory = category;
    // },
    // onSelect(selected) {
    //   this.selectedCategory = selected;
    //   // this.$router.push({ path: '/guides' });
    // },
    // onFilterSelect(selected) {
    //   this.selectedFilter = selected;
    // },
    update() {
      this.guidesStore.updateGguides([{ title: 'eco' }]);
    },
  },
};
</script>

<template>
  <section class="container">
    <div class="heading">
      <h2 class="title">
        Guides
      </h2>
      <br><br>
      <!-- <Filters :active-item="selectedFilter" @on-select="onFilterSelect" /> -->
      <!-- <Filters /> -->
      <br><br>

      <Spinner v-if="isLoading" />

      <div v-else class="articles">
        <div class="list">
          <ListItemCard v-for="item in guides" :key="`guides-${item.objectId}`" :item="item" />
          <!-- <ListItemCard /> -->
        </div>
      </div>
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
    .categories {
      // width: 100px;
      display: flex;
      flex-wrap: wrap;
      gap: .5rem;
      .topics {
        padding: 1rem 2rem;
        margin-top: 0;
        width: 9.5rem;
      }
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
