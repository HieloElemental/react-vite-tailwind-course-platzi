import { useContext } from "react";

import { ShoppingCartContext } from "../../Contexts/ShoppingCartProvider";
import { SideMenu } from "../../Containers/SideMenu";
import { OrderCard } from "../OrderCard";

import { calcTotalPrice } from "../../utils/calcTotalPrice";

const CheckoutMenu = () => {
  const { isCheckoutOpen, onCloseCheckout, cartProducts, onDeleteHandler } =
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
            onDeleteHandler={onDeleteHandler}
          />
        ))}
      </div>
      <div className='px-6'>
        <p className='flex justify-between items-center'>
          <sapn className='font-light'>Total:</sapn>
          <sapn className='font-medium text-2xl'>
            ${calcTotalPrice(cartProducts).toFixed(2)}
          </sapn>
        </p>
      </div>
    </SideMenu>
  );
};

export { CheckoutMenu };
