export type CropperAspectRatio = number | string;
/**
 * @value 'crop' - Creates a new viewport and allows to move and resize it.
 * @value 'move' - Moves the canvas and viewport.
 * @value 'none' - Do nothing.
 */
export type CropperMode = 'crop' | 'move' | 'none';
/**
 * @value 'both' - Enables to resize the viewport by dragging on the Sides and vertices.
 * @value 'edge' - Enables to resize the viewport by dragging on the vertices.
 * @value 'main' - Enables to resize the viewport by dragging on the Sides.
 */
export type CropperResizer = 'both' | 'edge' | 'main';
/**
 * @value 'circle' - TODO.
 * @value 'line'   - TODO.
 * @value 'square' - TODO.
 */
export type CropperResizerShape = 'circle' | 'line' | 'square';
/**
 * @value false   - TODO.
 * @value true    - TODO.
 * @value 'reset' - Restores the cropped area after resizing the window.
 */
export type CropperResponsive = boolean | 'reset';
/**
 * @value 'circle'    - TODO.
 * @value 'rectangle' - TODO.
 * @value 'square'    - TODO.
 */
export type CropperShape = 'circle' | 'rectangle' | 'square';
/**
 * @value 'contain' - restrict the minimum canvas size to fit within the container. If the
 *                    proportions of the canvas and the container differ, the minimum canvas will be
 *                    surrounded by extra space in one of the dimensions.
 * @value 'cover'   - restrict the minimum canvas size to fill fit the container. If the proportions
 *                    of the canvas and the container are different, the container will not be able
 *                    to fit the whole canvas in one of the dimensions.
 * @value 'fit'     - restrict the viewport to not exceed the size of the canvas.
 * @value 'none'    - no restrictions.
 */
export type CropperView = 'contain' | 'cover' | 'fit' | 'none';
/**
 * @value false   - Unable to zoom the image.
 * @value true    - Enables to zoom the image by touching and wheeling mouse.
 * @value 'touch' - Enables to zoom the image by touching.
 * @value 'wheel' - Enables to zoom the image by wheeling mouse.
 */
export type CropperZoomable = boolean | 'touch' | 'wheel';
export interface CropperValue {
    rotate?: number;
    top?: number;
    left?: number;
    height?: number;
    width?: number;
}
export interface CropperCropEvent {
    rotate: number;
    top: number;
    left: number;
    height: number;
    width: number;
}
export interface CropperPointerEvent {
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
}
export interface CropperZoomEvent {
    difference: number;
    direction: 'IN' | 'OUT';
    /**
     * Original event.
     */
    event: MouseEvent | PointerEvent | TouchEvent | WheelEvent;
    ratio: number;
}
