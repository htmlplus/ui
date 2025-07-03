export type CarouselAlign = 'start' | 'center' | 'end';
export type CarouselAxis = 'x' | 'y';
export type CarouselContainScroll = 'off' | 'keepSnaps' | 'trimSnaps';
/**
 * @value 'free' - Allows momentum-based scrolling without snapping, where the scroll duration depends on the drag gesture’s intensity.
 * @value 'snap' - Allows the carousel to snap to scroll positions when dragged.
 */
export type CarouselDraggable = 'free' | 'snap';
/**
 * @value 'sync-jump'     - Instantly moves the target carousel to match the current slide.
 * @value 'sync-smooth'   - Smoothly scrolls the target carousel to match the current slide.
 * @value 'click-inherit' - Instantly or smoothly jumps the target carousel when a slide is clicked, based on the source slide's clickable property configuration.
 * @value 'click-jump'    - Instantly jumps the target carousel when a slide is clicked.
 * @value 'click-smooth'  - Smoothly scrolls the target carousel when a slide is clicked.
 */
export type CarouselMirrorType = 'sync-jump' | 'sync-smooth' | 'click-inherit' | 'click-jump' | 'click-smooth';
export type CarouselSlidesToScroll = 'auto' | number;
