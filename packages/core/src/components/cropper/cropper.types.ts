export type CropperAspectRatio = string | number;
export type CropperDragMode = 'crop' | 'move' | 'none';
export type CropperViewMode = 0 | 1 | 2 | 3;
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

export interface CrroperZoomData {
    difference?: number,
    direction?: 'IN' | 'OUT',
    ratio?: number
}