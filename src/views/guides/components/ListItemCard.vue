<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
      default: () => ({
        id: -1,
        title: 'Title',
        content: 'Lorem ipsum dolor sit amet consectetur',
        rating: 0,
        author: 'author',
        categories: 'category tags',
        image: '/public/vite.svg',
        thumbnail: '../../../public/vite.svg',
      }),
    },
  },
  data() {
    return {

    };
  },
};
</script>

<template>
  <article class="list-item-card">
    <div class="img-wrapper">
      <img :src="item.thumbnail" alt="image placeholder" class="img">
    </div>
    <br>
    <h4 class="title">
      {{ item.title }}
    </h4>
    <p class="category">
      {{ item.categories }}
    </p>
    <h6 class="author">
      {{ item.author }}
    </h6>
    <!-- <span class="rating">rating: <strong>{{ item.rating }}</strong></span><br><br> -->
    <button class="navigate">
      Have a look =)
    </button>
  </article>
</template>

<style lang="scss" scoped>
.list-item-card {
    .img-wrapper {
        .img {
            width: 100%;
            height: 100%;
            // display: block;
        }
    }
    .title {
        font-family: 'Noto Serif', serif;
    }
    .category {
        letter-spacing: .6em;
    }
    .author {
        font-family: 'Noto Serif', serif;
    }
    .rating {
        font-family: 'Noto Serif', serif;
    }
    .navigate {
        font-family: 'Noto Serif', serif;
    }
}
</style>
