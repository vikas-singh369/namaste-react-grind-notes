# Laying the Foundation - Episode 3

## 1. What is JSX?
JSX is a syntactic sugar for `React.createElement()` allowing as to write  HTML like code in javascript for React Components.


## 2. SuperPowers of JSX ?? 

1. Security - prevents XSS Attacks

if someone sends some malicious data through javascript like stealing cookies, get info about device, and read the data. JSX automatically esacape that harmful data before showing it on the screen.

This helps protect our app from Cross-Site Scripting (XSS) attacks.

2. Makes code readable 
instant of writng long React.createElement() , JSX makes easier HTML like code.

3. Makes code simple and elegant

4. Show more useful errors and warnings

## 3. Role of type attributes in script tag ? 

It tells browser which kind of script is inside ( javascript , module, json, etc).
 MIME type (Multipurpose Internet Mail Extensions)

Common `type` values
- `text/javascript` - Default javascript( can be skipped)

- `module` - For ES6 module(support import/export)

- `application/json` - Embed raw json data in html

- `text/babel` - JSX/ES6 (used with babel)

- `text/typescript` - TypeScript(requires compiler)

[Code](../coding-basics/App.js)

**By vikas singh**
