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

const NavBar = () => {
  const activeStyle = "underline underline-offset-4";

  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900 dark:text-white flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light'>
      <ul className='gap-3 flex items-center'>
        <li className='font-semibold'>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Shopi
          </NavLink>
        </li>
        {navProductCategories.map((navElement) => (
          <li key={navElement.path}>
            <NavLink
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              to={navElement.path}
            >
              {navElement.text}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className='gap-3 flex items-center'>
        <li className='dark:text-white/60'>hieloelemental@shopi.com</li>
        {navRightPages.map((navElement) => (
          <li key={navElement.path}>
            <NavLink
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              to={navElement.path}
            >
              {navElement.text}
            </NavLink>
          </li>
        ))}
        <li>&#128722; 0</li>
      </ul>
    </nav>
  );
};

export { NavBar };
