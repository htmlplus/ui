export const API_LIST = '/api/examples';
export const API_DETAILS = '/api/examples/';
export const MAPPER = [
  ['https://cdn.skypack.dev/@htmlplus/ui/config.js', '/src/config/index.ts'],
  [
    'https://cdn.skypack.dev/@htmlplus/ui/animation/names/(.*?).js',
    '/src/elements/animation/assets/names/$1.js'
  ],
  ['https://cdn.skypack.dev/@htmlplus/ui/(.*?).js', '/src/elements/$1/$1.tsx'],
  ['https://cdn.skypack.dev/', '/node_modules/']
];
