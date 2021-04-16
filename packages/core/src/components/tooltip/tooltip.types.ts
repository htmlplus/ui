// Placement
type PlacementMain = 'auto' | 'top' | 'right' | 'bottom' | 'left';
type PlacementDirection = 'start' | 'end';
export type TooltipPlacement = `${PlacementMain}-${PlacementDirection}` | PlacementMain;

// Trigger
export type TooltipTrigger = 'click' | 'focus' | 'hover' | Array<TooltipTrigger>;
// Animation
export type TooltipAnimation =
  'shift-toward'
  | 'shift-toward-subtle'
  | 'shift-toward-extreme'
  | 'shift-away'
  | 'shift-away-subtle'
  | 'shift-away-extreme'
  | 'scale'
  | 'scale-subtle'
  | 'scale-extreme'
  | 'perspective'
  | 'perspective-subtle'
  | 'perspective-extreme'
  | 'fade';
// Arrow
export type TooltipArrow = 'default' | 'round' | 'large' | 'small' | 'wide' | 'narrow';