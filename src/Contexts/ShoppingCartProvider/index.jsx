import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const onAddHandler = (event, newProduct) => {
    event.stopPropagation();
    const repeatedProduct = cartProducts.filter((p) => p.id === newProduct.id);
    if (!repeatedProduct.length) {
      let newCartProducts = [...cartProducts, newProduct];
      setCartProducts(newCartProducts);
      setCount(newCartProducts.length);
      setIsCheckoutOpen(true);
    }
  };

  const onCloseCheckout = () => setIsCheckoutOpen(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        cartProducts,
        count,
        onAddHandler,
        isCheckoutOpen,
        onCloseCheckout,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ShoppingCartProvider, ShoppingCartContext };
