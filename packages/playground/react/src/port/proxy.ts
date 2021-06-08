import React, { useEffect, useMemo } from 'react';

export interface StyleReactProps {
  class?: string;
  className?: string;
  style?: {
    [key: string]: any
  };
}

type ComponentType<ElementType> = React.FC<InternalProps<ElementType>>;

type ExternalProps<PropType, ElementType> = PropType & Omit<React.HTMLAttributes<ElementType>, 'style'> & StyleReactProps;

type FinalProps<ElementType> = Omit<InternalProps<ElementType>, 'forwardedRef'>;

interface InternalProps<ElementType> extends React.HTMLAttributes<ElementType> {
  forwardedRef: React.RefObject<ElementType>;
  ref?: React.Ref<any>;
}

const dashToPascalCase = (str: string) => {
  return str
    .toLowerCase()
    .split('-')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('');
}

const forwardRef = <PropType, ElementType>(ReactComponent: any) => {

  const forwardRef = (
    props: ExternalProps<PropType, ElementType>,
    ref: React.Ref<ElementType>,
  ) => {

    const { children, ...remainedProps } = props;

    const newProps = {
      ...remainedProps,
      forwardedRef: ref
    }

    return React.createElement(ReactComponent, newProps, children);
  };

  forwardRef.displayName = ReactComponent.displayName;

  return React.forwardRef(forwardRef);
}

export const proxy = <PropType, ElementType>(tagName: string, events: Array<string>) => {

  const exclude = ['children', 'className', 'forwardedRef', 'ref', ...events];

  const ReactComponent: ComponentType<ElementType> = (props: InternalProps<ElementType>) => { // TODO

    const { children, forwardedRef } = props;

    const p: FinalProps<ElementType> = useMemo(() => {

      // const ref = mergeRefs(forwardedRef, this.setComponentElRef);

      const propsToPass = Object.keys(props)
        .filter((key) => !exclude.includes(key))
        .reduce((result: any, key) => { // TODO

          // TODO
          // (acc as any)[key] = (props as any)[key];
          // result[key] = props[key];

          return result;
        }, {});

      const newProps = {
        ...propsToPass,
        // ref,
      };

      return newProps;

    }, [exclude, forwardedRef, props]);

    return React.createElement(tagName, p, children);
  }

  ReactComponent.displayName = dashToPascalCase(tagName);

  return forwardRef<PropType, ElementType>(ReactComponent);
}