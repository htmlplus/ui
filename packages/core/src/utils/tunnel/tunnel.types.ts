import { ComponentInterface, FunctionalComponent } from '@stencil/core';

export type Props = Array<string>;

export type SubscribeType = (instance: ComponentInterface, props: Props) => () => void;

export type ConsumerRenderer = (subscribe: SubscribeType, renderer: Function) => any;

export type ConsumerType = FunctionalComponent<{}>;

export type ProviderType<T> = FunctionalComponent<{ state: T, scope?: ComponentInterface, disabled?: boolean }>;
