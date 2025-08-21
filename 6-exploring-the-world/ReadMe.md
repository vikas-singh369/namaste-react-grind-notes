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


 ## 5. 