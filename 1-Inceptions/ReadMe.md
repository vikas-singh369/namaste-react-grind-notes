# Inceptions

##  What is Emmet
Emmet is a tool that expands short abbreviations into full HTML/CSS code.

##  Difference between a Library and a Framework

**Library :**  
A library is a collection of pre-written code that helps perform specific tasks. I use the library when I need it, meaning I’m in control of when and how to use it.

**Example:** React – I build UI components with it, but I decide the structure and flow.

**Framework:**  
A framework gives me a ready-made structure along with tools and rules to build efficient and scalable applications. Here, the framework controls the overall flow and calls my code where needed. 

**Example:** Next.js – It provides routing, rendering, API handling, etc. I just plug my logic into it.



##  What is CDN? Why do we use it?
CDN stands for Content Delivery Network, that delivers by using network static content like js, css, images,etc, from the nearest server to improve loading speed and performance.

##  Why react is called react?
React is named react because it reacts to state and data changes to update ui efficiently.

React reacts -- thats the point

##  CrossOrigin Attribute ?
The crossorigin attribute enables CORS(Cross-Origin Resource Sharing) to load external js files from another origin.

## Difference between React and ReactDOM
**React:**  
**React:**  
React is the core library used to build UI components. It handles the logic, state, and structure of the user interface.

**ReactDOM:**  
ReactDOM connects those components to the actual DOM in the browser. It provides methods to mount, update, and unmount components in the actual DOM.

## What is react.development.js and react.production.js?
development = debug, production = performance
**react.development.js:**
 It includes warnings, error messages, and extra checks to help with debugging.

**react.production.js:**
It’s minified and optimized for performance by removing all development-related code and warnings.


## Difference between async and defer ?
async and differ are boolean attributes which are used along of script tag to load the externals script efficiently into our app.
**async:** 
- loads the script in parallel with the HTML parsing.
- Executes the script immediately **after it’s downloaded**.
- HTML parsing is paused during execution.  
 - It does not guarantee the order of execution if multiple scripts are present.

- best for independent scripts like analytics, ads, etc.

**defer:**
- loads the script in parallel with the HTML parsing.
- Executes the script **after the HTML is fully parsed**.

- Maintains the **execution order** of multiple scripts.

- Best for scripts that depend on DOM.