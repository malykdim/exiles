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
  <div class="box">
    <div class="heading">
      <h2 class="title">
        Guides
      </h2>
      <!-- <Filters :active-item="selectedFilter" @on-select="onFilterSelect" /> -->
      <!-- <Filters /> -->
    </div>
    <Spinner v-if="isLoading" />

    <div v-else class="articles">
      <div class="list">
        <ListItemCard v-for="item in guides" :key="`guides-${item.objectId}`" :item="item" />
        <!-- <ListItemCard /> -->
      </div>
    </div>

    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.box {
  width: 95vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .heading {
    margin-bottom: 0;
    .title {
      font-size: 100px;
      font-weight: 100;
    }
  }
  .articles {
    width: 70vw;
    margin: 0 auto;
    .list {
        // width: 100px;
        display: flex;
        flex-wrap: wrap;
        gap: .5rem;
        align-items: center;
        justify-content: center;

        .topics {
          padding: 1rem 2rem;
          margin-top: 0;
          width: 9.5rem;
        }

    }

  }

}
</style>
