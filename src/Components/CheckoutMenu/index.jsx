import { useContext } from "react";

import { ShoppingCartContext } from "../../Contexts/ShoppingCartProvider";
import { SideMenu } from "../../Containers/SideMenu";

const CheckoutMenu = () => {
  const { isCheckoutOpen, onCloseCheckout } = useContext(ShoppingCartContext);

  return (
    <SideMenu
      title='My Orders'
      isOpen={isCheckoutOpen}
      onClose={onCloseCheckout}
    ></SideMenu>
  );
};

export { CheckoutMenu };
