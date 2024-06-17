import { useContext } from "react";

import { ShoppingCartContext } from "../../Contexts/ShoppingCartProvider";
import { SideMenu } from "../../Containers/SideMenu";
import { OrderCard } from "../OrderCard";

const CheckoutMenu = () => {
  const { isCheckoutOpen, onCloseCheckout, cartProducts } =
    useContext(ShoppingCartContext);

  return (
    <SideMenu
      title='My Orders'
      isOpen={isCheckoutOpen}
      onClose={onCloseCheckout}
    >
      <div className='px-6'>
        {!cartProducts && (
          <p className='text-white font-light'>
            <strong className='font-normal'>Here are no products</strong>
            <br />
            Try add a product to the cart.
          </p>
        )}
        {cartProducts.map(({ id, title, image, price }) => (
          <OrderCard
            key={id}
            id={id}
            title={title}
            imageUrl={image}
            price={price}
          />
        ))}
      </div>
    </SideMenu>
  );
};

export { CheckoutMenu };
