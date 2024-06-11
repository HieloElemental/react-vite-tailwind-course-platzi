import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

const ProductDetailContext = createContext();

const ProductDetailProvider = ({ children }) => {
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  const onOpenProductDetail = () => {
    setIsProductDetailOpen(true);
  };

  const onCloseProductDetail = () => {
    setIsProductDetailOpen(false);
  };

  return (
    <ProductDetailContext.Provider
      value={{ isProductDetailOpen, onOpenProductDetail, onCloseProductDetail }}
    >
      {children}
    </ProductDetailContext.Provider>
  );
};
ProductDetailProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ProductDetailProvider, ProductDetailContext };
