import { createLink } from '@app/services';

export interface DialogLink {
    open?: boolean;
    toggle?: Function;
}

const initial = {
    open: false,
    toggle: () => undefined
};

export const { Inject, rebind } = createLink<DialogLink>(initial);