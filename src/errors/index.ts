export class ExternalDependencyError extends Error {
	constructor(element: HTMLElement, key: string, options?: ErrorOptions) {
		const message = [
			`The "${element.localName}" element depends on an external package, `,
			`but it doesn't seem to be installed. `,
			`Running "npm install ${key}" will fix this problem.`
		].join('');

		super(message, options);

		this.name = 'ExternalDependencyError';

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, ExternalDependencyError);
		}
	}
}

export class NotEmptyPropertyError extends Error {
	constructor(element: HTMLElement, key: string, options?: ErrorOptions) {
		const message = `The "${element.localName}" element has a property named "${key}" that must not be empty.`;

		super(message, options);

		this.name = 'NotEmptyPropertyError';

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, NotEmptyPropertyError);
		}
	}
}
