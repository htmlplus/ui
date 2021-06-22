/* eslint-disable */
/* tslint:disable */
/* auto-generated react proxies */
import { proxy } from './proxy.old';

import type { JSX } from '@htmlplus/core';

/*
 * Aspect Ratio
 */
export const AspectRatio = /*@__PURE__*/ proxy<JSX.PlusAspectRatio>('plus-aspect-ratio', {
  props: ['value'],
});

/*
 * Breadcrumb
 */
export const Breadcrumb = /*@__PURE__*/ proxy<JSX.PlusBreadcrumb>('plus-breadcrumb', {
  props: ['expanderText', 'max', 'offset', 'separator'],
});

/*
 * Card
 */
export const Card = /*@__PURE__*/ proxy<JSX.PlusCard>('plus-card', {
  props: ['elevation', 'flat', 'outlined', 'tile'],
});

/*
 * Click Outside
 */
export const ClickOutside = /*@__PURE__*/ proxy<JSX.PlusClickOutside>('plus-click-outside', {
  props: ['disabled', 'once'],
  events: ['plusClickOutside'],
});

/*
 * Cropper
 */
export const Cropper = /*@__PURE__*/ proxy<JSX.PlusCropper>('plus-cropper', {
  props: ['area', 'aspectRatio', 'backdrop', 'background', 'disabled', 'guides', 'indicator', 'mode', 'resizer', 'resizerShape', 'responsive', 'shape', 'src', 'value', 'view', 'zoomRatio', 'zoomable'],
  events: ['plusCrop', 'plusReady', 'plusZoom'],
});

/*
 * Dialog
 */
export const Dialog = /*@__PURE__*/ proxy<JSX.PlusDialog>('plus-dialog', {
  props: ['animation', 'backdrop', 'connector', 'fullHeight', 'fullWidth', 'fullscreen', 'keyboard', 'open', 'persistent', 'placement', 'portal', 'portalStrategy', 'portalTarget', 'scrollable', 'size', 'sticky'],
  events: ['plusClose', 'plusClosed', 'plusOpen', 'plusOpened'],
});
export const DialogBody = /*@__PURE__*/ proxy<JSX.PlusDialogBody>('plus-dialog-body', {
  props: ['scrollable'],
});
export const DialogContent = /*@__PURE__*/ proxy<JSX.PlusDialogContent>('plus-dialog-content', {
  props: ['scrollable'],
});
export const DialogFooter = /*@__PURE__*/ proxy<JSX.PlusDialogFooter>('plus-dialog-footer');
export const DialogHeader = /*@__PURE__*/ proxy<JSX.PlusDialogHeader>('plus-dialog-header');
export const DialogToggler = /*@__PURE__*/ proxy<JSX.PlusDialogToggler>('plus-dialog-toggler', {
  props: ['connector'],
});

/*
 * Divider
 */
export const Divider = /*@__PURE__*/ proxy<JSX.PlusDivider>('plus-divider', {
  props: ['size', 'type', 'vertical'],
});

/*
 * Drawer
 */
export const Drawer = /*@__PURE__*/ proxy<JSX.PlusDrawer>('plus-drawer', {
  props: ['animation', 'backdrop', 'breakpoint', 'connector', 'flexible', 'mini', 'miniSize', 'open', 'persistent', 'placement', 'size', 'temporary'],
  events: ['plusClose', 'plusClosed', 'plusOpen', 'plusOpened'],
});
export const DrawerToggler = /*@__PURE__*/ proxy<JSX.PlusDrawerToggler>('plus-drawer-toggler', {
  props: ['connector'],
});

/*
 * Grid
 */
