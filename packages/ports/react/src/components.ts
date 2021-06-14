/* eslint-disable */
/* tslint:disable */
/* auto-generated react proxies */
import { proxy } from './proxy';

import type { JSX } from '@htmlplus/core';

/*
 * Aspect Ratio
 */
export const AspectRatio = /*@__PURE__*/ proxy<HTMLPlusAspectRatioElement, JSX.PlusAspectRatio>('plus-aspect-ratio', ['value'], []);

/*
 * Breadcrumb
 */
export const Breadcrumb = /*@__PURE__*/ proxy<HTMLPlusBreadcrumbElement, JSX.PlusBreadcrumb>('plus-breadcrumb', ['expanderText', 'max', 'offset', 'separator'], []);

/*
 * Card
 */
export const Card = /*@__PURE__*/ proxy<HTMLPlusCardElement, JSX.PlusCard>('plus-card', ['elevation', 'flat', 'outlined', 'tile'], []);

/*
 * Click Outside
 */
export const ClickOutside = /*@__PURE__*/ proxy<HTMLPlusClickOutsideElement, JSX.PlusClickOutside>('plus-click-outside', ['disabled', 'once'], ['plusClickOutside']);

/*
 * Cropper
 */
export const Cropper = /*@__PURE__*/ proxy<HTMLPlusCropperElement, JSX.PlusCropper>('plus-cropper', ['area', 'aspectRatio', 'backdrop', 'background', 'disabled', 'guides', 'indicator', 'mode', 'resizer', 'resizerShape', 'responsive', 'shape', 'src', 'value', 'view', 'zoomRatio', 'zoomable'], ['plusCrop', 'plusReady', 'plusZoom']);

/*
 * Dialog
 */
const DialogBase = /*@__PURE__*/ proxy<HTMLPlusDialogElement, JSX.PlusDialog>('plus-dialog', ['animation', 'backdrop', 'connector', 'fullHeight', 'fullWidth', 'fullscreen', 'keyboard', 'open', 'persistent', 'placement', 'portal', 'portalStrategy', 'portalTarget', 'scrollable', 'size', 'sticky'], ['plusClose', 'plusClosed', 'plusOpen', 'plusOpened']);
const DialogBody = /*@__PURE__*/ proxy<HTMLPlusDialogBodyElement, JSX.PlusDialogBody>('plus-dialog-body', ['scrollable'], []);
const DialogContent = /*@__PURE__*/ proxy<HTMLPlusDialogContentElement, JSX.PlusDialogContent>('plus-dialog-content', ['scrollable'], []);
const DialogFooter = /*@__PURE__*/ proxy<HTMLPlusDialogFooterElement, JSX.PlusDialogFooter>('plus-dialog-footer', [], []);
const DialogHeader = /*@__PURE__*/ proxy<HTMLPlusDialogHeaderElement, JSX.PlusDialogHeader>('plus-dialog-header', [], []);
const DialogToggler = /*@__PURE__*/ proxy<HTMLPlusDialogTogglerElement, JSX.PlusDialogToggler>('plus-dialog-toggler', ['connector'], []);
export const Dialog = /*@__PURE__*/ Object.assign(DialogBase, {
  Body: DialogBody,
  Content: DialogContent,
  Footer: DialogFooter,
  Header: DialogHeader,
  Toggler: DialogToggler,
});

/*
 * Divider
 */
export const Divider = /*@__PURE__*/ proxy<HTMLPlusDividerElement, JSX.PlusDivider>('plus-divider', ['size', 'type', 'vertical'], []);

/*
 * Drawer
 */
const DrawerBase = /*@__PURE__*/ proxy<HTMLPlusDrawerElement, JSX.PlusDrawer>('plus-drawer', ['animation', 'backdrop', 'breakpoint', 'connector', 'flexible', 'mini', 'miniSize', 'open', 'persistent', 'placement', 'size', 'temporary'], ['plusClose', 'plusClosed', 'plusOpen', 'plusOpened']);
const DrawerToggler = /*@__PURE__*/ proxy<HTMLPlusDrawerTogglerElement, JSX.PlusDrawerToggler>('plus-drawer-toggler', ['connector'], []);
export const Drawer = /*@__PURE__*/ Object.assign(DrawerBase, {
  Toggler: DrawerToggler,
});

/*
 * Grid
 */
