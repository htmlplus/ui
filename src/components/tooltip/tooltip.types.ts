export type TooltipDelay = number | [number, number];

export type TooltipOffset = number | [number, number];

export type TooltipPlacement =
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'top'
  | 'top-start'
  | 'top-end';

export type TooltipReference = 'next' | 'parent' | 'previous' | Element | (string & {});

export type TooltipTrigger = 'click' | 'focus' | 'hover' | 'manual' | Array<TooltipTrigger>;
