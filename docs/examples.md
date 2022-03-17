# Examples
In this section, we try to introduce you to the code with three simple examples of web components in [HTMLPLUS](https://htmlplus.io).

## 1. Create a simple component
In order to gain the TypeScript typings (for intellisense/autocomplete) while using CommonJS imports with `require()` use the following approach:

```typescript
import { Component, Host, Prop, h } from '@stencil/core';

/**
 * Greeting component
 */
@Component({
    tag: 'plus-greeting' // Make a tag with this name
})

export class Greeting {
    /**
     * A name is displayed
     */
    @Prop()
    name?: string;// Specifies that the received format is string only

    render() { // Render component
        return (
            <Host>
                <div>Hello {this.name}, welcome to <b>HTMLPLUS</b></div>
        <slot /> // Show tag childrens
        </Host>
    )
    }
}
```
We created a component here called a prop and it displays it in the browser.<br/>

And after create this component we can use it:
```html
<plus-greeting name="sara"></plus-greeting>
```
If you look at this tag in your browser, you will see this
```html
<plus-test name="parsa" class="hydrated">
    <div>Hello parsa, welcome to <b>HTMLPLUS</b></div>
</plus-test>
```
Amazing, isn't it? We were able to build a web component 😎 .<br/>
But do not rush, this is the first way.<br/>
This is just a simple example to understand how to build a web component 🙂 .<br/>

Now we will give more examples to get acquainted with more cases.

## 2. Create a component with using Events
We want to go one step further.<br/>
In this example we explain how to use `events` and `styles` in web components.

### Why we use event?
Sometimes we need to find out about an event on the tag, such as clicking, scrolling, etc., or move data out of the tag.
In these cases, we use the **events**.

Fist step , we need create `plus-button` component:

```typescript jsx
//button.tsx

// imports ...

@Component({
    tag: 'plus-button',
    styleUrl: 'button.scss',
    shadow: true
})

export class Button {
    /**
     * A flag for desabled events
     */
    @Prop({reflect: true})// Reflect, send the prop to the style file
    disabled?: boolean;


    render() {
        return (
            <Host>
                <slot />
            </Host>
        )
    }
}
```
Now Create style file :
```scss
:host { // assign style to <Host> element
  display: inline-block;
  background-color: royalblue;
  color: #FFFFFF;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

:host([disabled]) { // assign style when host style contain disabled attribute
  background-color: #c5c5c5;
}
```
After create the component, we need add event from `stencil`.
> In this example, we want an event to happen with each click.

```typescript jsx
//button.tsx

// After create props...
/**
 * Emitted when component is clicked.
 */
@Event({
    bubbles: false,//A Boolean indicating whether the event bubbles up through the DOM or not.
    cancelable: true//A Boolean indicating whether the event is cancelable.
})
click!: EventEmitter<void>;//Event called 'click'

//Before functions and render component
```
After creating an event, we need to write a function that manages these events:

```typescript jsx
//button.tsx

//After event ...

handleOnClick () {
    if (this.disabled) return; // When the disabled prop is `true`, it stops working

    this.click.emit(); // Send a void function to out of the component
}

render() {
    return (
        <Host onclick={() => this.handleOnClick()} role="button"> // Assign function to onclick
            <slot />
        </Host>
    )
}
```
> Tacit knowledge: The role attribute describes the role of an element in programs that can make use of it, such as screen readers or magnifiers.


You may not believe it, but it's so simple!😁

### Now you can use it:

```html
<!--index.html-->
<plus-button id="buttonElement">Button</plus-button>
<div>Click counter: <span id="counterElement">0</span></div>

<script>
    let counter = 0;
    buttonElement.addEventListener('click', (event) => {
        counter = counter + 1;
        counterElement.innerHTML = counter;
    })
</script>
```

We learned these in this example:
- Create event in stencil js
- Add style to component
- Add disable flag to and use it

## 3. Using Link within a component

So far we have learned some principles.<br/>
You may be wondering how we make connections between tags (maybe not 😅)<br/>
Why should there be a connection between the tags?<br/>
The product of the combination of some tags expresses a meaning.<br/>
Like Tables or Selections or Radio with label, ...<br/>
The same should be true of web components.<br/>
To implement some concepts, we need to create several web components and connect them.<br/>
I talked a lot, let's go and see in practice.<br/>

### Generalities of using the link decorator:

```typescript
// Config file
// Such as example.link.ts
import { createLink } from '@app/utils';

//Link to each other for each number of components of the same name created
const link = createLin({
    scope: (i) => i.connector
})

export const { Action, Inject, Observable, reconnect } = link;
```
### Action:
All the functions we define here are used inside the web components using this decorator.

```typescript jsx
  @Action() // Action decorator
func(e) {  // A function that is linked to and called in another component
    this.func2(e);
}
```

### Inject:
Dedicated to all defined states and functions
```typescript jsx
@Inject()
@State()
stateOne?: boolean;

@Inject()
func?: Function;
```
> All states defined in this section must be Observable in other components

### Observable:
Visible states between linked components

```typescript jsx
@Observable()
stateOne?: boolean;
```

### reconnect:
With this function, we can re-render the component whenever we want

```typescript jsx
reconnect(this);
```
### Now how do we link the tags together?
All tags with the same name as attribute are linked to each other:
```html
<plus-radio connector="test"></plus-radio>
<plus-label connector="test"></plus-label>

<plus-radio connector="testTwo"></plus-radio>
<plus-label connector="testTwo"></plus-label>
```
The above two examples do not work because their names are different

Well, now let's give an example to better understand 😉:




### Create select component

Look at these tags<br/>
How they are connected while separated from each other<br/>
In the example we implement the same model<br/>

```html
<label for="htmlplus">Choose one:</label>
<select name="htmlplus">
    <option value="">Dark</option>
    <option value="">Light</option>
</select>
```

Plus select component :

```typescript jsx
//select.tsx
import { Component, Element, Prop, Host, h, State, Watch } from '@stencil/core';
import { Bind } from '@app/utils';
import { DialogLink, Link, rebind } from './dialog.link';
@Component({
    tag: 'plus-select',
    styleUrl: 'select.scss',
    shadow: true,
})

@Prop()
disabled?: boolean; // If this prop is true, the component will not work

@Prop()
connector?: string; // Used to connect links

@Observable()
openState?: boolean; //Observes the openState shape of the option component

@State()
isOpen?: boolean = false; //State to show whether the plus-select is open or closed
selected?: string; // Show selected item in select tag

@Element()
$host !: HTMLElement;
$select !: HTMLElement;


@Event({
    bubbles: false,
    cancelable: true
})
onSelect!: EventEmitter<HTMLElement>; // Event for send selected item out of the component

@Watch('disabled')
@Bind
init() {
    this.$select.addEventListener('click', this.handleClick) //It listen select when clicked
}

@Bind
destroy() {
    this.$select.removeEventListener('click', this.handleClick) // Remove listen
}

@Bind
handleClick() {
    // Add open attribute for show option list
    if (!this.isOpen)
        this.$host.setAttribute('open', '');
    else
        this.$host.removeAttribute('open');

    this.isOpen = !this.isOpen;
}

@Bind
hide(el) {
    this.selected = el.innerHTML; // Show select item in select tag
    this.$host.removeAttribute('open');
    this.onSelect.emit(el);// Send select item to out of the component
    this.isOpen = false;
}

@Action()
toggle(el) {
    this.hide(el);// When each option is selected, its data is sent here via a link
}

// This hook is called when a component's Prop or State property changes and a rerender is about to be requested
componentShouldUpdate(next, prev, name) {

    if (next === prev) return false;

    switch (name) {

        case 'connector':

            reconnect(this);

            break;
    }
}

// Render listener
// Called before every render()
componentDidRender() {
    if (this.disabled) return;

    this.init();
}

// Called every time the component is disconnected from the DOM
disconnectedCallback() {
    this.destroy();
}

render() {
    return (
        <Host>
            <div class="select" ref={element => this.$select = element}>{this.selected}
                <div class="arrow-down"/>
            </div>
            <div class="list">
                <slot/>
            </div>
        </Host>
    )
}
```

Plus option component:

```typescript jsx
//option.tsx
import {Component, Element, Host, Prop, h, State} from '@stencil/core';
import { Inject, reconnect } from './select.link';

@Component({
    tag: 'plus-option',
    styleUrl: 'option.scss',
    shadow: true,
})

@Prop()
connector?: string;

@Element()
$host!: HTMLElement;

@Inject()
@State()
openState?: boolean;

@Inject()
toggle?: Function;

get attributes() {
    return {
        'role': 'button',
        'state': this.open1 ? 'open' : 'close',
        'onClick': () => this.toggle(this.$host)// Send data to toggle via link decorator
    }
}

render() {
    return (
        <Host {...this.attributes}>
            <slot />
        </Host>
    )
}
```

Link<br/>
Now we must config Link for this component

```typescript
//select.link.ts
import { createLink } from '@app/utils';

const link = createLink({
    scope: (i) => i.connector
})

export const { Action, Inject, Observable, reconnect } = link;
```

Let's not forget that both web components need styling:

```scss
//select.scss
:host {
  .select {
    //Styles for select section
  }
  .arrow-down {
    //Styles for select arrow
  }

  .list {
    display: none;
    width: fit-content;
  }
}

:host([open]) {
  .list {
    display: flex;
    flex-flow: column;
    border: 1px solid black;
    padding: 1px 9px;
  }
}
```

```scss
//option.scss
:host {
  :hover {
    color: royalblue;
  }
}
```
### Well well!<br/>
You faced a more difficult project here and learned the link decorator.
We learned these in this example:
- How to use Link
- use lifecycles
- Build a cool web component 😎
