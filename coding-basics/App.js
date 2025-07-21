// 🎬 Ep: 2 — Understanding How Bundlers Like Parcel Work Under the Hood

/*
 🔧 Parcel Features:
 - Zero Configuration
 - HMR (Hot Module Replacement): Uses C++-based File Watcher to update files on changes.
 - Caching (During Development)
 - Image Optimization
 - Code Compression
 - Differential Bundling (Supports older browsers)
 - HTTPS Support for Dev Server (e.g. `npx parcel index.html --https`)
 - Dynamic Port Handling (auto changes if port is occupied)
 - Consistent Hashing Algorithm
 - Tree Shaking (removes unused code)
 - Error Diagnostics
 - Code Cleaning (e.g. removing console.log in builds)
 - Supports Dev & Production Builds
 - Super Fast Build Algorithm
 - Transitive Dependencies (dependencies of dependencies)
*/

/*
📝 HTML Code Converted into React.createElement Format:
<div id="parent">
  <div id="child">
    <h1>Hello from React</h1>
    <h2>Subheading</h2>
  </div>
</div>
*/

import React from "react";
import ReactDOM from "react-dom/client";

// 👇 React.createElement usage (Behind-the-Scenes React)
const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("h1", {}, "Hello from React parent"),

    React.createElement(
      "div",
      { id: "child" },
      [
        React.createElement("h1", {}, "Hello from React"),
        React.createElement("h2", {}, "Subheading")
      ]
    ),

    React.createElement(
      "div",
      { id: "2" },
      [
        React.createElement("h1", {}, "Hello from React child 2"),
        React.createElement("h2", {}, "Subheading 2")
      ]
    )
  ]
);

// Root creation
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent); // Render createElement version 

// 🎬 Ep: 3 — Laying the Foundation of React

// ✅ JSX Element Example
const jsxHeading = <h1>Hello from React using JSX</h1>;
// root.render(jsxHeading); // Render JSX version 

// * interview Tip: Difference between JSX and React.createElement
// - JSX is syntactic sugar for React.createElement()
// - JSX gets compiled by Babel to React.createElement() calls


/*
📘 React Components Overview:
 - Class Components (older way)
 - Functional Components (modern way)
*/

// ✅ Functional Component Syntax Example 1 (with return)
const TitleComponent = () => {
  return <h1>React Title Component</h1>;
};

// ✅ Functional Component Syntax Example 2 (without return - implicit)
const HeadingComponent = () => (
  <div id="container">
    {/* Different ways to use components:
      - <TitleComponent />
      - <TitleComponent></TitleComponent>
      - TitleComponent()
    */}
    <TitleComponent />
    <p className="heading">React Functional Component</p>
  </div>
);

// 📦 Rendering our Final Component
root.render(<HeadingComponent />);
