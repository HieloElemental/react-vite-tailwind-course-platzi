import { useRoutes, BrowserRouter } from "react-router-dom";

import { ShoppingCartProvider } from "../../Contexts/ShoppingCartProvider";
import { ProductDetailProvider } from "../../Contexts/ProductDetailProvider";
import { OrdersProvider } from "../../Contexts/OrdersProvider";
import { ProductDetail } from "../../Components/ProductDetail";
import { CheckoutMenu } from "../../Components/CheckoutMenu";
import { Home } from "../Home";
import { MyAccount } from "../MyAccount";
import { MyOrder } from "../MyOrder";
import { MyOrders } from "../MyOrders";
import { NotFound } from "../NotFound";
import { SignIn } from "../SignIn";
import { NavBar } from "../../Components/NavBar";
import { Layout } from "../../Containers/Layout";

import "./App.css";

const AppRoutes = () => {
  return useRoutes([
    { path: "/react-vite-tailwind-course-platzi/", element: <Home /> },
    {
      path: "/react-vite-tailwind-course-platzi/electronics",
      element: <Home category='electronics' />,
    },
    {
      path: "/react-vite-tailwind-course-platzi/jewelery",
      element: <Home category='jewelery' />,
    },
    {
      path: "/react-vite-tailwind-course-platzi/mens-clothing",
      element: <Home category={`men's clothing`} />,
    },
    {
      path: "/react-vite-tailwind-course-platzi/womens-clothing",
      element: <Home category={`women's clothing`} />,
    },
    {
      path: "/react-vite-tailwind-course-platzi/my-account",
      element: <MyAccount />,
    },
    {
      path: "/react-vite-tailwind-course-platzi/my-orders",
      element: <MyOrders />,
    },
    {
      path: "/react-vite-tailwind-course-platzi/my-orders/:id",
      element: <MyOrder />,
    },
    { path: "/react-vite-tailwind-course-platzi/sign-in", element: <SignIn /> },
    { path: "/react-vite-tailwind-course-platzi/*", element: <NotFound /> },
  ]);
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <ProductDetailProvider>
        <OrdersProvider>
          <BrowserRouter>
            <NavBar />
            <ProductDetail />
            <CheckoutMenu />
            <Layout>
              <AppRoutes />
            </Layout>
          </BrowserRouter>
        </OrdersProvider>
      </ProductDetailProvider>
    </ShoppingCartProvider>
  );
};

export default App;
