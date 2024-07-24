import { API_DETAILS, API_LIST, MAPPER } from './config';

const $cdn = document.getElementById('cdn');
const $menu = document.getElementById('menu');
const $preview = document.getElementById('preview');
const $refresh = document.getElementById('refresh');
const $title = document.getElementById('title');

let currentKey;

async function getCategories() {
  const result = [];

  const keys = await getKeys();

  for (const key of keys) {
    const [, , componentId, , exampleId] = key.split('/');

    const exist = result.some((component) => component.id == componentId);

    if (!exist) {
      result.push({
        id: componentId,
        title: toTitleCase(componentId),
        items: []
      })
    }

    const component = result.find((component) => component.id == componentId);

    component.items.push({
      key,
      title: toTitleCase(exampleId)
    })
  }

  return result;
}

async function getDetails(key) {
  return await fetch(API_DETAILS + key).then((response) => response.text());
}

async function getKeys() {
  return await fetch(API_LIST).then((response) => response.json());
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
      $a.href = example.key;
      $li.append($a);
      $a.innerHTML = example.title;
      $a.addEventListener('click', function (event) {
        event.preventDefault();
        select(example.key);
      });
    }
  }
}

async function select(key) {
  $menu
    .querySelector(`a[href="${currentKey}"]`)
    ?.classList
    ?.remove('active');

  currentKey = key;

  $menu
    .querySelector(`a[href="${currentKey}"]`)
    ?.classList
    ?.add('active');

  updateTitle();

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
  return input.replace(/-+/g, ' ').split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function updateTitle() {
  $title.innerHTML = currentKey;
}

$cdn.addEventListener('click', function () {
  $cdn.classList.toggle('active');
  select(currentKey);
})

$refresh.addEventListener('click', function () {
  select(currentKey);
})

window.onload = load;
