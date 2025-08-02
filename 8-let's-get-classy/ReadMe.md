# let's Get classy 


## How do you create Nested Routes react-router-dom cofiguration ? 

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


## Read abt createHashRouter, createMemoryRouter from React Router docs.
