# Let's get Hooked 

[coding assignment](../coding-advanced/ReadMe.md)
## What is the difference between Named Export, Default export and * as export?

**Named Export** : Named Export used for sharing multiple functions or variables 

```
export const CDN_URL = "something.com"

export const handleInput = ()=>{
  // logic
}
```

**Default Export** : Default exprot for the single primary value 

note: in one file only one default export otherwise throw error

```
export default Header
```

** * as ** : Namespace import, import the module as name.
```
import * as utils from './module';
utils.greet();
```
* Used only for imports, not for direct exports.

* Collects all named exports—functions, variables, etc.—under a single alias

* Does not include default exports; they must be imported separately


## What is the importance of config.js file ? 

The `config.js` file is used to store all the app's reusable and envirnment specific configuration values like API URLs, key , features, flags etc. in one centralized place.

this makes the codebase clean, easy to maintain and scalable, because we avoid hardcoding value throughout the app.


## What are React Hooks?
React Hooks are pre-built JavaScript functions provided by React to let us use React feature like state , lifecycle and context inside componet.

They are built-in, have underlying logic written by React devs, and help us write cleaner, more reusable code. 

Some of the most commonly used hooks are:

useState – to manage local component state

useEffect – to handle side effects (like data fetching, subscriptions, etc.)


## Why do we need a useState Hook?

For stateful logic, `useState` allows us to store, update, and track data, so React automagically re-renders the UI whenever the state changes.

** By vikas singh**