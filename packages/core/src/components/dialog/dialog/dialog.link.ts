import { createLink } from '@app/utils';
import { DialogState } from './dialog.types';

export interface DialogLink {
    state?: DialogState;
    toggle?: Function;
}

const initial = {
    state: 'closed' as DialogState,
    toggle: () => undefined
};

export const { Link, rebind } = createLink<DialogLink>(initial);