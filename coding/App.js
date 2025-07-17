// Ep:2  In this file I learn how behind the seene any bunndler works under the hood

/*
 *** Parcel Feature ***
 * Zero Config
 * HMR - Hot Module Replacement - utilizes a File Watcher algorithm implemented in C++ to execute files upon detecting changes
 * cashing- while development
 * Image Optimization
 * Caching while development
 * Compress
 * Differential bundling - support old browsers
 * HTTPS on dev [Example - npx parcel index.html --https]
 * Port Number [Example - If port number using in localhost then it will change in port number in another project running on localhost]
 * Consistent Hashing Algorithm
 * Tree shaking
 * Diagnostics - Error reporting
 *
 *  * Cleaning our Code (Example - Remove Console.log)
 * Dev and Production Build
 * Super Fast build algorithm
 *
 * Transitive Dependencies - Dependencies of dependencies
 */

/* 
<div id = "parent">
  <div id = "child">
    <h1>Hello from React</h1>
    <h2>Subheading</h2>
  </div>
<div>
*/

// React.createElement(tag, attribute, children)
const parent = React.createElement("div", {id: "parent"}, [ React.createElement("h1", {}, "Hello from React parent"),
  React.createElement("div", {id: "child"}, [React.createElement("h1", {}, "Hello from React"), React.createElement("h2", {}, "Subheading")]),
  React.createElement("div", {id: "2"}, [React.createElement("h1", {}, "Hello from React child 2"), React.createElement("h2", {}, "Subheadin 2")])
]);


const heading = React.createElement("h1", {}, "Hello from React");

// ReactDOM.render(what to render, where to render)
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  // console.log(heading); // object

  root.render(parent);