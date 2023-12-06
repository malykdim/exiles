<script>
export default {

};
</script>

<template>
  <section class="container">
    <div class="heading">
      <h2 class="title">
        Page not found
      </h2>
      <h2 class="title">
        404
      </h2>
      <br>
      <p class="slogan">
        We haven't found what you were looking for.
      </p>
      <p class="slogan">
        Perhaps the page is not created yet.
      </p>
      <p class="slogan">
        Please feel free to create it.
      </p>
      <router-link to="/auth">
        <button class="login">
          LOGIN
        </button>
      </router-link>
      <br><br><br><br>
      <p class="slogan">
        Or continue exploring the EXILES Hub
      </p>
      <router-link to="/hub">
        <button class="back">
          HUB
        </button>
      </router-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
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
</style>
