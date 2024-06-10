import { Card } from "../../Components/Card";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <div className='flex items-start content-around flex-wrap gap-4 px-12'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export { Home };
