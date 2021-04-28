import { createApp } from 'vue';
import App from './App.vue';

import { applyPolyfills, defineCustomElements } from '@htmlplus/core/loader';

// Vue.config.ignoredElements = [/$plus-\w*/];

applyPolyfills().then(() => defineCustomElements());

createApp(App).mount('#app');
