import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
// import Contact from "./components/Contact-Us";
// import GroceryItems from "./components/GroceryItems";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router";

//----low Level for Fooder Ordering app----
//Header -> logo, navitems , cart
//Body -> cardContainer , cards;
//Footer -> copyright, links address;

//Lazy Loading
const GroceryItems = lazy(() => import("./components/GroceryItems"));
const About = lazy(()=> import('./components/About'));
const Contact = lazy(()=> import('./components/Contact-Us'))

const AppLayout = () => {
  return (
    <div className="app">
      <Header />

      {/* fto render the children routes */}
      <Outlet />
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
        element: <Suspense fallback={'loading About Details....'}><About /></Suspense>,
      },
      {
        path: "/contact",
        element:<Suspense fallback={"loading Contact Details...."}><Contact /></Suspense>,
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
