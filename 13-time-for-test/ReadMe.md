# Time for test

## 1. What are different types for testing?

There are mainly two types of testing 

1. Manual Testing : Testing the functions, features, and application flow manually through the UI, based on human observation without using automation tools.

2. Automation Testing: Write test cases for testing functionality. 

It include three type of testing

- **Unit Testing:** Write a test case for one unit or one part and create a isolated enviornment for that specific part.

- **Integration Testing:** Writing test cases for testing flow or we say connected componets like example search bar flow , when i click button that filter some cards in page how its flow work.

- **End-to-End Testing: ** Writing test cases for senario like user enters to exitst. checks all the flows.



## 2. What is Enzyme?
Enzyme is a javascript testing library created by airbnb , that provide JavaScript Testing utilities for React, internals like state, props, and lifecycle methods.

Enzyme is no longer actively maintained and is being replaced by React-testing library.

## 3. Enzyme vs React-testing library?
**Enzyme :** -> Enzyme tests implementation details like component state, props, or methods. uses `shallow` , `mount`. Deprecated now.

**React-Testing-Libray ** -> Tests from user's perspective ( UI behaviour). Uses Queries like `getByText` and `fireEvent`. And actively maintained, React team recommended.


## 4. What is Jest and why do we use it?
- Jest is javascript testing framework developed by facebook. 
- It is used for javascript React apps.
- We use jest because it's fast, has built in features like mocking and snapshot testing and requires minimal configuration.



[Code-files](../coding-advanced/ReadMe.md)


**By vikas singh**
