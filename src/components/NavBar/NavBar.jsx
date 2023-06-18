import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Portfolio" },
    { id: 4, link: "Experience" },
    { id: 5, link: "Contact" },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white fixed bg-black">
      <div>
        <h1 className="text-5xl font-signature ml-2">Faz_Rak</h1>
      </div>
      <nav>
        <ul className="hidden  md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="mx-4 cursor-pointer font-medium
                    text-gray-300 hover:scale-105 duration-200 "
            >
              {link}
            </li>
          ))}
        </ul>
        <div className="cursor-pointer pr-4 z-10 text-gray-500">
          <FaBars size={30} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
