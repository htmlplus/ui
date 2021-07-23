import { Ref, VNode, defineComponent, h, ref } from 'vue';

const UPDATE_VALUE_EVENT = 'update:modelValue';
const MODEL_VALUE = 'modelValue';

interface OptionsType {
  props?: Array<string>;
  events?: Array<string>;
  modelProp?: string;
  modelUpdateEvent?: string | string[];
  externalModelUpdateEvent?: string;
}

export interface InputPropsType extends Object {
  modelValue: string | boolean;
}

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

export const proxy = <ElementType, PropType>(tagName: string, options?: OptionsType) => {

  const {
    props = [],
    events = [],
    modelProp,
    modelUpdateEvent,
    externalModelUpdateEvent
  } = options || {};

  const VueComponent = defineComponent<PropType & InputPropsType>((props, context) => {

    console.log('defineComponent');

    const { attrs, emit, slots } = context;

    const element = ref<HTMLElement>();

    const classes = new Set(getClasses(attrs.class));

    // TODO: modelProp as any
    let modelPropValue = (props as any)[modelProp as any];

    const onVnodeBeforeMount = (vnode: VNode) => {

      console.log('onVnodeBeforeMount');

      if (!vnode.el) return;

      [modelUpdateEvent]
        .flat(1)
        .forEach((eventName) => {

          if (!eventName) return;

          if (!vnode.el) return;

          vnode.el.addEventListener(eventName.toLowerCase(), (event: Event) => {

            // TODO: modelProp as any
            modelPropValue = (event?.target as any)[modelProp as any];

            emit(UPDATE_VALUE_EVENT, modelPropValue);

            // TODO: any
            emit(externalModelUpdateEvent as any, event); 
          });
        });
    };

    return () => {

      console.log('render');

      // TODO: modelProp as any
      modelPropValue = (props as any)[modelProp as any];

      getClasses(attrs.class).forEach(classes.add);

      // TODO: any
      const newProps: any = {
        ...props,
        class: mergeClasses(element, classes),
        ref: element,
        onVnodeBeforeMount // TODO: remove
      };

      if (modelProp) {

        newProps.onVnodeBeforeMount = onVnodeBeforeMount;

        newProps[modelProp] = props.hasOwnProperty(MODEL_VALUE) && props[MODEL_VALUE] !== undefined ? props.modelValue : modelPropValue;
      }

      return h(tagName, newProps, slots.default && slots.default());
    }
  })

  VueComponent.props = [...props, ...events];

  if (modelProp) {
    VueComponent.props.push(MODEL_VALUE);
    VueComponent.emits = [UPDATE_VALUE_EVENT, externalModelUpdateEvent];
  }

  VueComponent['displayName'] = tagName;

  return VueComponent;
}