import { Alert } from "../../Components/Alert";
import { Card } from "../../Components/Card";
import { Skeleton } from "../../Components/Card/Skeleton";
import { useProducts } from "../../hooks/useProducts";

const Home = () => {
  const { products, isLoading, error, clearError } = useProducts();

  return (
    <>
      <h1>Home</h1>
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
        {products.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </>
  );
};

export { Home };
