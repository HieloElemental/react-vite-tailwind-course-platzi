import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const onAddHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <ShoppingCartContext.Provider value={{ count, onAddHandler }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ShoppingCartProvider, ShoppingCartContext };
