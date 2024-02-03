export type TooltipDelay = number | [number, number];
export type TooltipOffset = number | [number, number];
export type TooltipPlacement = 'top' | 'top-left' | 'top-right' | 'top-start' | 'top-end' | 'right' | 'right-top' | 'right-bottom' | 'bottom' | 'bottom-left' | 'bottom-right' | 'bottom-start' | 'bottom-end' | 'left' | 'left-top' | 'left-bottom' | 'start' | 'start-top' | 'start-bottom' | 'end' | 'end-top' | 'end-bottom';
export type TooltipReference = Element | 'next' | 'parent' | 'previous' | (string & {});
export type TooltipTrigger = 'click' | 'focus' | 'hover' | 'manual' | Array<TooltipTrigger>;
