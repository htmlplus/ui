type LayoutTopKeys = 'aside' | 'slot' |'header';
type LayoutBottomKeys = 'aside' | 'slot' |'footer';
export type LayoutTop = `${LayoutTopKeys}-${LayoutTopKeys}` | LayoutTopKeys;
export type LayoutBottom = `${LayoutBottomKeys}-${LayoutBottomKeys}` | LayoutBottomKeys;
export type LayoutMain = 'stretch' | 'center';