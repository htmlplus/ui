/* eslint-disable */
/* tslint:disable */
/* auto-generated react proxies */
import { proxy } from './proxy';

import type { JSX } from '@htmlplus/core';

/*
 * Aspect Ratio
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
 * Click Outside
 */
export const ClickOutside = /*@__PURE__*/ proxy<HTMLPlusClickOutsideElement, JSX.PlusClickOutside>('plus-click-outside', ['plusClickOutside']);

/*
 * Cropper
 */
export const Cropper = /*@__PURE__*/ proxy<HTMLPlusCropperElement, JSX.PlusCropper>('plus-cropper', ['plusCrop', 'plusReady', 'plusZoom']);

/*
 * Dialog
 */
const DialogBase = /*@__PURE__*/ proxy<HTMLPlusDialogElement, JSX.PlusDialog>('plus-dialog', ['plusClose', 'plusClosed', 'plusOpen', 'plusOpened']);
const DialogBody = /*@__PURE__*/ proxy<HTMLPlusDialogBodyElement, JSX.PlusDialogBody>('plus-dialog-body', []);
const DialogContent = /*@__PURE__*/ proxy<HTMLPlusDialogContentElement, JSX.PlusDialogContent>('plus-dialog-content', []);
const DialogFooter = /*@__PURE__*/ proxy<HTMLPlusDialogFooterElement, JSX.PlusDialogFooter>('plus-dialog-footer', []);
const DialogHeader = /*@__PURE__*/ proxy<HTMLPlusDialogHeaderElement, JSX.PlusDialogHeader>('plus-dialog-header', []);
const DialogToggler = /*@__PURE__*/ proxy<HTMLPlusDialogTogglerElement, JSX.PlusDialogToggler>('plus-dialog-toggler', []);
type DialogType = typeof DialogBase & {
  Body: typeof DialogBody;
  Content: typeof DialogContent;
  Footer: typeof DialogFooter;
  Header: typeof DialogHeader;
  Toggler: typeof DialogToggler;
}
(DialogBase as DialogType).Body = DialogBody;
(DialogBase as DialogType).Content = DialogContent;
(DialogBase as DialogType).Footer = DialogFooter;
(DialogBase as DialogType).Header = DialogHeader;
(DialogBase as DialogType).Toggler = DialogToggler;
export const Dialog = /*@__PURE__*/ DialogBase as DialogType;

/*
 * Divider
 */
export const Divider = /*@__PURE__*/ proxy<HTMLPlusDividerElement, JSX.PlusDivider>('plus-divider', []);

/*
 * Drawer
 */
const DrawerBase = /*@__PURE__*/ proxy<HTMLPlusDrawerElement, JSX.PlusDrawer>('plus-drawer', ['plusClose', 'plusClosed', 'plusOpen', 'plusOpened']);
const DrawerToggler = /*@__PURE__*/ proxy<HTMLPlusDrawerTogglerElement, JSX.PlusDrawerToggler>('plus-drawer-toggler', []);
type DrawerType = typeof DrawerBase & {
  Toggler: typeof DrawerToggler;
}
(DrawerBase as DrawerType).Toggler = DrawerToggler;
export const Drawer = /*@__PURE__*/ DrawerBase as DrawerType;

/*
 * Grid
 */
const GridBase = /*@__PURE__*/ proxy<HTMLPlusGridElement, JSX.PlusGrid>('plus-grid', []);
const GridItem = /*@__PURE__*/ proxy<HTMLPlusGridItemElement, JSX.PlusGridItem>('plus-grid-item', []);
type GridType = typeof GridBase & {
  Item: typeof GridItem;
}
(GridBase as GridType).Item = GridItem;
export const Grid = /*@__PURE__*/ GridBase as GridType;

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
 * Scroll Indicator
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
const TabsBase = /*@__PURE__*/ proxy<HTMLPlusTabsElement, JSX.PlusTabs>('plus-tabs', ['plusChange']);
const TabsBar = /*@__PURE__*/ proxy<HTMLPlusTabsBarElement, JSX.PlusTabsBar>('plus-tabs-bar', []);
const TabsPanel = /*@__PURE__*/ proxy<HTMLPlusTabsPanelElement, JSX.PlusTabsPanel>('plus-tabs-panel', []);
const TabsPanels = /*@__PURE__*/ proxy<HTMLPlusTabsPanelsElement, JSX.PlusTabsPanels>('plus-tabs-panels', []);
const TabsTab = /*@__PURE__*/ proxy<HTMLPlusTabsTabElement, JSX.PlusTabsTab>('plus-tabs-tab', []);
type TabsType = typeof TabsBase & {
  Bar: typeof TabsBar;
  Panel: typeof TabsPanel;
  Panels: typeof TabsPanels;
  Tab: typeof TabsTab;
}
(TabsBase as TabsType).Bar = TabsBar;
(TabsBase as TabsType).Panel = TabsPanel;
(TabsBase as TabsType).Panels = TabsPanels;
(TabsBase as TabsType).Tab = TabsTab;
export const Tabs = /*@__PURE__*/ TabsBase as TabsType;

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