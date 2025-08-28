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

		const exist = result.some((component) => component.id === componentId);

		if (!exist) {
			result.push({
				id: componentId,
				title: toTitleCase(componentId),
				items: []
			});
		}

		const component = result.find((component) => component.id === componentId);

		component.items.push({
			key,
			title: toTitleCase(exampleId)
		});
	}

	return result;
}

async function getKeys() {
	return await fetch('/src/elements/*/examples/*.html')
		.then((response) => response.json())
		.then((keys) => keys.sort((a, b) => a.localeCompare(b)));
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
			$a.href = `#${example.key}`;
			$li.append($a);
			$a.innerHTML = example.title;
			$a.addEventListener('click', () => {
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

	iframe.src = `/${key}${$cdn.classList.contains('active') ? '?cdn' : '?local'}`;

	$preview.innerHTML = '';

	$preview.appendChild(iframe);
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

$cdn.addEventListener('click', () => {
	$cdn.classList.toggle('active');
	select();
});

$refresh.addEventListener('click', () => {
	select();
});

window.onload = load;
