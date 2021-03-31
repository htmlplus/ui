export type CropperAspectRatio = string | number;
export type CropperMode = 'crop' | 'move' | 'none';
export type CropperResizer = 'main' | 'edge' | 'both';
export type CropperResizerShape = 'square' | 'circle' | 'line';
export type CropperResponsive = boolean | 'reset';
export type CropperView = 'none' | 'fit' | 'contain' | 'cover';
export type CropperViewport = 'static' | 'movable' | 'resizable' | 'both';
export type CropperViewportShape = 'rectangle' | 'square' | 'circle';
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
    difference?: number,
    direction?: 'in' | 'out',
    ratio?: number
}