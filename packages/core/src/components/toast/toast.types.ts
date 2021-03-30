type PlacementX = 'start' | 'left' | 'center' | 'right' | 'end';
type PlacementY = 'top' | 'bottom';
export type ToastPlacement = `${PlacementY}-${PlacementX}`;
export type ToastType = 'default' | 'info' | 'success' | 'warning' | 'error';