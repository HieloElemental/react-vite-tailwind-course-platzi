import { useContext } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import { ShoppingCartContext } from "../../Contexts/ShoppingCartProvider";

const navProductCategories = [
  { path: "/", text: "All" },
  { path: "/electronics", text: "Electronics" },
  { path: "/jewelery", text: "Jewelery" },
  { path: "/mens-clothing", text: "Men's Clothing" },
  { path: "/womens-clothing", text: "Women's Clothing" },
];

const navRightPages = [
  { path: "/my-orders", text: "My Orders" },
  { path: "/my-account", text: "My Account" },
  { path: "/sign-in", text: "Sign In" },
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
  const { count } = useContext(ShoppingCartContext);

  const renderNavItems = (navItems) => {
    return navItems.map(({ path, text }) => {
      return <NavItem key={path} path={path} text={text}></NavItem>;
    });
  };

  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900 dark:text-white flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='gap-3 flex items-center'>
        <li className='font-semibold'>
          <NavLink to={"/"}>Shopi</NavLink>
        </li>
        {renderNavItems(navProductCategories)}
      </ul>

      <ul className='gap-3 flex items-center'>
        <li className='dark:text-white/60'>hieloelemental@shopi.com</li>
        {renderNavItems(navRightPages)}
        <li>&#128722; {count}</li>
      </ul>
    </nav>
  );
};

export { NavBar };
