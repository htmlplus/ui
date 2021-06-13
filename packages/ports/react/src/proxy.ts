import * as Case from 'case';
import React from 'react';

type EventHandlerType = (event: Event) => any;

type FinalPropsType<ElementType> = Omit<PropsType<ElementType>, 'forwardedRef'>;

type Mutable<T> = { -readonly [P in keyof T]-?: T[P] };

interface PropsType<ElementType> extends React.HTMLAttributes<ElementType> {
  forwardedRef: React.RefObject<ElementType>;
  ref?: React.Ref<any>;
}

export interface StyleReactProps {
  class?: string;
  className?: string;
  style?: {
    [key: string]: any
  };
}

const attachEvent = (element: Element, name: string, handler: EventHandlerType) => {

  const events = element['$events'] || (element['$events'] = {});

  const previous = events[name];

  previous && element.removeEventListener(name, previous);

  function callback(event: Event) {
    handler && handler.call(this, event);
  }

  element.addEventListener(name, events[name] = callback);
}

const getCustomEvent = (name: string, events: Set<string>) => {

  if (!name.match(/on[A-Z]\w+/)) return;

  name = Case.camel(name.slice(2));

  if (!events.has(name)) return;

  return name;
}

const getProps = <ElementType>(ref: React.Ref<ElementType>, props: PropsType<ElementType>, extra) => {

  const { forwardedRef } = props;

  const result: FinalPropsType<ElementType> = {
    ref: mergeRefs(forwardedRef, ref)
  }

  Object.keys(props).forEach((name) => {

    if (
      name === 'children' ||
      name === 'className' ||
      name === 'forwardedRef' ||
      name === 'ref'
    ) return;

    if (getCustomEvent(name, extra.events)) return;

    const value = props[name];

    if (extra.props.has(name)) {

      const type = typeof value;

      if (!type.match(/boolean|string|number/)) return;

      result[Case.kebab(name)] = value;

      return;
    }

    result[name] = value;
  })

  return result;
}

const setProps = <ElementType>(element: ElementType, props: PropsType<ElementType>, extra) => {

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

    const value = props[name];

    const event = getCustomEvent(name, extra.events);

    if (event)
      return attachEvent(element, event, value);

    if (
      extra.props.has(name) &&
      (typeof value).match(/boolean|string|number/)
    ) {

      element.setAttribute(Case.kebab(name), value);

      return;
    }

    element[name] = value;
  })
}

const forwardRef = <ElementType, PropType>(ReactComponent: any) => {

  const forwardRef = (
    props: PropType & Omit<React.HTMLAttributes<ElementType>, 'style'> & StyleReactProps,
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

export const proxy = <ElementType, PropType>(tagName: string, props: Array<string> = [], events: Array<string> = []) => {

  const extra = {
    props: new Set(props),
    events: new Set(events),
  };

  const ReactComponent = class extends React.Component<PropsType<ElementType>> {

    element!: ElementType;

    setElement = (element: ElementType) => {
      this.element = element;
    }

    constructor(props: PropsType<ElementType>) {
      super(props);
    }

    componentDidMount() {
      this.componentDidUpdate(/*this.props*/);
    }

    componentDidUpdate(/*prevProps: InternalProps<ElementType>*/) {
      setProps<ElementType>(this.element as any, this.props, extra);
    }

    render() {

      const { children } = this.props;

      const props = getProps<ElementType>(this.setElement, this.props, extra);

      return React.createElement(tagName, props, children);
    }
  }

  // TODO
  // const ReactComponentNew = (props: InternalPropsType<ElementType>) => {

  //   const { children } = props;

  //   const ref = useRef(null);

  //   const newProps: FinalPropsType<ElementType> = getProps(ref, props, events);

  //   useEffect(() => setProps(ref.current, props, events));

  //   return React.createElement(tagName, newProps, children);
  // }

  ReactComponent['displayName'] = Case.pascal(tagName);

  return forwardRef<ElementType, PropType>(ReactComponent);
}