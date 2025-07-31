# Finding the Path

## What are various ways to add images into our App? Explain with code examples ??

There are mainly four common way to add image in our app.

**1. Import Locally Stored image**
this is the most common method to add image when we are using bunddler.

```
import React from "react";
import logo from "./assets/logo.png"

function Header (){
  return (
    <div>
    <img src = {logo} alt = "app logo" />
    </div>
  )
}

```
using CSS 
```
.hero {
  background-image: url("/bg.png"); /* if in public */
}
```

**2. using External URLs (CDN)**
If our image hosted on the internet we just use hosted url to add image.

```
function RestaurantMenuBanner() {
  return (
    <img
      src="https://example.com/banner.png"
      alt="Banner"
    />
  );
}
```

**3. using `public` folder** 
if image stored in public folder, we can refrence it directly with a relative URL from the root

*This method is useful for handling large image assets or for dynamic image URLs.

```
<img src = "/logo.png" alt = "logo" />
```

** 4. Dynamic image import**
sometimes used when the image path is dynamic.

```
function ProductImage({name}){
  const image = require(`./assets/products/${name}.png`)
  return < img src= {image} alt = {name} />
}
```

can't be fully dynamic.

## What would happen if we do console.log(useState())?

When we do `console.log(useState())` it returns an array of two elements.
1. **Current state value** - initially `undefined` if the default is no provided.
2. **A function that update the state**

```
let result = useState();
console.log(result) // undefined , function
```

## How will useEffect behave if we don't add a dependency array ?

if we don't add dependecy array to `useEffect`, it runs after every time when componet re-render. intial mount and also every subsequent ones because React can't optimize when to skip it.

when we pass empty dependecy array its run for only initial mount.

## What is SPA?
SPA(Single Page Application) is a web app that loads ones and updates the UI dynamically without refreshing the entire page.We just interchange the components.

### key features of SPAs include
- dynamic updates: content is loaded and update without full page reload.This is achieved by client side routing.

- Smooth user experience
- Faster Initial load
- Client Side routing
- State management
- API centric: - e the client
communicates with a backend API to fetch and send data, usually in JSON format.
This allows for decoupling the front end and back end.

## What is difference between Client Side Routing and Server Side Routing?

**Client Side Routing** : In client-side routing, when the user clicks on a link, the URL changes without making a full page reload.The JavaScript framework (like React Router) it allows our app to update the URL from the Link click and show the right component without making another request.


**Server Side Rounting** : In server-side routing, every link click triggers a request to the server, which responds with a new HTML document. This is the traditional way websites worked before the SPAs became common.


summary: Client-side routing updates the UI using JavaScript without reloading the page, while server-side routing loads a whole new page from the server on every navigation.


**By vikas singh**