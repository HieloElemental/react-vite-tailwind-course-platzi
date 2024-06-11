import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

import { ProductDetailContext } from "../../Contexts/ProductDetailProvider";

const ProductDetail = () => {
  const {
    isProductDetailOpen,
    onCloseProductDetail,
    selectedProduct: { image, title, price, description },
  } = useContext(ProductDetailContext);

  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } overflow-y-auto w-full h-[calc(100vh-60px)] z-10 top-[60px] right-0 rounded-l-lg max-w-xs flex-col fixed bg-gray-900 text-white border border-gray-700`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Details</h2>
        <div onClick={onCloseProductDetail} className='cursor-pointer'>
          <XMarkIcon className='size-6' />
        </div>
      </div>
      <figure className='px-6'>
        <img className='w-full h-full rounded-lg' src={image} alt={title} />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl'>${price}</span>
        <span className='font-medium text-md'>{title}</span>
        <span className='font-light text-sm line-clamp-6' title={description}>
          {description}
        </span>
      </p>
    </aside>
  );
};

export { ProductDetail };
