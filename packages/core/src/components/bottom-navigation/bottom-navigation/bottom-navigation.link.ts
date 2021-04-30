import { createLink } from '@app/utils';

export interface BottomNavigationLink {
    grow?: boolean;
    labelPosition?: string;
    shift?: boolean;
    value?: any;
    change?: (value: string) => void;
}

const initial = {
    grow: false,
    labelPosition: 'bottom',
    shift: false,
    value: undefined,
    change: () => undefined,
}

export const { Link, rebind } = createLink<BottomNavigationLink>(initial);