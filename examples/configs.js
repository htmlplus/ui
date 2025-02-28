export const MAPPER = [
  ['https://esm.run/@htmlplus/ui/config.js', '/src/config/index.ts'],
  [
    'https://esm.run/@faker-js/faker/locale/ja',
    '/node_modules/@faker-js/faker/dist/esm/locale/ja.mjs'
  ],
  [
    'https://esm.run/@htmlplus/ui/animation/names/(.*?).js',
    '/src/elements/animation/assets/names/$1.js'
  ],
  ['https://esm.run/@htmlplus/ui/(.*?).js', '/src/elements/$1/$1.tsx'],
  ['https://esm.run/', '']
];
