import { useContext } from "react";
import { PropTypes } from "prop-types";
import { PlusIcon } from "@heroicons/react/24/solid";

import { ShoppingCartContext } from "../../Contexts/ShoppingCartProvider";

const Card = ({ data: { category: categoryName, image, title, price } }) => {
  const { onAddHandler } = useContext(ShoppingCartContext);

  return (
    <div className='w-64 h-80 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer'>
      <figure className='relative mb-2 w-full h-4/6'>
        <span className='absolute bottom-0 left-0 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3 m-2'>
          {categoryName}
        </span>
        <img
          className='w-full h-full object-cover rounded-t-lg'
          src={image}
          alt=''
        />
      </figure>
      <div className='pt-2 px-5 pb-5'>
        <a
          href=''
          className='text-md font-semibold tracking-tight text-gray-900 dark:text-white'
        >
          <p className='truncate' title={title}>
            {title}
          </p>
        </a>
        <div className='flex items-center justify-between py-1'>
          <span className='text-2xl font-bold text-gray-900 dark:text-white'>
            ${price}
          </span>
          <a
            onClick={onAddHandler}
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            <PlusIcon className='size-5 inline' /> Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export { Card };
