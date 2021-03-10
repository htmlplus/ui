export type CropDragMode = 'crop' | 'move' | 'none';
export type CropViewMode = 0 | 1 | 2 | 3;
export interface CropData {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    rotate?: number;
    scaleX?: number;
    scaleY?: number;
}