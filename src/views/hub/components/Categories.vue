<script>
import { hubCategories } from '../../../constants/hub-categories';

// import { getAllCategories } from '../../../dataProviders/back4app.js';

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
      hubCategories,
      isLoading: true,
    };
  },
  // async created() {
  //   this.hubCategories = await getAllCategories();
  //   this.isLoading = false;
  // },
  methods: {
    onSelect(selected) {
      this.$emit('onSelect', selected);
      // this.$router.push({ path: '/guides' });
    },
  },
};
</script>

<template>
  <ul role="list" class="categories">
    <li v-for="item in hubCategories" :key="item.value" class="item">
      <article :class=" [activeItem === item.value ? 'primary article' : 'secondary outline article']" @click="onSelect(item.name)">
        <!-- <article class="article"> -->
        <div class="img-container">
          <img :src="item.img" alt="img" class="img">
        </div><br>
        <h4 class="item-title">
          {{ item.name }}
        </h4>
        <p class="description">
          {{ item.description }}
        </p>
        <button class="redirect" @click="onSelect(item.value)">
          Browse
        </button>
      </article>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
    .categories {
      list-style-type: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      .item {
        list-style: none;

        .article {
          padding: 2rem 3rem;

          .img-container {
            width: 350px;
            height: 200px;

            .img {
              width: 100%;
              height: 100%;
            }
          }
        }

        .primary {
          background-color: #d9c7c7;
        }
      }
    }
</style>
