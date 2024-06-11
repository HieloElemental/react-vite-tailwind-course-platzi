import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

import { ProductDetailContext } from "../../Contexts/ProductDetailProvider";

const ProductDetail = () => {
  const { isProductDetailOpen, onCloseProductDetail } =
    useContext(ProductDetailContext);

  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } w-full h-[calc(100vh-60px)] z-10 top-[60px] right-0 rounded-l-lg max-w-md flex-col fixed bg-gray-900 text-white border border-gray-700`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Details</h2>
        <div onClick={onCloseProductDetail} className='cursor-pointer'>
          <XMarkIcon className='size-6' />
        </div>
      </div>
    </aside>
  );
};

export { ProductDetail };
