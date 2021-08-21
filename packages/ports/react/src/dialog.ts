/* eslint-disable */
/* tslint:disable */
/* auto-generated react proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusDialog } from '@htmlplus/core/dist/components/plus-dialog';
import { PlusDialogBody } from '@htmlplus/core/dist/components/plus-dialog-body';
import { PlusDialogContent } from '@htmlplus/core/dist/components/plus-dialog-content';
import { PlusDialogFooter } from '@htmlplus/core/dist/components/plus-dialog-footer';
import { PlusDialogHeader } from '@htmlplus/core/dist/components/plus-dialog-header';
import { PlusDialogToggler } from '@htmlplus/core/dist/components/plus-dialog-toggler';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-dialog'))
  customElements.define('plus-dialog', PlusDialog);

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-dialog-body'))
  customElements.define('plus-dialog-body', PlusDialogBody);

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-dialog-content'))
  customElements.define('plus-dialog-content', PlusDialogContent);

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-dialog-footer'))
  customElements.define('plus-dialog-footer', PlusDialogFooter);

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-dialog-header'))
  customElements.define('plus-dialog-header', PlusDialogHeader);

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-dialog-toggler'))
  customElements.define('plus-dialog-toggler', PlusDialogToggler);

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