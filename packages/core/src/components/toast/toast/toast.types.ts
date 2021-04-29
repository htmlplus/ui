export type ToastType = 'default' | 'info' | 'success' | 'warning' | 'error';
export interface ToastGlobalState {
    instances?: Array<any>;
}

// TODO: Problem in angular
// type PlacementX = 'start' | 'left' | 'right' | 'end';
// type PlacementY = 'top' | 'bottom';
// export type ToastPlacement = `${PlacementY}-${PlacementX}` | PlacementY;
export type ToastPlacement =
    | 'bottom'
    | 'bottom-start'
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom-end'
    | 'top'
    | 'top-start'
    | 'top-left'
    | 'top-right'
    | 'top-end';
