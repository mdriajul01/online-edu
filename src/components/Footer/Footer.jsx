import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="py-28 bg-[#5f7e8bd5]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* first section */}
          <div className="space-y-4 max-w-[300px]">
          <h1 className="text-3xl text-teal-500">
            <span className="text-4xl  text-teal-500 font-bold">E</span>
            du
            <span className="text-4xl text-sky-700 font-bold">
              Sm<span className="text-amber-500">A</span>rt
            </span>
          </h1>
            <p className="text-[#ffffffdc] font-mono font-extralight">
              TCJ is a platform dedicated to empowering aspiring developers.
              From beginner tutorials to advanced programming concepts, we
              provide a comprehensive learning experience designed to help you
              master coding skills, build projects, and launch your tech career.
            </p>
          </div>
          {/* second section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold font-poppins text-[#272829]">
                Courses
              </h1>
              <div className="text-[#e2ebe6]">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-[#31f8ff] duration-300">
                    Web Development
                  </li>
                  <li className="cursor-pointer hover:text-[#31f8ff] duration-300">
                    Software Development
                  </li>
                  <li className="cursor-pointer  hover:text-[#31f8ff] duration-300">
                    Apps Development
                  </li>
                  <li className="cursor-pointer  hover:text-[#31f8ff] duration-300">
                    E-learning
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Links</h1>
              <div className="text-[#e2ebe6]">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer  hover:text-[#31f8ff] duration-300">
                    Home
                  </li>
                  <li className="cursor-pointer  hover:text-[#31f8ff] duration-300">
                    Services
                  </li>
                  <li className="cursor-pointer  hover:text-[#31f8ff] duration-300">
                    About
                  </li>
                  <li className="cursor-pointer  hover:text-[#31f8ff] duration-300">
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* third section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
              />
              <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">
                Go
              </button>
            </div>
            {/* social icons */}
            <div className="flex space-x-8 py-5 text-3xl ">
              <a className="text-[#4ae79e]" href="https://wa.link/jz0o9u">
                <FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a
                className="text-[#f3508f]"
                href=" https://x.com/riajul_md41502?t=cHz8aGcth3zb1i7mfGafoQ&s=09"
              >
                <FaX className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a
                className="text-[#f3508f]"
                href=" https://www.instagram.com/rkriajulboss09870987?igsh=Nm8xbXF4ZWU5YWEz"
              >
                <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a className="text-[#222086]" href="https://eduSmart.com/">
                <TbWorldWww className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a
                className="text-[#bb2e2e]"
                href="www.youtube.com/@rkriajulboss5719"
              >
                <FaYoutube className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      <h2 className="text-center bg-[#596e83] font-mono text-xl p-5">
        All-Rights by MD Riajul. create By Riajul [2024/08/03]{" "}
      </h2>
    </footer>
  );
};

export default Footer;
