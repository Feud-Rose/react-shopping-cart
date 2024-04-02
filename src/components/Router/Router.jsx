import {createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import ErrorPage from "../ErrorPage/ErrorPage";
import Store from "../Store/Store";
import App from "../../App";
import Checkout from "../Checkout/Checkout";



const Router = () => {
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    { 
      path: "/Store",
      element: <Store />
    },
    { 
      path: "/Checkout",
      element: <Checkout />
    }
]
}
]);

    return (
    <>
      <RouterProvider 
          router={router} 
          // fallbackElement={< ADD LOADING Feedback Here/>}
      />
     
    </>
    );
}

  export default Router;