import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import * as Constants from './src/configs/constants';
import { docs } from './scripts/docs';
import { style } from './scripts/style';

// TODO
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: Constants.NAMESPACE,
  devServer: {
    port: 3000
  },
  outputTargets: [

    // TODO
    vueOutputTarget({
      componentCorePackage: '@htmlplus/core',
      proxiesFile: '../ports/vue-original/src/components.ts',
      componentModels: [],
    }),
    {
      type: 'www',
      serviceWorker: null
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'dist-custom-elements-bundle'
    },
    {
      type: 'custom',
      name: 'custom-docs',
      generator: docs('./dist/docs.json') as any
    },
  ],
  plugins: [
    sass({
      includePaths: [
        'src/styles/'
      ],
      injectGlobalPaths: [
        'src/styles/mixins/index.scss',
        'src/styles/variables/index.scss'
      ]
    }),
    style()
  ],
  bundles: [
    { components: ['plus-aspect-ratio'] },
    // { components: ['plus-bottom-navigation', 'plus-bottom-navigation-item'] },
    { components: ['plus-breadcrumb'] },
    { components: ['plus-card', 'plus-card-body', 'plus-card-footer', 'plus-card-header'] },
    { components: ['plus-click-outside'] },
    { components: ['plus-cropper'] },
    { components: ['plus-dialog', 'plus-dialog-body', 'plus-dialog-content', 'plus-dialog-footer', 'plus-dialog-header', 'plus-dialog-toggler'] },
    { components: ['plus-divider'] },
    { components: ['plus-drawer', 'plus-drawer-toggler'] },
    { components: ['plus-grid', 'plus-grid-item'] },
    { components: ['plus-icon'] },
    { components: ['plus-intersection'] },
    // { components: ['plus-menu'] },
    { components: ['plus-portal'] },
    // { components: ['plus-ripple'] },
    { components: ['plus-scroll-indicator'] },
    { components: ['plus-spinner'] },
    { components: ['plus-sticky'] },
    // { components: ['plus-switch'] },
    { components: ['plus-tabs', 'plus-tabs-bar', 'plus-tabs-panel', 'plus-tabs-panels', 'plus-tabs-tab'] },
    { components: ['plus-toast', 'plus-toast-toggler'] },
    // { components: ['plus-toolbar'] },
    { components: ['plus-tooltip'] },
    { components: ['plus-transition'] },
  ]
}
