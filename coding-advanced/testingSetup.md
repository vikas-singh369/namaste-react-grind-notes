# Testing setup

1. Intall React testing Library [link](https://testing-library.com/docs/react-testing-library/intro/)

2. React testing library uses jest so we need to intall jset

npm i -D jest

3. we are using babel as a bunddler so we need to install some extra libraries for the additional configurations. [jest-docs](https://jestjs.io/docs/getting-started)

4. babel config [config](./babel.config.js)

5. we just added the babel config but our bunddler also have babel configuration that conflict. to solve the we write config to disable that behavior the parcel config .
 .parcelrc file

 5. config the jest "npm init jest" 
  [see](./jest.config.js)

 6. config setup also required for the TextEncoder and Decoder [see](./jest.setup.js)

 7. we are using js-dom for test enviornment. but there is no server or browser. for running test cases we need browers like enviornment. 

 Install js dom enviornment

npm i -D jest-environment-jsdom


8. when we test react jsx based component we enconter error.So we are not able to render the component that uses JSX. we need to enable it.

to enable jsx testing we need babel/preset-react library that understand the react.

install babel: npm i -D @babel/preset-react


9. After intall Set configuration for the react.

[see](./babel.config.js)

10. we need one more library to use dom functions.

npm i -D @testing-library/jest-dom.

its enable testing for dom and give so much dom functions.

**Note:** We can use `it` instead of `test` keyword.


[Code](./src/components/__tests__/)


