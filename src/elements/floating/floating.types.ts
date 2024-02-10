export type FloatingOffset =
  | number
  | string
  | [number, number]
  | [number, string]
  | [string, number]
  | [string, string];

export type FloatingPlacement =
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