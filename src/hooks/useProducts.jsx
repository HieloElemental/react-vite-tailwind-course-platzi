import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProductsByTitle, setFilteredProductsByTitle] = useState([]);
  const [filteredProductsByCategory, setFilteredProductsByCategory] = useState(
    []
  );
  const [selectedCategory, setSelectedCategory] = useState(null);

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
      console.log(data);
      setFilteredProductsByCategory(data);
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
      setFilteredProductsByTitle(
        filterProductsByTitle(filteredProductsByCategory, inputProductsByTitle)
      );
  }, [inputProductsByTitle]);

  useEffect(() => {
    setFilteredProductsByCategory(
      products.filter((product) => product.category === selectedCategory)
    );
  }, [selectedCategory]);

  return {
    products,
    isLoading,
    error,
    setInputProductsByTitle,
    inputProductsByTitle,
    filteredProductsByTitle,
    filteredProductsByCategory,
    clearError,
    setSelectedCategory,
  };
};

export { useProducts };
