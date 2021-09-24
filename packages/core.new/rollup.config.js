import multi from '@rollup/plugin-multi-entry';
import typescript from '@rollup/plugin-typescript';
import { glob } from 'glob';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve'
import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import { htmlplus } from './transformer/rollup.plugin';

const dev = !!process.env.ROLLUP_WATCH;

export default {
  // input: glob.sync('./src/components/*/*.tsx').slice(0, 1),
  input: [
    './src/components/aspect-ratio/aspect-ratio.tsx',
    './src/components/bottom-navigation-item/bottom-navigation-item.tsx',
    './src/components/bottom-navigation/bottom-navigation.tsx',
    './src/components/browse/browse.tsx',
    './src/components/card-body/card-body.tsx',
    './src/components/card-footer/card-footer.tsx',
    './src/components/card-header/card-header.tsx',
    './src/components/card/card.tsx',
    './src/components/click-outside/click-outside.tsx',
    './src/components/cropper/cropper.tsx',
    './src/components/dialog-body/dialog-body.tsx',
    './src/components/dialog-content/dialog-content.tsx',
    './src/components/dialog-footer/dialog-footer.tsx',
    './src/components/dialog-header/dialog-header.tsx',
    './src/components/dialog-toggler/dialog-toggler.tsx',
    './src/components/dialog/dialog.tsx',
    './src/components/divider/divider.tsx',
    './src/components/drawer-toggler/drawer-toggler.tsx',
    './src/components/drawer/drawer.tsx',
    './src/components/grid-item/grid-item.tsx',
    './src/components/grid/grid.tsx',
    './src/components/icon/icon.tsx',
    './src/components/intersection/intersection.tsx',
    './src/components/menu/menu.tsx',
    './src/components/portal/portal.tsx',
    './src/components/ripple/ripple.tsx',
    './src/components/scroll-indicator/scroll-indicator.tsx',
    './src/components/spinner/spinner.tsx',
    './src/components/sticky/sticky.tsx',
    './src/components/switch/switch.tsx',
    './src/components/tabs-bar/tabs-bar.tsx',
    './src/components/tabs-panel/tabs-panel.tsx',
    './src/components/tabs-panels/tabs-panels.tsx',
    './src/components/tabs-tab/tabs-tab.tsx',
    './src/components/tabs/tabs.tsx',
    './src/components/template/template.tsx',
    './src/components/toast-toggler/toast-toggler.tsx',
    './src/components/toast/toast.tsx',
    './src/components/toolbar-spacer/toolbar-spacer.tsx',
    './src/components/toolbar/toolbar.tsx',
    './src/components/tooltip/tooltip.tsx',
    './src/components/transition/transition.tsx',
  ],
  output: [
    dev && {
      format: 'esm',
      dir: 'public/build',
      sourcemap: true,
    },
    !dev && {
      format: 'esm',
      dir: 'dist/esm',
    },
    // !dev && {
    //   format: 'cjs',
    //   dir: 'dist/cjs',
    //   exports: 'default'
    // },
    // !dev && {
    //   format: 'umd',
    //   dir: 'dist/umd',
    //   name: 'htmlplus',
    // }
  ],
  plugins: [

    // Merge all files as one
    dev && multi({
      exports: false,
      entryFileName: 'bundle.js'
    }),

    // Convert .tsx files to svelte syntax
    htmlplus({
      prefix: 'plus',
      docs: dev && {
        docs: 'json/docs.json',
        vscode: 'json/html.html-data.json',
      },
    }),

    // Parse converted files
    svelte({
      dev: dev,
      customElement: true,
      extensions: ['.svelte', '.tsx'],
      preprocess: sveltePreprocess({
        sourceMap: dev,
        scss: {
          includePaths: [
            './src/styles'
          ]
        }
      })
    }),

    resolve({
      browser: true
    }),
    commonjs(),

    // Transpile all ts fies
    typescript({
      sourceMap: dev,
      inlineSources: dev,
      // declaration: !dev,
      // declarationDir: 'dist/types',
    }),

    // Serve in development mode
    dev && serve({
      open: true,
      contentBase: 'public',
    }),

    // Minify all files in production
    // !dev && terser()
  ]
}