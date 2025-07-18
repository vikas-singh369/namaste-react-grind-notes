# Note: - laying the foundation

## More about JSX
* JSX is not part of React;

* React apps can work without JSX, but it'll be hard to read.

* JSX is not HTML inside JavaScript.

* JS engine doesn't understand JSX; it only knows ECMAScript.

## Is JSX is a valid JavaScript ?

- ✅ Yes and ❌ No — it's not pure JavaScript or HTML.

- JS engine can’t understand JSX directly.

- JSX isn't built into JS; browsers need it compiled (by Babel).

- JS understands ECMAScript, not JSX by default.

##  What will happen if we call 2 elements inside each other?
If we put 2 components inside each other, then it will go into
an infinite loop and the stack will overflow. It will freeze
your browser, so it’s not recommended to do so.