const GridBase = /*@__PURE__*/ proxy<HTMLPlusGridElement, JSX.PlusGrid>('plus-grid', ['alignContent', 'alignContentLg', 'alignContentMd', 'alignContentSm', 'alignContentXl', 'alignContentXs', 'alignContentXxl', 'alignItems', 'alignItemsLg', 'alignItemsMd', 'alignItemsSm', 'alignItemsXl', 'alignItemsXs', 'alignItemsXxl', 'gutter', 'gutterX', 'gutterY', 'justifyContent', 'justifyContentLg', 'justifyContentMd', 'justifyContentSm', 'justifyContentXl', 'justifyContentXs', 'justifyContentXxl', 'reverse', 'vertical', 'wrap', 'wrapLg', 'wrapMd', 'wrapSm', 'wrapXl', 'wrapXs', 'wrapXxl'], []);
const GridItem = /*@__PURE__*/ proxy<HTMLPlusGridItemElement, JSX.PlusGridItem>('plus-grid-item', ['alignSelf', 'alignSelfLg', 'alignSelfMd', 'alignSelfSm', 'alignSelfXl', 'alignSelfXs', 'alignSelfXxl', 'hide', 'hideLg', 'hideLgDown', 'hideLgUp', 'hideMd', 'hideMdDown', 'hideMdUp', 'hideSm', 'hideSmDown', 'hideSmUp', 'hideXl', 'hideXlDown', 'hideXlUp', 'hideXs', 'hideXxl', 'hideXxlDown', 'lg', 'md', 'offsetLg', 'offsetMd', 'offsetSm', 'offsetXl', 'offsetXs', 'offsetXxl', 'orderLg', 'orderMd', 'orderSm', 'orderXl', 'orderXs', 'orderXxl', 'sm', 'xl', 'xs', 'xxl'], []);
export const Grid = /*@__PURE__*/ Object.assign(GridBase, {
  Item: GridItem,
});

/*
 * Icon
 */
export const Icon = /*@__PURE__*/ proxy<HTMLPlusIconElement, JSX.PlusIcon>('plus-icon', ['color', 'flip', 'name', 'rotate', 'size'], []);

/*
 * Intersection
 */
export const Intersection = /*@__PURE__*/ proxy<HTMLPlusIntersectionElement, JSX.PlusIntersection>('plus-intersection', ['behavior', 'disabled', 'once', 'root', 'rootMargin', 'threshold'], ['plusChange']);

/*
 * Portal
 */
export const Portal = /*@__PURE__*/ proxy<HTMLPlusPortalElement, JSX.PlusPortal>('plus-portal', ['disabled', 'strategy', 'target'], []);

/*
 * Scroll Indicator
 */
export const ScrollIndicator = /*@__PURE__*/ proxy<HTMLPlusScrollIndicatorElement, JSX.PlusScrollIndicator>('plus-scroll-indicator', ['disabled', 'source'], ['plusScroll']);

/*
 * Spinner
 */
export const Spinner = /*@__PURE__*/ proxy<HTMLPlusSpinnerElement, JSX.PlusSpinner>('plus-spinner', ['size', 'type'], []);

/*
 * Sticky
 */
export const Sticky = /*@__PURE__*/ proxy<HTMLPlusStickyElement, JSX.PlusSticky>('plus-sticky', ['disabled', 'top', 'watcher', 'zIndex'], ['plusChange']);

/*
 * Tabs
 */
const TabsBase = /*@__PURE__*/ proxy<HTMLPlusTabsElement, JSX.PlusTabs>('plus-tabs', ['connector', 'value', 'vertical'], ['plusChange']);
const TabsBar = /*@__PURE__*/ proxy<HTMLPlusTabsBarElement, JSX.PlusTabsBar>('plus-tabs-bar', ['grow', 'justify', 'reverse'], []);
const TabsPanel = /*@__PURE__*/ proxy<HTMLPlusTabsPanelElement, JSX.PlusTabsPanel>('plus-tabs-panel', ['value'], []);
const TabsPanels = /*@__PURE__*/ proxy<HTMLPlusTabsPanelsElement, JSX.PlusTabsPanels>('plus-tabs-panels', ['connector'], []);
const TabsTab = /*@__PURE__*/ proxy<HTMLPlusTabsTabElement, JSX.PlusTabsTab>('plus-tabs-tab', ['disabled', 'value'], []);
export const Tabs = /*@__PURE__*/ Object.assign(TabsBase, {
  Bar: TabsBar,
  Panel: TabsPanel,
  Panels: TabsPanels,
  Tab: TabsTab,
});

/*
 * Toast
 */
export const Toast = /*@__PURE__*/ proxy<HTMLPlusToastElement, JSX.PlusToast>('plus-toast', ['animation', 'connector', 'duration', 'fullWidth', 'open', 'persistent', 'placement', 'reverse', 'type'], ['plusClose', 'plusClosed', 'plusOpen', 'plusOpened']);

/*
 * Tooltip
 */
export const Tooltip = /*@__PURE__*/ proxy<HTMLPlusTooltipElement, JSX.PlusTooltip>('plus-tooltip', ['animation', 'appendTo', 'arrow', 'delay', 'disabled', 'fixed', 'flip', 'placement', 'trigger'], []);

/*
 * Transition
 */
export const Transition = /*@__PURE__*/ proxy<HTMLPlusTransitionElement, JSX.PlusTransition>('plus-transition', ['delay', 'direction', 'duration', 'name', 'repeat'], ['plusCancel', 'plusEnd', 'plusIteration', 'plusStart']);