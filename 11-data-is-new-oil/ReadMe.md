# Data is The New Oil

## 1. What is prop drilling?

In React, data flows in one direction — from top to bottom — i.e., from parent components to child components and then to their child components.

This happens when a piece of data needs to be transferred from a high-level component to a deeply nested child component.

In this process of passing data, some intermediate components may not use the data, which makes the code harder to maintain.

Prop drilling refers to this process, especially as the application grows and the number of components in the hierarchy increases.

## 2. What is lifting the state up?

Lifting the state up means moving the state to a common parent so its children can share the same data and stay in sync, making it single source of truth.

## 3. What is Context Provider and Context Consumer?

The provider gives the data and consumer use it. no need to pass data through every component avoids prop drilling.

**Context Provider:** A Context Provider is a `special component` , provided by `React’s Context API` that supplies data to all components under it in the tree.

- It takes `value` prop , and that value becomes available to every componet under the tree that consumes the context.

```
<MyContext.Provider value="Hello Child 😏">
  <UserChild />
</MyContext.Provider>
```

**Context Consumer** : A context consumer is a componet or a hook that reads the data from the nearest matching Provider above the it in the component tree.

In morden React , we commonly use `useContext()` hook insted of `<MyContext.Consumer></MyContext.Consumer>`.

```
const { value } = useContext(MyContext);
console.log(value) // Hello Child 😏
```

```
<MyContext.Consumer>
 {(contextData) => (
 <p>{contextData}</p>
 )}
 </MyContext.Consumer>
```

## 4. If you don’t pass a value to the provider does it take the default value?

Yes if we don't pass a `value` to the React Context Provider, It will use the default value that we set when we created the context.

```
import React from "react"
const MyContext = React.createContext({
  value: "Default value Jii 😉"
})

function App(){
  return (
    <MyContext.Provider>
    <ChildUser />
    </MyContext.Provider>
  )
}

const ChildUser = ()=>{
  const { value } = React.useContext(MyContext);
  console.log(value) 

  retrun (
    <div>
      some lines
    </div>
  )
}
```


**By vikas singh**
