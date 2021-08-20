/* eslint-disable */
/* tslint:disable */
/* auto-generated react proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusTabs } from '@htmlplus/core/dist/components/plus-tabs';
import { PlusTabsBar } from '@htmlplus/core/dist/components/plus-tabs-bar';
import { PlusTabsPanel } from '@htmlplus/core/dist/components/plus-tabs-panel';
import { PlusTabsPanels } from '@htmlplus/core/dist/components/plus-tabs-panels';
import { PlusTabsTab } from '@htmlplus/core/dist/components/plus-tabs-tab';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-tabs'))
  customElements.define('plus-tabs', PlusTabs);

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-tabs-bar'))
  customElements.define('plus-tabs-bar', PlusTabsBar);

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-tabs-panel'))
  customElements.define('plus-tabs-panel', PlusTabsPanel);

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-tabs-panels'))
  customElements.define('plus-tabs-panels', PlusTabsPanels);

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-tabs-tab'))
  customElements.define('plus-tabs-tab', PlusTabsTab);

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