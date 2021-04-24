import { createLink } from '@app/utils';

export interface ToastLink {
    open?: boolean;
    toggle?: () => void;
}

const initial = {
    open: false,
    toggle: () => undefined,
};

export const { Link, rebind } = createLink<ToastLink>(initial);