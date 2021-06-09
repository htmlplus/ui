import React, { useEffect, useMemo, useRef } from 'react';

interface StyleReactProps {
  class?: string;
  className?: string;
  style?: {
    [key: string]: any
  };
}

type Mutable<T> = { -readonly [P in keyof T]-?: T[P] };

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

const mergeRefs = <ElementType>(...refs: React.Ref<ElementType>[]) => (value: ElementType) => {

  return refs.forEach((ref) => {

    if (typeof ref === 'function') return ref(value);

    if (ref == null) return;

    (ref as Mutable<React.RefObject<ElementType>>).current = value;
  })
}

const syncEvent = (
  node: Element & { __events?: { [key: string]: ((e: Event) => any) | undefined } },
  eventName: string,
  newEventHandler?: (event: Event) => any,
) => {

  const eventStore = node.__events || (node.__events = {});

  const oldEventHandler = eventStore[eventName];

  if (oldEventHandler)
    node.removeEventListener(eventName, oldEventHandler);

  eventStore[eventName] = function handler(event: Event) {

    if (!newEventHandler) return;

    newEventHandler.call(this, event);
  }

  node.addEventListener(eventName, eventStore[eventName])
}

const attachProps = (exclude, node: HTMLElement, newProps: any, oldProps: any = {}) => {

  if (!(node instanceof Element)) return;

  // add any classes in className to the class list
  // const className = getClassName(node.classList, newProps, oldProps);

  // if (className !== '') node.className = className;

  Object.keys(newProps).forEach((name) => {

    if (
      name === 'children' ||
      name === 'class' ||
      name === 'className' ||
      name === 'forwardedRef' ||
      name === 'ref' ||
      name === 'style'
    ) return;

    if (exclude.includes(name)) {

      const eventName = name.substring(2);

      const eventNameLc = eventName[0].toLowerCase() + eventName.substring(1);

      syncEvent(node, eventNameLc, newProps[name]);
    }
    else {

      (node as any)[name] = newProps[name];
    }
  })
}

export const proxy = <PropType, ElementType>(tagName: string, events: Array<string> = []) => {

  const exclude = [
    'children',
    'className',
    'forwardedRef',
    'ref',
    ...events.map((event) => 'on' + event[0].toUpperCase() + event.slice(1)) // TODO
  ];

  const ReactComponent: ComponentType<ElementType> = (props: InternalProps<ElementType>) => {

    const { children, forwardedRef } = props;

    const ref = useRef(null);

    const newProps: FinalProps<ElementType> = useMemo(() => {

      const result: any = {
        ref: mergeRefs(forwardedRef, ref)
      };

      Object.keys(props)
        .filter((key) => !exclude.includes(key))
        .forEach((key) => {
          (result as any)[key] = (props as any)[key];
        });

      return result;

    }, [exclude, forwardedRef, props]);

    useEffect(() => {

      // TODO
      const newProps = props;
      const node: any = ref.current;
      attachProps(exclude, node, newProps);
    })

    return React.createElement(tagName, newProps, children);
  }

  ReactComponent.displayName = dashToPascalCase(tagName);

  return forwardRef<PropType, ElementType>(ReactComponent);
}