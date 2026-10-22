import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router";
// import { UserContext } from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import MemoPerformance from "./components/Performances/Memo-Performance";
import CallBackPerformance from "./components/Performances/CallBackPerformance";
import ReferencePerformance from "./components/Performances/RefDom";


//----low Level for Fooder Ordering app----
//Header -> logo, navitems , cart
//Body -> cardContainer , cards;
//Footer -> copyright, links address;

//Lazy Loading
const GroceryItems = lazy(() => import("./components/GroceryItems"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact-Us"));
const CartItems = lazy(() => import("./components/CartPage"));
const FakeApi = lazy(() => import("./components/FakeApi"));

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    const data = {
      name: "use context data",
    };
    setUserInfo(data?.name);
  }, []);
  return (
    // <UserContext.Provider value={{ curr_name: userInfo, setUserInfo }}>
    <Provider store={appStore}>
      <div className="app">
        <Header />
        {/* to render the children routes */}
        <Outlet />
      </div>
    </Provider>
    // </UserContext.Provider>
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
        path: "/cart",
        element: (
          <Suspense fallback={"loading cart items...."}>
            <CartItems />
          </Suspense>
        ),
      },
      {
        path: "/fake-api-redux",
        element: (
          <Suspense fallback={"loading fake api data...."}>
            <FakeApi />
          </Suspense>
        ),
      },
      {
        path: "/performances-test",
        element: (
          <div className="flex">
            <MemoPerformance />
            <CallBackPerformance />
            <ReferencePerformance/>
          </div>
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
