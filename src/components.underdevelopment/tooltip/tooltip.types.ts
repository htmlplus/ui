export type TooltipDelay = number | [number, number];

export type TooltipOffset = number | [number, number];

export type TooltipPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end';

export type TooltipTrigger = 'click' | 'focus' | 'hover' | 'manual' | Array<TooltipTrigger>;
