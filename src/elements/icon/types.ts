export type PlusIconResolver = (params: { name: string }) => Promise<string>;
export type PlusIconSize =
	| 'xs'
	| 'sm'
	| 'md'
	| 'lg'
	| 'xl'
	| '1x'
	| '2x'
	| '3x'
	| '4x'
	| '5x'
	| '6x'
	| '7x'
	| '8x'
	| '9x'
	| (number & {})
	| (string & {});
