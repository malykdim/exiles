import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Parse from 'parse/dist/parse.min.js';
import router from '../src/router/router.js';
import './style.css';
import App from './App.vue';
import Auth from './views/auth/Auth.vue';
import NotFound from './components/wildcards/NotFound.vue';
import Spinner from './components/spinner/Spinner.vue';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.component('Auth', Auth)
    .component('NotFound', NotFound)
    .component('Spinner', Spinner);

const PARSE_APP_ID = 'Zm8xJaH8lMQOAsMPd5VTtDh53EBtPNFE62MdeHVr';
const PARSE_JS_KEY = 'lcLnTPRGhnzAtGSoMoo3j4IqbpXk46HRgGXVuyr7';

Parse.initialize(PARSE_APP_ID, PARSE_JS_KEY);
Parse.serverURL = '<https://parseapi.back4app.com>';

app.mount('#app');
