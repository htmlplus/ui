export type CropperMode = 'crop' | 'move';
export type CropperResizer = 'main' | 'edge' | 'both'; // TODO: full, auto
export type CropperResizerShape = 'square' | 'circle' | 'line';
export type CropperResponsive = boolean | 'reset';
export type CropperShape = 'rectangle' | 'square' | 'circle';
export type CropperView = 'none' | 'fit' | 'contain' | 'cover';
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