import React from "react";
import ReactDom from "react-dom/client"

// root creation
const LayingRoot = ReactDom.createRoot(document.getElementById("layingRoot"));

// Q.1: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)

const header = React.createElement("div", { className: "title"}, [
  React.createElement("h1", {key: "1"}, "Hello from React"),
  React.createElement("h2", {key: "2"}, "Subheading"),
  React.createElement("h3", { key: "3"}, "Subheading 2")
])

// LayingRoot.render(header);

// Q.2: Create the same element using JSX

const jsxHeader = (
  <div className="title">
    <h1>Jsx Heading</h1>
    <h2>Jsx Heading 2</h2>
    <h3>Jsx Heading 3</h3>
  </div>
)

// LayingRoot.render(jsxHeader);


// Q.3: Create a functional component of the same with JSX

// Q.4: pass the attribute also

const Header = ()=> {
  return (
    <div className="title">
      <h1 key="1">Function Component Heading</h1>
      <h2 key="2">Function Component Heading 2</h2>
      <h3 key="3">Function Component Heading 3</h3>
    </div>
  )
}

// LayingRoot.render(<Header />)


// Q.5 : Composition of Components 

const CompositionComponent = ()=> {
  return (
    <div>
      <h1>Composition Component Example</h1>
      <Header />
      <h2>Calling again the same component</h2>
      <Header />
    </div>
  )
}

// LayingRoot.render(<CompositionComponent />)


// {TitleComponent} vs {<TitleComponent/>} vs{<TitleComponent></TitleComponent>} in JSX

const element = <span>Helloo From the element inject using js </span>
const TitleComponent = ()=> (
  <div>
    {element}
    <h1>Title Component</h1>
  </div>
)

/* {TitleComponent()}
* Direct function call of the component.

* JSX does not handle it — it’s pure JavaScript execution.
 * Loses React power not able to use
 * 
  ! Not Recoment to use it
*/

// LayingRoot.render(TitleComponent()); 

/* {<TitleComponent />}

* This is the Standard way to render a component in JSX
* React handles it properly -- React power all supported.
*/

// LayingRoot.render(<TitleComponent />);


/* <TitleComponent > </TitleComponent >

* Exactly the same as {<TitleComponent />} , just non-self closing.

* use this when we need to pass the children
*/

const NonSelfClosingComponent = ()=>{
  return (
    <div>
      
    <TitleComponent>
      <p>this part not render because we not handle it this pass as a children but we not created to accept it </p> 
    </TitleComponent>
    </div>
  )
}

LayingRoot.render(<NonSelfClosingComponent />)

