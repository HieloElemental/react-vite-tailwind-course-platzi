import { useContext } from "react";

import { Layout } from "../../Containers/Layout";
import { OrdersCard } from "../../Components/OrdersCard";
import { OrdersContext } from "../../Contexts/OrdersProvider";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

const MyOrders = () => {
  const { orders } = useContext(OrdersContext);

  return (
    <Layout>
      <h1>My Orders</h1>

      {orders.map(({ totalPrice, totalProducts, date, id }) => {
        return (
          <Link to={`/my-orders/${id}`} key={date}>
            <OrdersCard totalPrice={totalPrice} totalProducts={totalProducts} />
          </Link>
        );
      })}
    </Layout>
  );
};

export { MyOrders };
