// Placement
type PlacementMain = 'auto' | 'top' | 'right' | 'bottom' | 'left';
type PlacementDirection = 'start' | 'end';
export type TooltipPlacement = `${PlacementMain}-${PlacementDirection}` | PlacementMain;

// Trigger
export type TooltipTrigger = 'click' | 'focus' | 'hover' | Array<TooltipTrigger>;