import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const OrdersCard = ({ totalPrice, totalProducts }) => {
  return (
    <div className='flex justify-between items-center mb-3 border border-white'>
      <p>
        <span>01.02.23</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  );
};

export { OrdersCard };
