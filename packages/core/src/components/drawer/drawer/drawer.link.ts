import { createLink } from '@app/utils';

export interface DrawerLink {
    open?: boolean;
    toggle?: Function;
}

const initial = {
    open: false,
    toggle: () => undefined
};

export const { Link, rebind } = createLink<DrawerLink>(initial);