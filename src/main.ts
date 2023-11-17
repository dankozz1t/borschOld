import { createApp } from 'vue';
import { router } from './router/router.ts';

import './assets/styles/style.scss';

import App from './App.vue';

const app = createApp(App);
app.use(router);
app.mount('#app');
