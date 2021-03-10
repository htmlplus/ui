import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import * as Constants from './src/configs/constants';
import { docs } from './scripts/docs';
import { style } from './scripts/style';

import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: Constants.NAMESPACE,
  outputTargets: [
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
    reactOutputTarget({
      componentCorePackage: Constants.PACKAGE_NAME,
      proxiesFile: `${Constants.PORT_PATH}/react/src/components.ts`
    })
  ],
  plugins: [
    sass({
      includePaths: [
        'src/styles/'
      ],
      // injectGlobalPaths: [
      //   'src/styles/mixins/index.scss',
      //   'src/styles/variables/index.scss'
      // ]
    }),
    style()
  ],
  bundles: [
    { components: ['plus-aspect-ratio'] },
    { components: ['plus-card', 'plus-card-body', 'plus-card-footer', 'plus-card-header'] },
    { components: ['plus-click-outside'] },
    { components: ['plus-dialog', 'plus-dialog-body', 'plus-dialog-content', 'plus-dialog-footer', 'plus-dialog-header', 'plus-dialog-toggler'] },
    { components: ['plus-divider'] },
    { components: ['plus-drawer', 'plus-drawer-toggler'] },
    { components: ['plus-grid', 'plus-grid-item'] },
    { components: ['plus-intersection'] },
    { components: ['plus-layout'] },
    { components: ['plus-spinner'] },
    { components: ['plus-switch'] },
    { components: ['plus-tabs', 'plus-tabs-bar', 'plus-tabs-panel', 'plus-tabs-panels', 'plus-tabs-tab'] },
    { components: ['plus-transition'] },
    { components: ['plus-tunnel-consumer'] },
  ]
}
