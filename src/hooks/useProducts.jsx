import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [inputProductsByTitle, setInputProductsByTitle] = useState("");
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

  useEffect(() => {
    !error && fetchData();
  }, [error]);

  return {
    products,
    isLoading,
    error,
    setInputProductsByTitle,
    inputProductsByTitle,
    clearError,
  };
};

export { useProducts };
