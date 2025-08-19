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



