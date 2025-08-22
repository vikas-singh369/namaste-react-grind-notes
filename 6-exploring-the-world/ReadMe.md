# Exploring the world

## 1. What is Monolith architecture?

A monolithic architecture is a single, unified software application where all the components such as the user interface , bussiness logic, data access layer are bunddled together and deployed as a one unit.

Single codbase -> entire app is built and maintained together.

single deployment-> any changes requies entire app re-deploying

Tight-coupling -> all modules are interconnected, making scaling specific part is little harder.

Example: suppose a e-commerce application built as a monolith.

- user authentication , product catalog, shopping cart, payment and notification are all part at the same app.

- when we update `payment-module` entire app needs to re-deploying.

**Advantages:**

- easy test and deploy small app.
- work well for the small team.
- initially easy deploy.

**Disadvantages:**

- Hard to scale specific features
- one bug can down the entire system (downtime risk)
- difficult to adpot new technoloy
- slow down development speed when app grows

## 2. What is a Microservice?

Microservice architecture is an approach where a large appliction is divided into a collection of small, indepentent services, each responcible for specific bussiness functions.

- Each service has its own codebase, bussiness logic, and database (if needed).

- They can be developed and scaled independently.

Exapmle:

for an e-commerce application

- User Service -> handle the authentication and profiles.

- Produuct service -> manage catalog.

- Cart service-> manges shopping carts

- Payment service -> proceess transactions

if suppose traffic increses and payment transication increases then we scale the payment service then only payment service scale not entire system.


**Advantages:**
- Technology flexibility ->  Different services can use different languages, framework even database.

- Simpler Development and maintanance -> Breaks complex application into smaller, and managable parts.

- Scalability -> service scale independently.

- independent Teams-> Teams can own deploy their services.

- Single Responsibility -> Every service has its own job, this Following the principle of single responsibility. This ensure efficient deployment.



**Challenges:**

- Complex communication between services.

- Data management becomes tricky when each services has its own database.

- High infrastructure cost compared to monolith for small apps.


## 3. What is the difference between Monolith and Microservice?

### Monolith vs Microservices

 | Feature | Monolith | microservices |
 |---------|----------|---------------|
 |**Architecture/Structure**| One big unified application | Applicatin divided into small services |
 |**Deployment**| Deployed as a single unit | Each service deployed indenpendently |
 |**Scalibility**| Entire app must be scaled | Each service independently scale |
 |**Technology**| usually one tech stack | different service can use different tech stack |
 |**Failure Impact**| one bug can crash entire app | bug can one service doesn't affect other service |
 | **Best Use Case**  | Small, simple apps (MVPs, startups)    | Large, complex apps (Amazon, Netflix) |


 ## 4. Why do we need a useEffect Hook?

 We need `useEffect()` hook to handel `side effects` in functional components.

 **Side Effects:** like anything that affects outside's the scope of the functions return value. such as 

 - Feteching data from an API.
 - working with `setTimeOut()` and `setInterval()`.
 - updating DOM manually.
 - Setting up the `subscriptions` and `event-listener`.

 **Why useEffect()** because Functional componets is a pure function that only return UI, not perform  the side effects directly.

 - Before Hooks side effect only possiable in class components using `react life cycle methods` like `componentDidMount()`, `componentDidUpdate()` and `componentWillUnmount()`.

 with useEffect we perform side effects in functional components.


 ```
   useEffect(()=>{
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return ()=>{
      window.removeEventListener("offline" , handleOffline);
      window.removeEventListener("online", handleOnline);
    }
  },[]);
 ```


 ## 5. What is Optional Chaining?
Optional Chaining is a javascript features used to **safely access the nested object properties** without worrying about the error ( if error )

```
const user = {
  name: "Vikas",
  address: {
    city: "bilaspur"
  }
};


console.log(user.address.city);   // "bilaspur"
console.log(user.address.pincode); // undefined

console.log(user.contact.email); // Error : not defined
```

**Using Optional Chaining**

```
console.log(user?.address?.city);   // "bilaspur"
console.log(user?.address?.pincode); // undefined

console.log(user?.contact?.email); // undefined
```

## 6. What is Shimmer UI?
Shimmer UI is a **Loading placeholder technique** that show `shimmering` animation. Instant of showing black screen , white screen or spinner while real data being fetched its a good way to show real data **skeleton like structure**.


## 7. What is the difference between JS expression and JS statement ?

An **expression** is code that evaluates to value ex `5+3` `x=30`.It can be value, variable , function call or a combination of operators.

`a && b` or `a || b`.


**Statement:** is a complete instruction that perform action Example : `if`, `for`, `return`.
expression can a part of statement but statement don't always produce value.


## 8. What is Conditional Rendering, explain with a code example 

Conditional rendering means showing different UI based on the certain conditions. 

For Ex: If user logged in , show the dashboarde otherwise show login page.

this Example using js Expression
```
let isLoggedIn = false;

let page = isLoggedIn ? "Show Dashboard" : "Show Login Page";

console.log(page);
```

## 9. What is CORS?
CORS stand for cross-origin resorce sharing.

It is a browser security mechanism using additional  HTTP headers to to allow restrict resource sharing between different app origin.


## 10. What is async and await?
async await is a syntactic sugar over promises its morden approach to handle promises with easier and more readable way and avoid `callback hell` or deeply chained `.then()` calls.

**async:** When we declare function with `async` it always return promise even if we return a simple value.

**await** : await we used inside a `async` function to pause the execution until the promise is resolved or rejected.

This helps asynchronous code in synchronous style, easier to raed and maintain.


```
async function fetchData() {
  try {
    const response = await fetch("foodApi.com/restaurant");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```


## 11. What is the use of `const json = await data.json();` in getRestaurants()

`const json = await data.json();` is used to convert the **raw HTTP Response** into a usable object so we directly work on it.

It takes time to parsing raw response to usable object that's why we pause the execution and use `await`.