export const Grid = /*@__PURE__*/ proxy<JSX.PlusGrid>('plus-grid', {
  props: ['alignContent', 'alignContentLg', 'alignContentMd', 'alignContentSm', 'alignContentXl', 'alignContentXs', 'alignContentXxl', 'alignItems', 'alignItemsLg', 'alignItemsMd', 'alignItemsSm', 'alignItemsXl', 'alignItemsXs', 'alignItemsXxl', 'gutter', 'gutterX', 'gutterY', 'justifyContent', 'justifyContentLg', 'justifyContentMd', 'justifyContentSm', 'justifyContentXl', 'justifyContentXs', 'justifyContentXxl', 'reverse', 'vertical', 'wrap', 'wrapLg', 'wrapMd', 'wrapSm', 'wrapXl', 'wrapXs', 'wrapXxl'],
});
export const GridItem = /*@__PURE__*/ proxy<JSX.PlusGridItem>('plus-grid-item', {
  props: ['alignSelf', 'alignSelfLg', 'alignSelfMd', 'alignSelfSm', 'alignSelfXl', 'alignSelfXs', 'alignSelfXxl', 'hide', 'hideLg', 'hideLgDown', 'hideLgUp', 'hideMd', 'hideMdDown', 'hideMdUp', 'hideSm', 'hideSmDown', 'hideSmUp', 'hideXl', 'hideXlDown', 'hideXlUp', 'hideXs', 'hideXxl', 'hideXxlDown', 'lg', 'md', 'offsetLg', 'offsetMd', 'offsetSm', 'offsetXl', 'offsetXs', 'offsetXxl', 'orderLg', 'orderMd', 'orderSm', 'orderXl', 'orderXs', 'orderXxl', 'sm', 'xl', 'xs', 'xxl'],
});

/*
 * Icon
 */
export const Icon = /*@__PURE__*/ proxy<JSX.PlusIcon>('plus-icon', {
  props: ['color', 'flip', 'name', 'rotate', 'size'],
});

/*
 * Intersection
 */
export const Intersection = /*@__PURE__*/ proxy<JSX.PlusIntersection>('plus-intersection', {
  props: ['behavior', 'disabled', 'once', 'root', 'rootMargin', 'threshold'],
  events: ['plusChange'],
});

/*
 * Portal
 */
export const Portal = /*@__PURE__*/ proxy<JSX.PlusPortal>('plus-portal', {
  props: ['disabled', 'strategy', 'target'],
});

/*
 * Scroll Indicator
 */
export const ScrollIndicator = /*@__PURE__*/ proxy<JSX.PlusScrollIndicator>('plus-scroll-indicator', {
  props: ['disabled', 'source'],
  events: ['plusScroll'],
});

/*
 * Spinner
 */
export const Spinner = /*@__PURE__*/ proxy<JSX.PlusSpinner>('plus-spinner', {
  props: ['size', 'type'],
});

/*
 * Sticky
 */
export const Sticky = /*@__PURE__*/ proxy<JSX.PlusSticky>('plus-sticky', {
  props: ['disabled', 'top', 'watcher', 'zIndex'],
  events: ['plusChange'],
});

/*
 * Tabs
 */
export const Tabs = /*@__PURE__*/ proxy<JSX.PlusTabs>('plus-tabs', {
  props: ['connector', 'value', 'vertical'],
  events: ['plusChange'],
});
export const TabsBar = /*@__PURE__*/ proxy<JSX.PlusTabsBar>('plus-tabs-bar', {
  props: ['grow', 'justify', 'reverse'],
});
export const TabsPanel = /*@__PURE__*/ proxy<JSX.PlusTabsPanel>('plus-tabs-panel', {
  props: ['value'],
});
export const TabsPanels = /*@__PURE__*/ proxy<JSX.PlusTabsPanels>('plus-tabs-panels', {
  props: ['connector'],
});
export const TabsTab = /*@__PURE__*/ proxy<JSX.PlusTabsTab>('plus-tabs-tab', {
  props: ['disabled', 'value'],
});

/*
 * Toast
 */
export const Toast = /*@__PURE__*/ proxy<JSX.PlusToast>('plus-toast', {
  props: ['animation', 'connector', 'duration', 'fullWidth', 'open', 'persistent', 'placement', 'reverse', 'type'],
  events: ['plusClose', 'plusClosed', 'plusOpen', 'plusOpened'],
});

/*
 * Tooltip
 */
export const Tooltip = /*@__PURE__*/ proxy<JSX.PlusTooltip>('plus-tooltip', {
  props: ['animation', 'appendTo', 'arrow', 'delay', 'disabled', 'fixed', 'flip', 'placement', 'trigger'],
});

/*
 * Transition
 */
export const Transition = /*@__PURE__*/ proxy<JSX.PlusTransition>('plus-transition', {
  props: ['delay', 'direction', 'duration', 'name', 'repeat'],
  events: ['plusCancel', 'plusEnd', 'plusIteration', 'plusStart'],
});