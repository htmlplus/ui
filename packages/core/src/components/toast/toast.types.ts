type PlacementX = 'start' | 'left' | 'right' | 'end';
type PlacementY = 'top' | 'bottom';
export type ToastPlacement = `${PlacementY}-${PlacementX}` | PlacementY;
// export type ToastType = 'default' | 'info' | 'success' | 'warning' | 'error';
export interface ToastGlobalState {
    instances?: Array<any>;
}