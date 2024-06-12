import { useRoutes, BrowserRouter } from "react-router-dom";

import { ShoppingCartProvider } from "../../Contexts/ShoppingCartProvider";
import { ProductDetailProvider } from "../../Contexts/ProductDetailProvider";
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
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ]);
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <ProductDetailProvider>
        <BrowserRouter>
          <NavBar />
          <ProductDetail />
          <CheckoutMenu />
          <Layout>
            <AppRoutes />
          </Layout>
        </BrowserRouter>
      </ProductDetailProvider>
    </ShoppingCartProvider>
  );
};

export default App;
