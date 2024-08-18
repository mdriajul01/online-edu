import React from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import Services from "../Services/Services";
const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    path: "../Services/Services.jsx",
    link: { Services },
  },
  {
    id: 3,
    title: "About Us",
    path: "/",
  },
  {
    id: 4,
    title: "Instructor",
    path: "/",
  },
  {
    id: 5,
    title: "Contuct Us",
    path: "/",
  },
];
const Navbar = () => {
  return (
    <nav className="relative z-20 text-xl border-2 bg-slate-100">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      >
        {/* Logo section */}
        <div>
          <h1 className="text-3xl text-teal-500">
            <span className="text-4xl  text-teal-500 font-bold">E</span>
            du
            <span className="text-4xl text-sky-700 font-bold">
              Sm<span className="text-amber-500">A</span>rt
            </span>
          </h1>
        </div>
        {/* Menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden "></div>
                  {menu.title}
                </a>
              </li>
            ))}
            <button className="primary-btn">Sign In</button>
            <button className="primary-btn  bg-blue-500 rounded-lg hover:bg-fuchsia-500 hover:shadow-gray-500 shadow-blue-500 ">
              Login
            </button>
          </ul>
        </div>
        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
