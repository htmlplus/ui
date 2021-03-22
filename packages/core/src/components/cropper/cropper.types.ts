export type CropperAspectRatio = string | number;
export type CropperMode = 'crop' | 'move' | 'none';            
export type CropperResizer = 'main' | 'edge' | 'both';
export type CropperResizerShape = 'round' | 'rect' | 'line';
export type CropperResponsive = boolean | 'reset';
export type CropperView = 'none' | 'fit' | 'contain' | 'cover';
export type CropperViewport = 'rect' | 'round';
export type CropperViewportMode = 'static' | 'movable' | 'resizable' | 'both';
export type CropperZoomable = boolean | 'touch' | 'wheel';
export interface CropperData {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    rotate?: number;
    scaleX?: number;
    scaleY?: number;
}
export interface CropperZoomData {
    difference?: number,
    direction?: 'IN' | 'OUT',
    ratio?: number
}