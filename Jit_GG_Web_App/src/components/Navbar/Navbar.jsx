import React from "react";
import "tailwindcss";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    path: "#",
  },
  {
    id: 3,
    title: "About Us",
    path: "#",
  },
  {
    id: 4,
    title: "Contact Us",
    path: "#",
  },
];

const Navbar = () => {
  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container pl-15 py-10 flex justify-between items-center"
      >
        {/*Logo Section*/}
        <div>
          <h1 className="font-bold text-2xl"> Jit Gibi Gubae </h1>
        </div>

        {/*Menu Section*/}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-5 ">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 hover:text-[#083765] hover:font-bold hover:bg-[#FFFB15] relative group:"
                >
                  <div
                    className="w-2 h-2 bg-[#FFFB15]absolute mt-2 rounded-full left-1/2 -translate-x-1/2 
                  top-1/2 bottom-0 group-hover:block hidden"
                  ></div>

                  {menu.title}
                </a>
              </li>
            ))}
            <button className="primary-btn"> Sign In </button>
            <button className="secondary-btn"> Sign Up </button>
          </ul>
        </div>

        {/*Mobile Hamburger menu section */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
