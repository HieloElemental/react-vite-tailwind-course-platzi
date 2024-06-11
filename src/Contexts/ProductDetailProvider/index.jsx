import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

const ProductDetailContext = createContext();

const ProductDetailProvider = ({ children }) => {
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const onSelectProductDetail = (product) => {
    setIsProductDetailOpen(true);
    setSelectedProduct(product);
  };
  const onCloseProductDetail = () => setIsProductDetailOpen(false);

  return (
    <ProductDetailContext.Provider
      value={{
        isProductDetailOpen,
        onSelectProductDetail,
        onCloseProductDetail,
        selectedProduct,
      }}
    >
      {children}
    </ProductDetailContext.Provider>
  );
};
ProductDetailProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ProductDetailProvider, ProductDetailContext };
