import { PortalStrategy, PortalTarget } from '@app/utils';

export type DialogPortalTarget = PortalTarget;
export type DialogPortalStrategy = PortalStrategy;
export type DialogFullscreen = boolean | 'sm-down' | 'md-down' | 'lg-down' | 'xl-down' | 'xxl-down';
export type DialogSize = 'sm' | 'lg' | 'xl';
export interface DialogGlobalState {
  instances?: Array<any>;
}

// TODO: Problem in angular
// type PlacementX = 'start' | 'left' | 'center' | 'right' | 'end';
// type PlacementY = 'top' | 'center' | 'bottom';
// export type DialogPlacement = `${PlacementX}-${PlacementY}` | PlacementX | PlacementY;
export type DialogPlacement =
  | 'bottom'
  | 'center'
  | 'center-bottom'
  | 'center-center'
  | 'center-top'
  | 'end'
  | 'end-bottom'
  | 'end-center'
  | 'end-top'
  | 'left'
  | 'left-bottom'
  | 'left-center'
  | 'left-top'
  | 'right'
  | 'right-bottom'
  | 'right-center'
  | 'right-top'
  | 'start'
  | 'start-bottom'
  | 'start-center'
  | 'start-top'
  | 'top';
