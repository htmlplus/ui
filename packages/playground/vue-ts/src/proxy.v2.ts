import { Ref, VNode, defineComponent, h, ref } from 'vue';

const MODEL_PROP = 'modelValue';
const MODEL_EVENT = 'update:modelValue';

interface ModelType {
  prop: string,
  event: string,
}

interface OptionsType {
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

      for (const event of events) {

        const key = event;

        // TODO: maybe `props` replace with `attrs`
        if (!props.hasOwnProperty(key)) continue;

        vnode.el.addEventListener(key, (event: Event) => {

          if (model && model.event === key) {

            modelValue = (event?.target as any)[model.prop];

            emit(MODEL_EVENT, modelValue);
          }

          emit(key, event);
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
        onVnodeBeforeMount // TODO: remove
      };

      if (model)
        newProps[model.prop] = props.hasOwnProperty(MODEL_PROP) && props[MODEL_PROP] !== undefined ? props.modelValue : modelValue;

      return h(tagName, newProps, slots.default && slots.default());
    }
  })

  VueComponent.props = [...props, ...events];

  if (model) {
    VueComponent.props.push(MODEL_PROP);
    VueComponent.emits = [MODEL_EVENT, model.event];
  }

  VueComponent['displayName'] = tagName;

  return VueComponent;
}