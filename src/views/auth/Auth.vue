<!-- eslint-disable vue/max-attributes-per-line -->
<script>
import { mapActions } from 'pinia';
import { useUserStore } from '../../store/userStore';
import { login } from '../../dataProviders/auth';
import Spinner from '../../components/spinner/Spinner.vue';

export default {
  components: { Spinner },
  data() {
    return {
      isLoading: false,
      user: {
        username: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions(useUserStore, ['setProfile']),
    async onSubmit() {
      this.isLoading = true;

      const userData = await login(this.user);
      console.log('userData', userData);
      if (userData) {
        this.setProfile(userData);
        this.$router.push('/profile');
      }

      this.isLoading = false;
    },
  },
};
</script>

<template>
  <section class="container">
    <div class="heading">
      <h2 class="title">
        Auth
      </h2>
      <br><br>
      <p class="slogan">
        form
      </p>
    </div>
    <article class="auth">
      <form class="form" @submit.prevent="onSubmit">
        <!-- replace required with Vuelidate -->
        <div>
          <label for="username">username</label>
          <input
            id="username"
            v-model.trim="user.username"
            type="text"
            required
            :disabled="isLoading"
          >
        </div>
        <div>
          <label for="email">email</label>
          <input
            id="email"
            v-model.trim="user.email"
            type="text"
            required
            :disabled="isLoading"
          >
        </div>
        <div>
          <label for="password">password</label>
          <input
            id="password"
            v-model.trim="user.password"
            type="password"
            required
            :disabled="isLoading"
          >
        </div>
        <div>
          <button :disabled="isLoading">
            <span v-if="isLoading">
              <Spinner />
            </span>
            <span v-else>Sign up</span>
          </button>
        </div>
      </form>
    </article>
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

  .auth {
    max-width: 80%;
    margin: 0 auto;
    text-align: center;
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
