import { createApp } from 'vue';
import App from './App.vue';

import { applyPolyfills, defineCustomElements } from '@htmlplus/vue-original/loader';

applyPolyfills().then(() => defineCustomElements());

createApp(App).mount('#app');
