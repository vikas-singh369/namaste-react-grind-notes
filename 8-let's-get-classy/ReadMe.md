# let's Get classy 

## 1 How do you create Nested Routes react-router-dom cofiguration ? 
There are two common ways to create nested `Routes` in Apps using `react-routes`

### 1. Traditional way { JSX based approach }

Uses `<Routes >` and `<Route />` component and wrap up `BrowserRouter` component. We define childs routes inside parent route and use `<Outlet />` in the parent element to render the component.

```
<BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/denied" element={<Denied />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      <Routes>
</BrowserRouter> 
```

### 2. Data Driven way { CreateBrowserRouter }

It is a modern and powerful way to configure routes using an `object-based structure`. Ideal for apps that use `loaders`, `actions`, or `nested layouts`.

```
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "sign-up",
        element: <SignUp />
      }
    ],
    errorElement: <Error />
  }
])
```

In Both ways using `<Outlet />` to the parent component to render based on the click and route child component.


## 2 Read abt createHashRouter, createMemoryRouter from React Router docs.

`createHashRouter` and `createMemoryRouter` are morden alternatives for traditional ( older ) `HashRouter` and `MemoryRouter`.


**`createHashRouter`**
used when app is hosted on static file servers like Github pages that don't support server-side-routing.

- Everything after `#` is handled by React Router.
- URLs look like: `https://vikassingh.in/#/about`.
- No server configurations needed.

**use cases:** 

- Developing any static host like netlify, github pages.

- Avoiding 404s on page refresh.

```
import { createHashRouter, RouterProvider } from 'react-router-dom';

const router = createHashRouter([
  { path: "/", element: <App /> },
  { path: "about", element: <About /> }
]);

```
- SEO: Less SEO-friendly due to hash-based URLs.

**`createMemoryRouter`** 
used for testing or non-browser envirnonments. it stores the history in memory, not in the URL bar.


- No interaction with real browser address bar.
- navigation is tracked internally.
- ideal for unit tests or embedded apps.

**use cases:** 
- Component testing e.g. Jest or React testing library.

- simulating navigation without affecting the browser.
- React native or electron apps.


## 3. What is the order of life cycle method calls in Class Based Components.
`constructor()`-> `render()`-> `componentDidMount()`-> `componentDidUpdate()` -> `componentWillUnmount()`

**Constructor:** First Constructor method is called when component is created. It's initilize component  state and bind event handlers.

**Render:** After the constructor method called render method is called. Render method is responsible for rendering the component's UI. It must return jsx/ React element.

**ComponentDidMount:** ComponentDidMount method immediatly called after the component insert into the DOM. It's often used for making request like api call or subscription and one time initilizations.

**ComponentDidUpdate:** This method is called after the component has been updated,re-render the the component due to changes on state or props. It's often used for side effects like state or props changes then updating the DOM response.


**ComponentWillUnmount:** This method is called just we leave the component or we say unmount the compenent then it call. It's used to perform any necessary cleanup.

## 4. Why do we use componentDidMount?
ComponentDidMount react class based component method it is used for specific perpose.It is immediately called after the component is inserted into the DOM. This makes a very crucial point in the component lifecycle to perform various task to interact with the DOM or externel resourse.

There is a some common example for this :
**1.Fetching-Data:** It is often used to perform asynchronous tasks like fetching data from an API. Once the data is received, the component updates and displays dynamic content.

**2.Dom-Manipulations:** It can be used to directly manipulate the DOM, such as foucusing an input field adding event listner, intracting third party libraries such as charts or sliders etc.

## 5. Why do we use componentWillUnmount? Show with example


## 6. (Research) Why do we use super(props) in constructor?

## (Research) Why can't we have the callback function of useEffect async?