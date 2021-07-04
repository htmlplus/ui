import { createApp } from 'vue';
import App from './App.vue';

import { applyPolyfills, defineCustomElements } from '@htmlplus/vue/loader';

// TODO
applyPolyfills().then(() => {

  const options = {
    ce: (eventName, options) => new CustomEvent(eventName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(), options)
  }

  defineCustomElements(window, options);
});

createApp(App).mount('#app');
