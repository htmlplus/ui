import { createLink } from '@app/services';

export interface DrawerLink {
    open?: boolean;
    toggle?: Function;
}

const initial = {
    open: false,
    toggle: () => undefined
};

export const { Inject, rebind } = createLink<DrawerLink>(initial);