import { useContext } from "react";

import { Layout } from "../../Containers/Layout";
import { OrdersContext } from "../../Contexts/OrdersProvider";
import { OrderCard } from "../../Components/OrderCard";

const MyOrder = () => {
  const { orders } = useContext(OrdersContext);
  console.log(orders);

  return (
    <Layout>
      My Order
      <div className='flex flex-col max-w-lg'>
        {orders.length === 0 && (
          <p className='text-white font-light'>
            <strong className='font-normal'>Here are no products</strong>
            <br />
            Try add a product to the cart.
          </p>
        )}
        {orders.length > 0 &&
          orders
            ?.slice(-1)[0]
            .products.map(({ id, title, image, price }) => (
              <OrderCard
                key={id}
                id={id}
                title={title}
                imageUrl={image}
                price={price}
              />
            ))}
      </div>
    </Layout>
  );
};

export { MyOrder };
