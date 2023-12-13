import { createApp } from 'vue';
import { createPinia } from 'pinia';

import router from '../src/router/router.js';
import App from './App.vue';
import './style.css';

import { useUserStore } from './store/userStore.js';

import Auth from './views/auth/Auth.vue';
import NotFound from './components/wildcards/NotFound.vue';
import Spinner from './components/spinner/Spinner.vue';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

const userStore = useUserStore();
userStore.getUser();

app.component('Auth', Auth)
    .component('NotFound', NotFound)
    .component('Spinner', Spinner);

app.mount('#app');
