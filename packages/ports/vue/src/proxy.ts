import { Ref, VNode, defineComponent, h, ref } from 'vue';
import Case from 'case';

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

const getClasses = (classes: string | unknown) => {

  if (typeof classes !== 'string') return [];

  return classes.split(' ') || [];
};

const isEventCovered = (event: string) => {

  const eventName = `on${event}`.toLowerCase();

  let isSupported = eventName in document;

  if (!isSupported) {

    const element = document.createElement('div');

    element.setAttribute(eventName, 'return;');

    isSupported = typeof (element as any)[eventName] === 'function';
  }

  return isSupported;
};

const mergeClasses = (
  ref: Ref<HTMLElement | undefined>,
  componentClasses: Set<string>,
  defaultClasses: string[] = []
) => {
  return [...Array.from(ref.value?.classList || []), ...defaultClasses]
    .filter((item, index, items) => !componentClasses.has(item) && items.indexOf(item) === index);
};

export const proxy = <ElementType, PropType>(tagName: string, options?: OptionsType) => {

  const {
    prefix,
    props = [],
    model,
  } = options || {};

  const events = options?.events?.map((event) => {

    const key = Case.camel(event.replace(prefix || '', ''));

    return {
      key,
      name: event,
      isCovered: isEventCovered(key),
      isModel: model && model.event === event,
      prop: Case.camel('on-' + key)
    }
  }) || [];

  const VueComponent = defineComponent<PropType & InputPropsType>((props, context) => {

    const { attrs, emit, slots } = context;

    const element = ref<HTMLElement>();

    const classes = new Set(getClasses(attrs.class));

    let modelValue = (props as any)[model?.prop as any];

    const onVnodeBeforeMount = (vnode: VNode) => {

      if (!vnode.el) return;

      for (const event of events) {

        // TODO
        // if (event.isCovered) continue;

        // TODO
        // if (!(props as any)[event.prop] && !event.isModel) continue;

        vnode.el.addEventListener(event.name, (ev: Event) => {

          if (event.isModel) {

            modelValue = (ev.target as any)[model?.prop as any];

            emit(MODEL_EVENT, modelValue);
          }

          emit(event.key, ev);
        })
      }
    }

    return () => {

      getClasses(attrs.class).forEach(classes.add);

      const newProps: any = {
        ...props,
        class: mergeClasses(element, classes),
        ref: element,
        onVnodeBeforeMount,
      };

      for (const event of events) {

        if (!event.isCovered) continue;

        // TODO
        // if (!newProps[event.prop]) continue;

        newProps[event.prop] = () => undefined;
      }

      if (model) {

        modelValue = (props as any)[model.prop];

        newProps[model.prop] = props.hasOwnProperty(MODEL_PROP) && props[MODEL_PROP] !== undefined ? props.modelValue : modelValue;
      }

      return h(tagName, newProps, slots.default && slots.default());
    }
  })

  VueComponent.emits = [...events.map((event) => event.key)];
  VueComponent.props = [...props, ...events.map((event) => event.prop)];

  if (model) {
    VueComponent.emits.push(MODEL_EVENT);
    VueComponent.props.push(MODEL_PROP);
  }

  VueComponent['displayName'] = tagName;

  return VueComponent;
}