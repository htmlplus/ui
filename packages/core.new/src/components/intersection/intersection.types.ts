/**
 * @value normal - It doesn't have any effect on its children and the life cycles happen normally.
 * @value appear - The children are removed from the first moment, and then they're brought back in when the element intersects with the viewport. In other words, the children are added to the DOM when the element intersects with the viewport and they are removed when the element leaves the viewport.
 * @value blink  - The children are removed from the DOM when the element intersects with the viewport and are brought back in the DOM immediately. With that said, it affects the life cycles of its children.
 */
export type IntersectionBehavior = 'blink' | 'normal' | 'appear';