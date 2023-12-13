<!-- eslint-disable vue/max-attributes-per-line -->
<script>
import { mapActions } from 'pinia';

import { login, signup } from '../../dataProviders/auth';
import { useUserStore } from '../../store/userStore';
import Spinner from '../../components/spinner/Spinner.vue';

export default {
  components: { Spinner },
  data() {
    return {
      isLogin: true,
      isLoading: false,
      user: {
        username: '',
        email: '',
        password: '',
      },
      currentSessionToken: '', // computed?
    };
  },
  methods: {
    ...mapActions(useUserStore, ['setProfile']),
    async onSubmit() {
      this.isLoading = true;

      if (this.isLogin) {
        const userData = await login(this.user.username, this.user.password);
        console.log('login', this.user);
        console.log('userData', userData);
        if (userData) {
          this.setProfile(userData);
          this.$router.push('/profile');
        }
        this.isLoading = false;
      }
      else {
        const userData = await signup(this.user.username, this.user.email, this.user.password);
        console.log('signup', this.user);
        /*
        {username: 'dina', email: 'dina@example.com', password: '123456'}
        */
        console.log('userData', userData);
        /* undefined */
        /*
          {
              data: {
                  createdAt: "2023-12-12T01:25:09.433Z",
                  objectId: "2Co4McQYbJ",
                  sessionToken: "r:f09ee1871a8ca7e472ceb046624cc3f1"
              },
              status: 201
          }
        */

        if (userData) {
          useUserStore.setProfile(userData);
          this.$router.push('/profile');
        }
      }

      this.isLoading = false;
    },
    toggleIsLogin() {
      this.isLogin = !this.isLogin;
    },

    async signup() {
      const apiUrl = 'https://parseapi.back4app.com/users';

      try {
        const response = await axios.post(
          apiUrl,
          {
            username: this.user.username,
            email: this.user.email,
            password: this.user.password,
          },
          {
            headers: {
              'X-Parse-Application-Id': 'Zm8xJaH8lMQOAsMPd5VTtDh53EBtPNFE62MdeHVr',
              'X-Parse-REST-API-Key': 'O0LlHeH48pTytyyBz2NFEFGMwjKfSmukFbkjSVdE',
              'X-Parse-Revocable-Session': '1',
              'Content-Type': 'application/json',
            },
          },
        );
        // this.user = response.user;
        console.log('response: ', response);
      }
      catch (error) {
        console.error('Error while signing user up: ', error);
      }
    },
    async login() {
      const apiUrl = 'https://parseapi.back4app.com/login';

      try {
        const response = await axios.get(
          apiUrl,
          {
            username: this.user.username,
            password: this.user.password,
          },
          {
            headers: {
              'X-Parse-Application-Id': 'Zm8xJaH8lMQOAsMPd5VTtDh53EBtPNFE62MdeHVr',
              'X-Parse-REST-API-Key': 'O0LlHeH48pTytyyBz2NFEFGMwjKfSmukFbkjSVdE',
              'X-Parse-Revocable-Session': '1',
            },
          },
        );
        // this.user = response.user;
        console.log('response: ', response);
      }
      catch (error) {
        console.error('Error while logging in user: ', error);
      }
    },
    async logout() {
      const apiUrl = 'https://parseapi.back4app.com/logout';

      try {
        const response = await axios.post(
          apiUrl,
          {},
          {
            headers: {
              'X-Parse-Application-Id': 'Zm8xJaH8lMQOAsMPd5VTtDh53EBtPNFE62MdeHVr',
              'X-Parse-REST-API-Key': 'O0LlHeH48pTytyyBz2NFEFGMwjKfSmukFbkjSVdE',
              'X-Parse-Session-Token': this.currentSessionToken,
            },
          },
        );
        console.log('response: ', response);
        // this.user = response.user; ??? null?
      }
      catch (error) {
        console.error('Error while logging in user: ', error);
      }
    },
  },
};
</script>

<template>
  <section class="container">
    <div class="heading">
      <h2 class="title">
        {{ isLogin ? 'Login' : 'Signup' }}
      </h2>
      <br><br>
      <p class="slogan" @click="toggleIsLogin">
        {{ isLogin ? 'or Register' : 'or Login' }}
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
        <div v-if="!isLogin">
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
            <Spinner v-if="isLoading" />
            <span v-else>{{ isLogin ? 'Login' : 'Sign up' }}</span>
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
