import React from 'react';

/**
 * Interface
 */

// General types important to applications using stencil built components
export interface StyleReactProps {
  class?: string;
  className?: string;
  style?: {
    [key: string]: any
  };
}

/**
 * CASE
 */

const dashToPascalCase = (str: string) => {
  return str
    .toLowerCase()
    .split('-')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('');
}

const camelToDashCase = (str: string) => {
  return str.replace(/([A-Z])/g, (m: string) => `-${m[0].toLowerCase()}`);
}

/**
 * Urils/index
 */

// Remove readonly and ?
type Mutable<T> = { -readonly [P in keyof T]-?: T[P] };

type StencilReactExternalProps<PropType, ElementType> = PropType & Omit<React.HTMLAttributes<ElementType>, 'style'> & StyleReactProps;

// The comma in the type is to trick typescript because it things a single generic in a tsx file is jsx
const mergeRefs = <ElementType,>(...refs: React.Ref<ElementType>[]) => (value: ElementType,) => {

  return refs.forEach((ref) => {

    if (typeof ref === 'function') return ref(value);

    if (ref == null) return;

    // This is typed as readonly so we need to allow for override
    (ref as Mutable<React.RefObject<ElementType>>).current = value;
  })
}

const createForwardRef = <PropType, ElementType>(ReactComponent: any, displayName: string,) => {

  const forwardRef = (
    props: StencilReactExternalProps<PropType, ElementType>,
    ref: React.Ref<ElementType>,
  ) => {
    return <ReactComponent {...props} forwardedRef={ref} />;
  };

  forwardRef.displayName = displayName;

  return React.forwardRef(forwardRef);
}

/**
 * ATTACH PROPS
 */

const attachProps = (node: HTMLElement, newProps: any, oldProps: any = {}) => {

  // some test frameworks don't render DOM elements, so we test here to make sure we are dealing with DOM first
  if (!(node instanceof Element)) return;

  // add any classes in className to the class list
  const className = getClassName(node.classList, newProps, oldProps);

  if (className !== '') node.className = className;

  Object.keys(newProps).forEach((name) => {

    if (
      name === 'children' ||
      name === 'style' ||
      name === 'ref' ||
      name === 'class' ||
      name === 'className' ||
      name === 'forwardedRef'
    ) return;

    if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {

      const eventName = name.substring(2);

      const eventNameLc = eventName[0].toLowerCase() + eventName.substring(1);

      if (typeof document !== 'undefined' && !isCoveredByReact(eventNameLc, document)) {

        syncEvent(node, eventNameLc, newProps[name]);
      }
    }
    else {

      (node as any)[name] = newProps[name];

      const propType = typeof newProps[name];

      if (propType === 'string') {

        node.setAttribute(camelToDashCase(name), newProps[name]);
      }
      else {

        (node as any)[name] = newProps[name];
      }
    }
  })
}

const getClassName = (classList: DOMTokenList, newProps: any, oldProps: any) => {

  const newClassProp: string = newProps.className || newProps.class;
  const oldClassProp: string = oldProps.className || oldProps.class;

  // map the classes to Maps for performance
  const currentClasses = arrayToMap(classList);
  const incomingPropClasses = arrayToMap(newClassProp ? newClassProp.split(' ') : []);
  const oldPropClasses = arrayToMap(oldClassProp ? oldClassProp.split(' ') : []);
  const finalClassNames: string[] = [];

  // loop through each of the current classes on the component
  // to see if it should be a part of the classNames added
  currentClasses.forEach((currentClass) => {
    if (incomingPropClasses.has(currentClass)) {
      // add it as its already included in classnames coming in from newProps
      finalClassNames.push(currentClass);
      incomingPropClasses.delete(currentClass);
    }
    else if (!oldPropClasses.has(currentClass)) {
      // add it as it has NOT been removed by user
      finalClassNames.push(currentClass);
    }
  });
  incomingPropClasses.forEach((s) => finalClassNames.push(s));
  return finalClassNames.join(' ');
}

/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
const isCoveredByReact = (eventNameSuffix: string, doc: Document) => {

  const eventName = 'on' + eventNameSuffix;

  let isSupported = eventName in doc;

  if (!isSupported) {

    const element = doc.createElement('div');

    element.setAttribute(eventName, 'return;');

    isSupported = typeof (element as any)[eventName] === 'function';
  }

  return isSupported;
}

const syncEvent = (
  node: Element & { __events?: { [key: string]: ((e: Event) => any) | undefined } },
  eventName: string,
  newEventHandler?: (event: Event) => any,
) => {

  const eventStore = node.__events || (node.__events = {});

  const oldEventHandler = eventStore[eventName];

  // Remove old listener so they don't double up.
  if (oldEventHandler)
    node.removeEventListener(eventName, oldEventHandler);

  eventStore[eventName] = function handler(event: Event) {

    if (!newEventHandler) return;

    newEventHandler.call(this, event);
  }

  // Bind new listener.
  node.addEventListener(eventName, eventStore[eventName])
}

const arrayToMap = (array: string[] | DOMTokenList) => {

  const map = new Map<string, string>();

  (array as string[]).forEach((s: string) => map.set(s, s));

  return map;
}

/**
 * CREATE COMPONENT
 */

interface HTMLStencilElement extends HTMLElement {
  componentOnReady(): Promise<this>;
}

interface StencilReactInternalProps<ElementType> extends React.HTMLAttributes<ElementType> {
  forwardedRef: React.RefObject<ElementType>;
  ref?: React.Ref<any>;
}

export const proxy = <PropType, ElementType extends HTMLStencilElement>(tagName: string) => {

  const displayName = dashToPascalCase(tagName);

  const ReactComponent = class extends React.Component<StencilReactInternalProps<ElementType>> {

    componentEl!: ElementType;

    setComponentElRef = (element: ElementType) => {
      this.componentEl = element;
    }

    constructor(props: StencilReactInternalProps<ElementType>) {
      super(props);
    }

    componentDidMount() {
      this.componentDidUpdate(this.props);
    }

    componentDidUpdate(prevProps: StencilReactInternalProps<ElementType>) {
      attachProps(this.componentEl, this.props, prevProps);
    }

    render() {

      const { children, forwardedRef, style, className, ref, ...cProps } = this.props;

      let propsToPass = Object.keys(cProps).reduce((acc, name) => {
        if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
          const eventName = name.substring(2).toLowerCase();
          if (typeof document !== 'undefined' && isCoveredByReact(eventName, document)) {
            (acc as any)[name] = (cProps as any)[name];
          }
        } else {
          (acc as any)[name] = (cProps as any)[name];
        }
        return acc;
      }, {});

      let newProps: Omit<StencilReactInternalProps<ElementType>, 'forwardedRef'> = {
        ...propsToPass,
        ref: mergeRefs(forwardedRef, this.setComponentElRef),
        style,
      };

      return React.createElement(tagName, newProps, children);
    }

    static get displayName() {
      return displayName;
    }
  }

  return createForwardRef<PropType, ElementType>(ReactComponent, displayName);
}
