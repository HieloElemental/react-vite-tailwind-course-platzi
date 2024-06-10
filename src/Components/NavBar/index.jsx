import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const navProductCategories = [
  { path: "/", text: "All" },
  { path: "/clothes", text: "Clothes" },
  { path: "/electronics", text: "Electronics" },
  { path: "/furniture", text: "Furniture" },
  { path: "/toys", text: "Toys" },
  { path: "/others", text: "Others" },
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
  const renderNavItems = (navItems) => {
    return navItems.map(({ path, text }) => {
      return <NavItem key={path} path={path} text={text}></NavItem>;
    });
  };

  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900 dark:text-white flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light'>
      <ul className='gap-3 flex items-center'>
        <li className='font-semibold'>
          <NavLink to={"/"}>Shopi</NavLink>
        </li>
        {renderNavItems(navProductCategories)}
      </ul>

      <ul className='gap-3 flex items-center'>
        <li className='dark:text-white/60'>hieloelemental@shopi.com</li>
        {renderNavItems(navRightPages)}
        <li>&#128722; 0</li>
      </ul>
    </nav>
  );
};

export { NavBar };
