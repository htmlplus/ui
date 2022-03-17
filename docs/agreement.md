# Collaboration agreement guide
We have written this guide for you in order to save time and have written guide. We hope you find it useful. Here we explain the ```tools``` needed to develop a project as well as the ```production``` process of a component.

## Note

For information about the project structure and Up & Running it, you can refer to the ```contributing.md``` section.

## Project Tools

For ease of the development of a series of tools have already been written, which we will explain in this section.

### @Decorators

A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.

You can see all the tools in ```packages/core/src/utils```.

For example, given the decorator @sealed we might write the sealed function as follows:

```javascript
function sealed(target) {
  // do something with 'target' ...
}
```

### @Bind
While working on React, you must have come across controlled components and event handlers. We need to bind these methods to the component instance using .bind() in our custom component's constructor.

```javascript
  constructor( props ){
    super( props );
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    // your event handling logic
  }
```
To use this feature, just write it before the function:

```typescript
@Bind
get sealed(target) {
  // do something with 'target' ...
}
```

### @Debug


### @Direction


### @GlobalConfig

All component props that you want to configure globally are located here.

```typescript
  @GlobalConfig('button', {
    color: 'primary',
    size: 'md'
  })
```

### @GlobalState

Everything that needs to be shared between the components of the same name is included in this section.

```typescript
  @GlobalState()
  state: ExampleGlobalState = {
    instances: []
  }
```
For example, for the ```z-index``` prioritization property, we put the number of open components here so that all components have the same name.

### @IsRtl
We use this component to be aware of the cases of being multilingual to apply the appropriate style.

```typescript
  @IsRTL()
  isRTL?: boolean;
```

### @Link
One of the most powerful decorator is Link
Linking functions between components called connector
```typescript
  @Link({ scope: '[connector]' })
  link: EmapleComponent = {
    func: () => this.func()
  }
```

for example we set same name connector for some components :

```html
  <div class="center">
    <plus-dialog-toggler connector="dialog-animation">
      Open
    </plus-dialog-toggler>
  </div>
  <plus-dialog animation="fade" connector="dialog-animation">
    <plus-dialog-content>
      <plus-dialog-header>
        Dialog Title
      </plus-dialog-header>
      <plus-dialog-body>
        Lorem ipsum
      </plus-dialog-body>
      <plus-dialog-footer>
        <plus-dialog-toggler>
          Close
        </plus-dialog-toggler>
      </plus-dialog-footer>
    </plus-dialog-content>
  </plus-dialog>
```

When click the ```open``` tag , he called ```plus-dialog``` component and open it.
Wasn't it interesting?

Note:
Note that to use this decorator, you must write the appropriate initial settings of your component in the ```yourComponentName.link.ts``` file:
```typescript
export interface ComponentNameLink {
    open?: boolean;
    toggle?: () => void;
}

const initial = {
    open: false,
    toggle: () => undefined,
};

export const { Link, rebind } = createLink<ComponentNameLink>(initial);
```

#### @Media

Determine the appropriate size for use on different pages

```typescript
@Media('[breakpoint]-down')
get sealed(target) {
  // do something with 'target' ...
}
```

### Functions

#### Animation

This function automatically changes component classes based on the attributes specified when events occur so that styles can be easily applied without the occurrence of side effect.

```typescript
    animate = new AnimationV2({
      key: 'state',
      source: () => this.$host,
      target: () => this.$host,
      state: this.open ? 'entered' : 'leaved',
      states: {
        enter: 'open',
        entering: 'opening',
        entered: 'opened',
        leave: 'close',
        leaving: 'closing',
        leaved: 'closed',
      }
    })
```

We give this component all possible modes based on the component to apply the previously written styles to the component based on these modes.

```scss
:host([state=opening]) {
  // Write any style
}
:host([state=open]) {
  // Write any style
}
:host([state=close]) {
  // Write any style
}
```
This function gives us a callback function for each case with which we can perform any function we need.

```javascript
    animate.enter({
      onEnter: () => {
          // Do somthing
      }
      ...
    })
```

#### ClickOutside
As the name implies, it is one of the simplest functions
In relation to the element that is given to it, every time it is clicked out of it, it is executed to the given function.

ClickOutsideCore.add(target, func);

#### Portal
To prevent side-effects, this function moves the element to the location we specify.
```javascript
    this.portalInstance = new Portal({
      source: <div></div>,//element
      target: #id, //query selector via passed name
      strategy: '',
    })
```
Well, by now you are familiar with the tools we have written so far. Now how do we build a component?

### Data collection
Most of the required components are available on the Internet and there is a great variety of them
Each has its own unique features, so it is better to research this before creating to make a more desirable product.

### Implementations
After completing the first step, you are now ready to build your component
Read the `contributing.md` section agreements to create the component.

### Testing APIs

### Designing Examples
After completing the component and testing it, you must create an example for each component mode in the form of a `.md file` file next to the component directory.
```html
```html [template]
  <button>
    Default
    <plus-tooltip>Tooltip</plus-tooltip>
  </button>
```
### Writing components description
Each component needs to explain its nature and how it works.
You should write a description of the component after the imports file section.


```javascript
import {somthing} from './somthing';
/**
* Explanation about the component...
*/
```

### Writing props, slost, events and  methods description

You should write about the properties and function of each of these before creating it.

```javascript
/**
* Explanation about the prop...
*/
@Prop
disabled?: boolean = true;

/**
 * Explanation about the event...
 */
@Event({
  //
})
// Others ...
```



### Publishing
Finally, after the final test of your changes, publish it and wait for the final test of the project owner.


Thanks for taking the time to read this text
Good luck
