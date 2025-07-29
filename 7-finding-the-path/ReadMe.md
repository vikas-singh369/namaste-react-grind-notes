# Finding the Path

## 



## What would happen if we do console.log(useState())?

When we do `console.log(useState())` it returns an array of two elements.
1. **Current state value** - initially `undefined` if the default is no provided.
2. **A function that update the state**

```
let result = useState();
console.log(result) // undefined , function
```

## How will useEffect behave if we don't add a dependency array ?

if we don't add dependecy array to `useEffect`, it runs after every time when componet re-render. intial mount and also every render subsequent ones because React can't optimize when to skip it.

when we pass empty dependecy array its run for only initial mount.

## What is SPA?
SPA(Single Page Application) is a web app that loads ones and updates the UI dynamically without refreshing the entire page.We just interchange the components.

## What is difference between Client Side Routing and Server Side Routing?

**Client Side Routing** : In client-side routing, when the user clicks on a link, the URL changes without making a full page reload.The JavaScript framework (like React Router) it allows our app to update the URL from the Link click and show the right component without making another request.


**Server Side Rounting** : In server-side routing, every link click triggers a request to the server, which responds with a new HTML document. This is the traditional way websites worked before the SPAs became common.


summary: Client-side routing updates the UI using JavaScript without reloading the page, while server-side routing loads a whole new page from the server on every navigation.