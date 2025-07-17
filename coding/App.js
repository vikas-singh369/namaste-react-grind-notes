/* 
<div id = "parent">
  <div id = "child">
    <h1>Hello from React</h1>
    <h2>Subheading</h2>
  </div>
<div>
*/

const parent = React.createElement("div", {id: "parent"}, [ React.createElement("h1", {}, "Hello from React parent"),
  React.createElement("div", {id: "child"}, [React.createElement("h1", {}, "Hello from React"), React.createElement("h2", {}, "Subheading")]),
  React.createElement("div", {id: "2"}, [React.createElement("h1", {}, "Hello from React child 2"), React.createElement("h2", {}, "Subheadin 2")])
]);


const heading = React.createElement("h1", {}, "Hello from React");

  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  // console.log(heading); // object

  root.render(parent);