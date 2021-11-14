export type CropperAspectRatio = number | string;

/**
 * @value crop - Creates a new viewport and allows you to move and resize it.
 * @value move - moves the canvas and viewport.
 */
export type CropperMode = 'crop' | 'move';

/**
 * @value main - Enables to resize the viewport by dragging on the Sides.
 * @value edge - Enables to resize the viewport by dragging on the vertices.
 * @value both - Enables to resize the viewport by dragging on the Sides and vertices.
 */
export type CropperResizer = 'main' | 'edge' | 'both'; // TODO: full, auto

/**
 * @value square - TODO.
 * @value circle - TODO.
 * @value line   - TODO.
 */
export type CropperResizerShape = 'square' | 'circle' | 'line';

/**
 * @value false - TODO.
 * @value true  - TODO.
 * @value reset - Restores the cropped area after resizing the window.
 */
export type CropperResponsive = boolean | 'reset';

/**
 * @value rectangle - TODO.
 * @value square    - TODO.
 * @value circle    - TODO.
 */
export type CropperShape = 'rectangle' | 'square' | 'circle';

/**
 * @value contain - restrict the minimum canvas size to fit within the container. If the
 *                  proportions of the canvas and the container differ, the minimum canvas will be
 *                  surrounded by extra space in one of the dimensions.
 * @value cover   - restrict the minimum canvas size to fill fit the container. If the proportions
 *                  of the canvas and the container are different, the container will not be able
 *                  to fit the whole canvas in one of the dimensions.
 * @value fit     - restrict the viewport to not exceed the size of the canvas.
 * @value none    - no restrictions.
 */
export type CropperView = 'none' | 'fit' | 'contain' | 'cover';

/**
 * @value false - Unable to zoom the image.
 * @value true  - Enables to zoom the image by touching and wheeling mouse.
 * @value touch - Enables to zoom the image by touching.
 * @value wheel - Enables to zoom the image by wheeling mouse.
 */
export type CropperZoomable = boolean | 'touch' | 'wheel';

export interface CropperValue {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  width?: number;
  height?: number;
  x?: number;
  y?: number;
}

export interface CropperZoomData {
  difference?: number;
  direction?: 'in' | 'out';
  ratio?: number;
}