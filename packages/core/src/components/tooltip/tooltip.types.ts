// Placement
type Placement = 'top' | 'right' | 'bottom' | 'left';
type PlacementPosition = 'start' | 'end';
export type TooltipPlacement = `${Placement}-${PlacementPosition}` | Placement;
// Trigger
export type TooltipTrigger = 'mouseover' | 'click';
// Offset
type OffsetX = number;
type OffsetY = number;
export type TooltipOffset = [number, number] | `${OffsetX}-${OffsetY}`| OffsetX;
