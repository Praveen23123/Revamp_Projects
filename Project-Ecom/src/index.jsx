import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import ProductLayout from "./components/ProductsLayout";
import ProductCard from "./components/ProductCard";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductOverview from "./components/ProductOverview";
import Contact from "./components/Contact";
import Features from "./components/Features";
import ImageComponent from "./components/ImageComponent";

const App = () => {
  return (
    <>
      <ProductLayout />
    </>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/products",
        element: <ProductCard />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/products/:product_id",
        element: <ProductOverview />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/image",
        element: <ImageComponent />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
