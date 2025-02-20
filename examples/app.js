const MAPPER = [
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
  ['https://esm.run/', '/node_modules/']
];

const $cdn = document.getElementById('cdn');
const $menu = document.getElementById('menu');
const $preview = document.getElementById('preview');
const $refresh = document.getElementById('refresh');
const $title = document.getElementById('title');

async function getCategories() {
  const result = [];

  const keys = await getKeys();

  for (const key of keys) {
    const [, , componentId, , exampleId] = key.replace('.html', '').split('/');

    const exist = result.some((component) => component.id == componentId);

    if (!exist) {
      result.push({
        id: componentId,
        title: toTitleCase(componentId),
        items: []
      });
    }

    const component = result.find((component) => component.id == componentId);

    component.items.push({
      key,
      title: toTitleCase(exampleId)
    });
  }

  return result;
}

async function getDetails(key) {
  return await fetch('/' + key).then((response) => response.text());
}

async function getKeys() {
  return await fetch('/src/elements/*/examples/*.html').then((response) => response.json());
}

async function load() {
  const categories = await getCategories();

  for (const category of categories) {
    const $div = document.createElement('div');
    $menu.append($div);
    $div.innerHTML = category.title;

    const $ul = document.createElement('ul');
    $menu.append($ul);

    for (const example of category.items) {
      const $li = document.createElement('li');
      $ul.append($li);

      const $a = document.createElement('a');
      $a.href = '#' + example.key;
      $li.append($a);
      $a.innerHTML = example.title;
      $a.addEventListener('click', function (event) {
        select(example.key);
      });
    }
  }

  if (location.hash) {
    select(location.hash.replace('#', ''));
    document.querySelector(`a[href="${location.hash}"]`).scrollIntoView();
  } else {
    select(categories.at(0).items.at(0).key);
  }
}

async function select(key) {
  key ||= $menu.querySelector(`a.active`).getAttribute('href').replace('#', '');

  $menu.querySelector(`a.active`)?.classList?.remove('active');

  $menu.querySelector(`a[href="#${key}"]`)?.classList?.add('active');

  updateTitle(key);

  const iframe = document.createElement('iframe');

  $preview.innerHTML = '';

  $preview.appendChild(iframe);

  let text = await getDetails(key);

  if (!$cdn.classList.contains('active')) {
    MAPPER.forEach(([a, b]) => {
      text = text.replace(new RegExp(a, 'g'), b);
    });
  }

  iframe.srcdoc = text;
}

function toTitleCase(input) {
  return input
    .replace(/-+/g, ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function updateTitle(key) {
  $title.innerHTML = key;
}

$cdn.addEventListener('click', function () {
  $cdn.classList.toggle('active');
  select();
});

$refresh.addEventListener('click', function () {
  select();
});

window.onload = load;
