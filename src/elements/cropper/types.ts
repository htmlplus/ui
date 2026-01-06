export type PlusCropperValue = {
	rotate?: number;
	top?: number;
	left?: number;
	height?: number;
	width?: number;
};

export type PlusCropperCropEvent = {
	rotate: number;
	top: number;
	left: number;
	height: number;
	width: number;
};

export type PlusCropperPointerEvent = {
	/**
	 * 'crop': Create a new viewport.
	 * 'move': Move the image.
	 * 'zoom': Zoom in/out the image by touch.
	 * 'e'   : Resize the east side of the viewport.
	 * 'w'   : Resize the west side of the viewport.
	 * 's'   : Resize the south side of the viewport.
	 * 'n'   : Resize the north side of the viewport.
	 * 'se'  : Resize the southeast side of the viewport.
	 * 'sw'  : Resize the southwest side of the viewport.
	 * 'ne'  : Resize the northeast side of the viewport.
	 * 'nw'  : Resize the northwest side of the viewport.
	 * 'all' : Move the viewport.
	 */
	action: 'crop' | 'move' | 'zoom' | 'e' | 's' | 'w' | 'n' | 'ne' | 'nw' | 'se' | 'sw' | 'all';
	/**
	 * Original event.
	 */
	event: MouseEvent | PointerEvent | TouchEvent;
};

export type PlusCropperZoomEvent = {
	difference: number;
	direction: 'IN' | 'OUT';
	/**
	 * Original event.
	 */
	event: MouseEvent | PointerEvent | TouchEvent | WheelEvent;
	ratio: number;
};
