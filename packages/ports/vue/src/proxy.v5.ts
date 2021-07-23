import { Ref, VNode, defineComponent, h, ref } from 'vue';
const Case = require('case');

const MODEL_PROP = 'modelValue';
const MODEL_EVENT = 'update:modelValue';

interface ModelType {
  prop: string,
  event: string,
}

interface OptionsType {
  prefix?: string;
  props?: Array<string>;
  events?: Array<string>;
  model?: ModelType;
}

export interface InputPropsType extends Object {
  modelValue: string | boolean;
}

const isEventCovered = (event: string) => {

  const eventName = addOnPrefixToEvent(event).toLowerCase();

  let isSupported = eventName in document;

  if (!isSupported) {

    const element = document.createElement('div');

    element.setAttribute(eventName, 'return;');

    isSupported = typeof (element as any)[eventName] === 'function';
  }

  return isSupported;
};

const getClasses = (classes: string | unknown) => {

  if (typeof classes !== 'string') return [];

  return classes.split(' ') || [];
};

const mergeClasses = (
  ref: Ref<HTMLElement | undefined>,
  componentClasses: Set<string>,
  defaultClasses: string[] = []
) => {
  return [...Array.from(ref.value?.classList || []), ...defaultClasses]
    .filter((item, index, items) => !componentClasses.has(item) && items.indexOf(item) === index);
};

const removePrefixFromEvent = (name: string, prefix?: string) => {

  if (!prefix) return name;

  return Case.camel(name.replace(prefix, ''));
}

const addOnPrefixToEvent = (name: string) => {
  return Case.camel(`on-${name}`);
}

export const proxy = <ElementType, PropType>(tagName: string, options?: OptionsType) => {

  const {
    prefix,
    props = [],
    events = [],
    model,
  } = options || {};

  const VueComponent = defineComponent<PropType & InputPropsType>((props, context) => {

    const { attrs, emit, slots } = context;

    const element = ref<HTMLElement>();

    const classes = new Set(getClasses(attrs.class));

    // TODO: model?.prop as any
    let modelValue = (props as any)[model?.prop as any];

    const onVnodeBeforeMount = (vnode: VNode) => {

      if (!vnode.el) return;

      for (const eee of events) {
        
        if (isEventCovered(removePrefixFromEvent(eee, prefix))) continue;

        const aaa = addOnPrefixToEvent(removePrefixFromEvent(eee, prefix));

        // TODO: maybe `props` replace with `attrs`
        if (!(props as any)[aaa]) continue;

        vnode.el.addEventListener(eee, (event: Event) => {

          if (model && model.event === eee) {

            modelValue = (event.target as any)[model.prop];

            emit(MODEL_EVENT, modelValue);
          }

          emit(eee, event);
        })
      }
    }

    return () => {

      if (model)
        modelValue = (props as any)[model.prop];

      getClasses(attrs.class).forEach(classes.add);

      // TODO: any
      const newProps: any = {
        ...props,
        class: mergeClasses(element, classes),
        ref: element,
        onVnodeBeforeMount,
      };

      for (const eee of events.map((event) => removePrefixFromEvent(event, prefix))) {

        if (!isEventCovered(eee)) continue;

        const a = addOnPrefixToEvent(eee);

        newProps[a] = () => emit(eee);
      }

      if (model)
        newProps[model.prop] = props.hasOwnProperty(MODEL_PROP) && props[MODEL_PROP] !== undefined ? props.modelValue : modelValue;

      return h(tagName, newProps, slots.default && slots.default());
    }
  })

  VueComponent.emits = [...events.map((event) => removePrefixFromEvent(event, prefix))];
  VueComponent.props = [...props, ...events.map((event) => addOnPrefixToEvent(removePrefixFromEvent(event, prefix)))];

  if (model) {
    VueComponent.emits.push(MODEL_EVENT);
    VueComponent.props.push(MODEL_PROP);
  }

  VueComponent['displayName'] = tagName;

  return VueComponent;
}