import App from './App.svelte';

import { defineCustomElements } from '@htmlplus/core/dist/custom-elements/index';

defineCustomElements();

const app = new App({
	target: document.body
});

export default app;