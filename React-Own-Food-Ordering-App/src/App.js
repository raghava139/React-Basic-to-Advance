import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
// import Contact from "./components/Contact-Us";
// import GroceryItems from "./components/GroceryItems";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router";
import { UserContext } from "./utils/userContext";

//----low Level for Fooder Ordering app----
//Header -> logo, navitems , cart
//Body -> cardContainer , cards;
//Footer -> copyright, links address;

//Lazy Loading
const GroceryItems = lazy(() => import("./components/GroceryItems"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact-Us"));

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    const data = {
      name: "use context data",
    };
    setUserInfo(data?.name);
  }, []);
  return (
    <div className="app">
      <UserContext.Provider value={{ curr_name: userInfo, setUserInfo}}>
        <Header />
        {/* to render the children routes */}
        <Outlet />
      </UserContext.Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={"loading About Details...."}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={"loading Contact Details...."}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={"loading grocery items...."}>
            <GroceryItems />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
