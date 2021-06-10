/* eslint-disable */
/* tslint:disable */
/* auto-generated react proxies */
import { proxy } from './proxy';

import type { JSX } from '@htmlplus/core';

/*
 * Aspect ratio
 */
export const AspectRatio = /*@__PURE__*/ proxy<HTMLPlusAspectRatioElement, JSX.PlusAspectRatio>('plus-aspect-ratio', []);

/*
 * Breadcrumb
 */
export const Breadcrumb = /*@__PURE__*/ proxy<HTMLPlusBreadcrumbElement, JSX.PlusBreadcrumb>('plus-breadcrumb', []);

/*
 * Card
 */
export const Card = /*@__PURE__*/ proxy<HTMLPlusCardElement, JSX.PlusCard>('plus-card', []);

/*
 * Click outside
 */
export const ClickOutside = /*@__PURE__*/ proxy<HTMLPlusClickOutsideElement, JSX.PlusClickOutside>('plus-click-outside', ['plusClickoutside']);

/*
 * Cropper
 */
export const Cropper = /*@__PURE__*/ proxy<HTMLPlusCropperElement, JSX.PlusCropper>('plus-cropper', ['plusCrop', 'plusReady', 'plusZoom']);

/*
 * Dialog
 */
const _Dialog = /*@__PURE__*/ proxy<HTMLPlusDialogElement, JSX.PlusDialog>('plus-dialog', ['plusClose', 'plusClosed', 'plusOpen', 'plusOpened']);
const _DialogBody = /*@__PURE__*/ proxy<HTMLPlusDialogBodyElement, JSX.PlusDialogBody>('plus-dialog-body', []);
const _DialogContent = /*@__PURE__*/ proxy<HTMLPlusDialogContentElement, JSX.PlusDialogContent>('plus-dialog-content', []);
const _DialogFooter = /*@__PURE__*/ proxy<HTMLPlusDialogFooterElement, JSX.PlusDialogFooter>('plus-dialog-footer', []);
const _DialogHeader = /*@__PURE__*/ proxy<HTMLPlusDialogHeaderElement, JSX.PlusDialogHeader>('plus-dialog-header', []);
const _DialogToggler = /*@__PURE__*/ proxy<HTMLPlusDialogTogglerElement, JSX.PlusDialogToggler>('plus-dialog-toggler', []);
type DialogType = typeof _Dialog & {
  Body: typeof _DialogBody;
  Content: typeof _DialogContent;
  Footer: typeof _DialogFooter;
  Header: typeof _DialogHeader;
  Toggler: typeof _DialogToggler;
}
(_Dialog as DialogType).Body = _DialogBody;
(_Dialog as DialogType).Content = _DialogContent;
(_Dialog as DialogType).Footer = _DialogFooter;
(_Dialog as DialogType).Header = _DialogHeader;
(_Dialog as DialogType).Toggler = _DialogToggler;
export const Dialog = /*@__PURE__*/ _Dialog as DialogType

/*
 * Divider
 */
export const Divider = /*@__PURE__*/ proxy<HTMLPlusDividerElement, JSX.PlusDivider>('plus-divider', []);

/*
 * Drawer
 */
const _Drawer = /*@__PURE__*/ proxy<HTMLPlusDrawerElement, JSX.PlusDrawer>('plus-drawer', ['plusClose', 'plusClosed', 'plusOpen', 'plusOpened']);
const _DrawerToggler = /*@__PURE__*/ proxy<HTMLPlusDrawerTogglerElement, JSX.PlusDrawerToggler>('plus-drawer-toggler', []);
type DrawerType = typeof _Drawer & {
  Toggler: typeof _DrawerToggler;
}
(_Drawer as DrawerType).Toggler = _DrawerToggler;
export const Drawer = /*@__PURE__*/ _Drawer as DrawerType

/*
 * Grid
 */
const _Grid = /*@__PURE__*/ proxy<HTMLPlusGridElement, JSX.PlusGrid>('plus-grid', []);
const _GridItem = /*@__PURE__*/ proxy<HTMLPlusGridItemElement, JSX.PlusGridItem>('plus-grid-item', []);
type GridType = typeof _Grid & {
  Item: typeof _GridItem;
}
(_Grid as GridType).Item = _GridItem;
export const Grid = /*@__PURE__*/ _Grid as GridType

/*
 * Icon
 */
export const Icon = /*@__PURE__*/ proxy<HTMLPlusIconElement, JSX.PlusIcon>('plus-icon', []);

/*
 * Intersection
 */
export const Intersection = /*@__PURE__*/ proxy<HTMLPlusIntersectionElement, JSX.PlusIntersection>('plus-intersection', ['plusChange']);

/*
 * Portal
 */
export const Portal = /*@__PURE__*/ proxy<HTMLPlusPortalElement, JSX.PlusPortal>('plus-portal', []);

/*
 * Scroll indicator
 */
export const ScrollIndicator = /*@__PURE__*/ proxy<HTMLPlusScrollIndicatorElement, JSX.PlusScrollIndicator>('plus-scroll-indicator', ['plusScroll']);

/*
 * Spinner
 */
export const Spinner = /*@__PURE__*/ proxy<HTMLPlusSpinnerElement, JSX.PlusSpinner>('plus-spinner', []);

/*
 * Sticky
 */
export const Sticky = /*@__PURE__*/ proxy<HTMLPlusStickyElement, JSX.PlusSticky>('plus-sticky', ['plusChange']);

/*
 * Tabs
 */
const _Tabs = /*@__PURE__*/ proxy<HTMLPlusTabsElement, JSX.PlusTabs>('plus-tabs', ['plusChange']);
const _TabsBar = /*@__PURE__*/ proxy<HTMLPlusTabsBarElement, JSX.PlusTabsBar>('plus-tabs-bar', []);
const _TabsPanel = /*@__PURE__*/ proxy<HTMLPlusTabsPanelElement, JSX.PlusTabsPanel>('plus-tabs-panel', []);
const _TabsPanels = /*@__PURE__*/ proxy<HTMLPlusTabsPanelsElement, JSX.PlusTabsPanels>('plus-tabs-panels', []);
const _TabsTab = /*@__PURE__*/ proxy<HTMLPlusTabsTabElement, JSX.PlusTabsTab>('plus-tabs-tab', []);
type TabsType = typeof _Tabs & {
  Bar: typeof _TabsBar;
  Panel: typeof _TabsPanel;
  Panels: typeof _TabsPanels;
  Tab: typeof _TabsTab;
}
(_Tabs as TabsType).Bar = _TabsBar;
(_Tabs as TabsType).Panel = _TabsPanel;
(_Tabs as TabsType).Panels = _TabsPanels;
(_Tabs as TabsType).Tab = _TabsTab;
export const Tabs = /*@__PURE__*/ _Tabs as TabsType

/*
 * Toast
 */
export const Toast = /*@__PURE__*/ proxy<HTMLPlusToastElement, JSX.PlusToast>('plus-toast', ['plusClose', 'plusClosed', 'plusOpen', 'plusOpened']);

/*
 * Tooltip
 */
export const Tooltip = /*@__PURE__*/ proxy<HTMLPlusTooltipElement, JSX.PlusTooltip>('plus-tooltip', []);

/*
 * Transition
 */
export const Transition = /*@__PURE__*/ proxy<HTMLPlusTransitionElement, JSX.PlusTransition>('plus-transition', ['plusCancel', 'plusEnd', 'plusIteration', 'plusStart']);