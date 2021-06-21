import { VNode, defineComponent, h, ref, Ref } from 'vue';

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

const getComponentClasses = (classes: string) => classes?.split(' ') || [];

const getElementClasses = (
  ref: Ref<HTMLElement | undefined>,
  componentClasses: Set<string>,
  defaultClasses: string[] = []
) => {
  return [...Array.from(ref.value?.classList || []), ...defaultClasses]
    .filter((c: string, i, self) => !componentClasses.has(c) && self.indexOf(c) === i);
};

export const proxy = <PropType>(tagName: string, options?: OptionsType) => {

  const {
    props = [],
    events = [],
    modelProp,
    modelUpdateEvent,
    externalModelUpdateEvent
  } = options || {};

  const VueComponent = defineComponent<PropType & InputPropsType>((props, context) => {

    const { attrs, slots, emit } = context;

    let modelPropValue = (props as any)[modelProp as any]; // TODO
    const containerRef = ref<HTMLElement>();
    const classes = new Set(getComponentClasses(attrs.class as any)); // TODO
    const onVnodeBeforeMount = (vnode: VNode) => {
      // Add a listener to tell Vue to update the v-model
      if (vnode.el) {
        const eventsNames = Array.isArray(modelUpdateEvent) ? modelUpdateEvent : [modelUpdateEvent];
        eventsNames.forEach((eventName: any) => { // TODO
          // TODO
          (vnode as any).el.addEventListener(eventName.toLowerCase(), (e: Event) => {
            modelPropValue = (e?.target as any)[modelProp as any]; // TODO
            emit(UPDATE_VALUE_EVENT, modelPropValue);

            // TODO
            // if (externalModelUpdateEvent)
            emit(externalModelUpdateEvent as any, e);
          });
        });
      }
    };

    return () => {

      modelPropValue = (props as any)[modelProp as any]; // TODO

      // TODO
      getComponentClasses(attrs.class as any).forEach((value) => classes.add(value));

      let propsToAdd = {
        ...props,
        ref: containerRef,
        class: getElementClasses(containerRef, classes),

        // TODO
        onVnodeBeforeMount: (modelUpdateEvent && externalModelUpdateEvent) ? onVnodeBeforeMount : undefined
        // onVnodeBeforeMount: (modelUpdateEvent) ? onVnodeBeforeMount : undefined
      };

      if (modelProp) {
        propsToAdd = {
          ...propsToAdd,
          [modelProp]: props.hasOwnProperty(MODEL_VALUE) && props[MODEL_VALUE] !== undefined ? props.modelValue : modelPropValue
        }
      }

      return h(tagName, propsToAdd, slots.default && slots.default());
    }
  });

  VueComponent.props = [...props, ...events];

  if (modelProp) {
    VueComponent.props.push(MODEL_VALUE);
    VueComponent.emits = [UPDATE_VALUE_EVENT, externalModelUpdateEvent];
  }

  VueComponent['displayName'] = tagName;

  return VueComponent;
}

// TODO
// export const IonCheckbox = /*@__PURE__*/ defineContainer<JSX.IonCheckbox>('ion-checkbox', [
//   'color',
//   'name',
//   'checked',
//   'indeterminate',
//   'disabled',
//   'value',
//   'ionChange',
//   'ionFocus',
//   'ionBlur',
//   'ionStyle'
// ],
// {
//   "modelProp": "checked",
//   "modelUpdateEvent": [
//     "v-ionChange",
//     "v-ion-change"
//   ],
//   "externalModelUpdateEvent": "ionChange"
// });