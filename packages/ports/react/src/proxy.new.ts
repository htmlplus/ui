import React, { useEffect, useMemo, useRef } from 'react';

export interface StyleReactProps {
  class?: string;
  className?: string;
  style?: {
    [key: string]: any
  };
}

type Mutable<T> = { -readonly [P in keyof T]-?: T[P] };

type EventHandlerType = (event: Event) => any;

type ExternalPropsType<ElementType, PropType> = PropType & Omit<React.HTMLAttributes<ElementType>, 'style'> & StyleReactProps;

type FinalPropsType<ElementType> = Omit<InternalPropsType<ElementType>, 'forwardedRef'>;

interface InternalPropsType<ElementType> extends React.HTMLAttributes<ElementType> {
  forwardedRef: React.RefObject<ElementType>;
  ref?: React.Ref<any>;
}

const attachEvent = (element: Element, name: string, handler: EventHandlerType) => {

  const events = element['$events'] || (element['$events'] = {});

  const previous = events[name];

  previous && element.removeEventListener(name, previous);

  events[name] = function callback(event: Event) {
    handler && handler.call(this, event);
  }

  element.addEventListener(name, events[name])
}

const dashToPascalCase = (string: string) => {
  return string
    .toLowerCase()
    .split('-')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('');
}

const propToEvent = (name: string) => {
  return name[2].toLowerCase() + name.substring(3);
}

const forwardRef = <ElementType, PropType>(ReactComponent: any) => {

  const forwardRef = (
    props: ExternalPropsType<ElementType, PropType>,
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

const getProps = <ElementType>(ref: React.Ref<ElementType>, props: InternalPropsType<ElementType>, events: Array<string>) => {

  const { forwardedRef } = props;

  const result: FinalPropsType<ElementType> = {
    ref: mergeRefs(forwardedRef, ref)
  };

  Object.keys(props).forEach((name) => {

    if (
      name === 'children' ||
      name === 'className' ||
      name === 'forwardedRef' ||
      name === 'ref'
    ) return;

    const isEvent = events.includes(propToEvent(name));

    if (isEvent) return;

    (result as any)[name] = (props as any)[name];
  });

  return result;
}

const setProps = <ElementType>(element: ElementType, props: InternalPropsType<ElementType>, events: Array<string>) => {

  if (!(element instanceof Element)) return;

  // TODO
  // add any classes in className to the class list
  // const className = getClassName(node.classList, newProps, oldProps);
  // if (className !== '') node.className = className;

  Object.keys(props).forEach((name) => {

    if (
      name === 'children' ||
      name === 'class' ||
      name === 'className' ||
      name === 'forwardedRef' ||
      name === 'ref' ||
      name === 'style'
    ) return;

    const isEvent = events.includes(propToEvent(name));

    if (!isEvent) return element[name] = props[name];

    attachEvent(element, propToEvent(name), props[name]);
  })
}

export const proxy = <PropType, ElementType>(tagName: string, events: Array<string> = []) => {

  const ReactComponent = class extends React.Component<InternalPropsType<ElementType>> {

    element!: ElementType;

    setElement = (element: ElementType) => {
      this.element = element;
    }

    constructor(props: InternalPropsType<ElementType>) {
      super(props);
    }

    componentDidMount() {
      this.componentDidUpdate(/*this.props*/);
    }

    componentDidUpdate(/*prevProps: InternalProps<ElementType>*/) {
      setProps(this.element as any, this.props, events);
    }

    render() {

      const { children } = this.props;

      const newProps: FinalPropsType<ElementType> = getProps(this.setElement, this.props, events);

      return React.createElement(tagName, newProps, children);
    }
  }

  // const ReactComponentNew = (props: InternalPropsType<ElementType>) => {

  //   const { children } = props;

  //   const ref = useRef(null);

  //   const newProps: FinalPropsType<ElementType> = getProps(ref, props, events);

  //   useEffect(() => setProps(ref.current, props, events));

  //   return React.createElement(tagName, newProps, children);
  // }

  ReactComponent['displayName'] = dashToPascalCase(tagName);

  return forwardRef<ElementType, PropType>(ReactComponent);
}