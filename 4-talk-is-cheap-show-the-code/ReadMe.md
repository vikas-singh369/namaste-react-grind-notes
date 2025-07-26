# Talk is cheap, show the code
[Coding Assignment](../coding-advanced/ReadMe.md)


## Is JSX mandatory for React ?
NO, JSX is not mandotory for React even we can work without JSX and build the whole app without JSX but it will be hard to write and read and it will be hard to debug.

JSX is just syntactic sugar for the React.createElement() function.

## Is ES6 mandatory for React ?
NO, ES6 is not mandatory but it is highly recommended.
React can run with ES5, but most tools, docs, and libraries use ES6+

In React Commonly uses 

* `let` and `const` -> for better variable scoping.

* `arrow functions` -> for better readability, clear syntax and lexical `this`.

* `Destructuring` -> to extract values from props and state easily.

* `Template Literals` -> for better string interpolation.

## {TitleComponent()} vs `{<TitleComponent/>}` vs
`{<TitleComponent></TitleComponent>}` in JSX

### {TitleComponent()}: 

* Manually calling the component. 
* Not recommended in JSX.

### {`<TitleComponent/>`}:

* Render the component immediately.
* just like normal JSX.

### {`<TitleComponent></TitleComponent>`}:

* Exactly same as `{<TitleComponent />}` , just non-self closing.
* use this when component need to pass the children


## How can I write comments in JSX?
In JSX, we write comments like {/* comment */} because we first enter JavaScript mode using {}, then use the JS multi-line comment syntax /* */

JSX is not HTML inside JavaScript.

## What is <React.Fragment></React.Fragment> and <></> ?

A common pattern in React to return multiple elements without adding a Extra DOM wrapper.

Both are same `<React.Fragment></React.Fragment>` and `<></>`. They Empty Component `<></>` is a Short syntax for <React.Fragment></React.Fragment>.

## What is Virtual DOM?
Virtual DOM is a lightweight copy of the real DOM that helps React update the UI more efficiently.

## What is Reconciliation in React?

Reconciliation is a React process where reacts compares the new virtual DOM to privious virtual DOM using the diff algorithm and updates only the changes part to real DOM.

## What is React Fiber ? 
React fiber is a power-house reimplementation of react core algorithm. The goal of react fiber is to increase its suitability such as area like animation, layout , gestures.

The headline feature react fiber is incremental rendering work into chunk and spread it out multiplle frames.


## Why we need keys in React? When do we need keys in React?

suppose we have a container Components that have multiple same level elements. React doesn't know which element it is,when new element is added or removed then react re-render the all same level element ones again. But if we gave a unique key to each element then React can keep track of them, now react exactly know which element is added or removed so whatever place new element is added or removed it will only re-render that particular element and not re-render all the same level elements.


## Can we use index as keys in React?
Yes, we can but react it self say don't use index as a key.use unique id as key.

## What is props in React? Ways to pass props in React?
props is a short for properties. It is a way to pass dynamically data into parent components to child components. it allows components to be reusable and dynamic. 

ways to pass props:
1. passing props from parent to child

```
<ChildComponent name="Vikas" />

```

2. Accessing props in child component
```
function ChildComponent(props) {
  return <h1>Hello, {props.name}</h1>;
}

```

3. Destructuring props
```
function ChildComponent({ name }) {
  return <h1>Hello, {name}</h1>;
}
```

4. passing functions as props
```
<ChildComponent onClick={handleClick} />

```

## What is Config Driven UI in React?
Config Driven UI means building the UI based on a configuration data.

It makes UI dynamic , flexible and maintainable that is not hard coded.


**By vikas singh**