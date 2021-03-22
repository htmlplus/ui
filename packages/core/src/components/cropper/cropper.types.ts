export type CropperAspectRatio = string | number;
export type CropperResponsive = boolean | 'reset';                         // TODO: maybe
export type CropperMode = 'crop' | 'move' | 'none';                        // TODO
export type CropperView = 'none' | 'fit' | 'contain' | 'cover';            // TODO
export type CropperViewport = 'rect' | 'round';
export type CropperViewport1 = 'static' | 'movable' | 'resizable' | 'both';
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