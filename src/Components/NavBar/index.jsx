import { useContext } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

import { ShoppingCartContext } from "../../Contexts/ShoppingCartProvider";

const navProductCategories = [
  { path: "/react-vite-tailwind-course-platzi/", text: "All" },
  {
    path: "/react-vite-tailwind-course-platzi/electronics",
    text: "Electronics",
  },
  { path: "/react-vite-tailwind-course-platzi/jewelery", text: "Jewelery" },
  {
    path: "/react-vite-tailwind-course-platzi/mens-clothing",
    text: "Men's Clothing",
  },
  {
    path: "/react-vite-tailwind-course-platzi/womens-clothing",
    text: "Women's Clothing",
  },
];

const navRightPages = [
  { path: "/react-vite-tailwind-course-platzi/my-orders", text: "My Orders" },
  { path: "/react-vite-tailwind-course-platzi/my-account", text: "My Account" },
  { path: "/react-vite-tailwind-course-platzi/sign-in", text: "Sign In" },
];

const NavItem = ({ path, text }) => (
  <li>
    <NavLink
      className={({ isActive }) =>
        isActive ? "underline underline-offset-4" : undefined
      }
      to={path}
    >
      {text}
    </NavLink>
  </li>
);
NavItem.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const NavBar = () => {
  const { cartProducts } = useContext(ShoppingCartContext);

  const renderNavItems = (navItems) => {
    return navItems.map(({ path, text }) => {
      return <NavItem key={path} path={path} text={text}></NavItem>;
    });
  };

  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900 dark:text-white flex justify-between items-center fixed z-20 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='gap-3 flex items-center'>
        <li className='font-semibold'>
          <NavLink to={"/React-Vite-Tailwind-Platzi/"}>Shopi</NavLink>
        </li>
        {renderNavItems(navProductCategories)}
      </ul>

      <ul className='gap-3 flex items-center'>
        <li className='dark:text-white/60'>hieloelemental@shopi.com</li>
        {renderNavItems(navRightPages)}
        <li className='flex items-center justify-center'>
          <ShoppingCartIcon className='size-4' />
          <span>{cartProducts.length}</span>
        </li>
      </ul>
    </nav>
  );
};

export { NavBar };
