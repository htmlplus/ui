// Placement
type Placement = 'top' | 'right' | 'bottom' | 'left' | 'auto';

type HorizontalPlacement = 'right' | 'left';
type VerticalPlacement = 'top' | 'bottom';

type PlacementHorizontalPosition = 'top' | 'bottom';
type PlacementVerticalPosition = 'start' | 'end';

export type TooltipPlacement = `${HorizontalPlacement}-${PlacementHorizontalPosition}` | `${VerticalPlacement}-${PlacementVerticalPosition}` | Placement;

export type TooltipReturnPlacement = `${Placement}-${PlacementVerticalPosition}` | Placement;
// Trigger
export type TooltipTrigger = 'hover' | 'focus' | Array<TooltipTrigger>;

// var a: TooltipPlacement = ''