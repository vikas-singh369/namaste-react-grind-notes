import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import SignUp from "./components/SignUp";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
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

// new way to write this  v^6 +
const appRouter2 = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        index: true, // parent element
        Component:Body 
      },
      {
        path: "/about",
        Component:About 
      },
      {
        path: "/contact",
        Component: Contact
      },
      {
        path: "/restaurant/:resId",
        Component:RestaurantMenu
      },
      {
        path: "login",
        Component: Login
      },
      {
        path: "sign-up",
        Component: SignUp
      }
    ],
    errorElement: <Error />
  }
])

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
