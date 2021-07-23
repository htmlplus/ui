import { createApp } from 'vue';
import App from './App.vue';

import { applyPolyfills, defineCustomElements } from '@htmlplus/vue/loader';

applyPolyfills().then(() => defineCustomElements());

createApp(App).mount('#app');
