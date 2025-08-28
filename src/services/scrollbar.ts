// TODO: add dynamic target like html, body, ...
// biome-ignore-all lint: TODO
export class Scrollbar {
	static keys = new Set<any>();

	static style = {};

	static get width() {
		const div = document.createElement('div');

		div.style.position = 'absolute';
		div.style.top = '-9999px';
		div.style.width = '50px';
		div.style.height = '50px';
		div.style.overflow = 'scroll';

		document.body.appendChild(div);

		const width = div.getBoundingClientRect().width - div.clientWidth;

		document.body.removeChild(div);

		return width;
	}

	static remove(key: any) {
		Scrollbar.keys.add(key);

		if (Scrollbar.keys.size > 1) return;

		const rect = document.body.getBoundingClientRect();

		const isOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;

		if (!isOverflowing) return;

		const dir = window
			.getComputedStyle(window.document.body)
			.getPropertyValue('direction')
			.toLowerCase();

		const property = dir == 'rtl' ? 'paddingLeft' : 'paddingRight';

		Scrollbar.style = {
			overflow: document.body.style.overflow,
			[property]: document.body.style[property]
		};

		document.body.style.overflow = 'hidden';

		const scrollbarWidth = Scrollbar.width;

		document.body.style[property] = `${scrollbarWidth}px`;
	}

	static reset(key: any) {
		Scrollbar.keys.delete(key);

		if (Scrollbar.keys.size) return;

		const keys = Object.keys(Scrollbar.style);

		for (const key of keys) document.body.style[key] = Scrollbar.style[key];

		Scrollbar.style = {};
	}
}
