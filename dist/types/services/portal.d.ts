export type PortalStrategy = 'before' | 'prepend' | 'append' | 'after';
export type PortalSource = Node | Array<Node>;
export type PortalTarget = string | Node;
export interface PortalOptions {
    source?: PortalSource;
    target?: PortalTarget;
    strategy?: PortalStrategy;
}
export declare class Portal {
    private options;
    private keys;
    constructor(options: PortalOptions);
    get source(): Node[];
    get strategy(): PortalStrategy;
    get target(): Node;
    private init;
    revert(): void;
}
