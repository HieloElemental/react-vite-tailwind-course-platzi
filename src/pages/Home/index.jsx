import { Alert } from "../../Components/Alert";
import { Card } from "../../Components/Card";
import { Skeleton } from "../../Components/Card/Skeleton";
import { useProducts } from "../../hooks/useProducts";

const Home = () => {
  const {
    products,
    isLoading,
    error,
    clearError,
    inputProductsByTitle,
    setInputProductsByTitle,
    filteredProducts,
  } = useProducts();

  return (
    <>
      <h1 className='font-medium text-2xl mb-4'>Home</h1>
      <input
        type='text'
        placeholder='Search Products'
        className='rounded-lg border border-white bg-black w-80 py-2 px-4 mb-4 focus:outline-none'
        value={inputProductsByTitle}
        onChange={(event) => setInputProductsByTitle(event.target.value)}
      />
      {error && (
        <Alert
          type='danger'
          title='Whoops!'
          text='Something was wrong'
          onClose={clearError}
        />
      )}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4'>
        {isLoading &&
          Array.from({ length: 15 }, (_, index) => <Skeleton key={index} />)}
        {!inputProductsByTitle &&
          products.map((data) => <Card key={data.id} data={data} />)}
        {inputProductsByTitle && filteredProducts.length === 0 && (
          <p>No products found</p>
        )}
        {inputProductsByTitle &&
          filteredProducts.length > 0 &&
          filteredProducts.map((data) => <Card key={data.id} data={data} />)}
      </div>
    </>
  );
};

export { Home };
