import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

import Contact from "./components/Contact";
import Error from "./components/Error";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { lazy, Suspense, useContext, useEffect, useState} from "react"
import UserContext from "./utils/UserContext";


const About = lazy(()=> import("./components/About"));


const AppLayout = () => {
  const {logedInUser} = useContext(UserContext)
  const [ userName, setUserName] = useState(logedInUser)

  useEffect(()=>{
  // any api call lets geuss
  
  const data = {
    name: "Papa"
  }
  setUserName(data.name)
},[])

  return (
    <UserContext.Provider value={{logedInUser: userName, setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
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
        element: <Suspense fallback = {
          <h1>Loading...</h1>
        }>
          <About />
        </Suspense>
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
