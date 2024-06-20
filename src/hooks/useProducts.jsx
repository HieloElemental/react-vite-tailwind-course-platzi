import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [inputProductsByTitle, setInputProductsByTitle] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=40"
      );
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
      setError(false);
    } catch (e) {
      setIsLoading(false);
      setError(e);
    }
  };

  const clearError = () => {
    setError(false);
  };

  const filterProductsByTitle = (products, query) => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  useEffect(() => {
    !error && fetchData();
  }, [error]);

  useEffect(() => {
    if (inputProductsByTitle)
      setFilteredProducts(
        filterProductsByTitle(products, inputProductsByTitle)
      );
  }, [inputProductsByTitle]);

  return {
    products,
    isLoading,
    error,
    setInputProductsByTitle,
    inputProductsByTitle,
    filteredProducts,
    clearError,
  };
};

export { useProducts };
