import { createLink } from '@app/utils';

export interface DialogLink {
    open?: boolean;
    toggle?: () => void;
}

const initial = {
    open: false,
    toggle: () => undefined,
};

export const { Link, rebind } = createLink<DialogLink>(initial);