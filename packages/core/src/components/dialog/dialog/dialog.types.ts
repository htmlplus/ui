type PlacementX = 'start' | 'left' | 'center' | 'right' | 'end';
type PlacementY = 'top' | 'center' | 'bottom';
export type DialogFullscreen = boolean | 'sm-down' | 'md-down' | 'lg-down' | 'xl-down' | 'xxl-down';
export type DialogPlacement = `${PlacementX}-${PlacementY}` | PlacementX | PlacementY;
export type DialogSize = 'sm' | 'lg' | 'xl';
export interface DialogGlobalState {
    instances?: Array<any>;
}
