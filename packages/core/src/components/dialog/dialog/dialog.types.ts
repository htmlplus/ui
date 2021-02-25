export type DialogSize = 'sm' | 'lg' | 'xl';
export type DialogFullscreen = boolean | 'sm-down' | 'md-down' | 'lg-down' | 'xl-down' | 'xxl-down';
export type DialogPlacement = 'start' | 'left' | 'center' | 'right' | 'end' | 'top' | 'bottom' | 'start-top' | 'start-center' | 'start-bottom' | 'left-top' | 'left-center' | 'left-bottom' | 'center-top' | 'center-center' | 'center-bottom' | 'right-top' | 'right-center' | 'right-bottom' | 'end-top' | 'end-center' | 'end-bottom';
export enum DialogPlacementMap {
    'start' = 'start-center',
    'left' = 'left-center',
    'center' = 'center-center',
    'right' = 'right-center',
    'end' = 'end-center',
    'top' = 'center-top',
    'bottom' = 'center-bottom',
    'start-top' = 'start-top',
    'start-center' = 'start-center',
    'start-bottom' = 'start-bottom',
    'left-top' = 'left-top',
    'left-center' = 'left-center',
    'left-bottom' = 'left-bottom',
    'center-top' = 'center-top',
    'center-center' = 'center-center',
    'center-bottom' = 'center-bottom',
    'right-top' = 'right-top',
    'right-center' = 'right-center',
    'right-bottom' = 'right-bottom',
    'end-top' = 'end-top',
    'end-center' = 'end-center',
    'end-bottom' = 'end-bottom',
}
export interface DialogGlobalState {
    instances?: Array<any>;
}