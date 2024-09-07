"use client";

import Link from "next/link";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const LIST = [
  {
    name: "Colegio",
    url: "/colegio-centec#inscripcion",
  },
  {
    name: "Técnicos Laborales",
    url: "/admisiones-y-financiacion#inscripcion",
  },
  {
    name: "Educación Continua",
    url: "/educacion-continua",
  },
];

export default function BtnInscription({show, hidden}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${show} ${hidden} relative text-left`}>
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center items-center w-full rounded-md border border-primaryBlue shadow-sm px-4 py-2 text-sm bg-gradient-to-r from-primaryBlue to-secondaryGreen font-medium text-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
        id="menu-button"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Pagos e Inscripción
        {isOpen ? (
          <MdKeyboardArrowUp className="h-5 w-5 " />
        ) : (
          <MdKeyboardArrowDown className="h-5 w-5 " />
        )}
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-auto lg:w-48 rounded-md shadow-lg bg-primaryBlue/50 ring-1 ring-black ring-opacity-5 focus:outline-none backdrop-blur-sm"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          {LIST.map((item, index) => (
            <div className="py-1" role="none" key={index}>
              <Link
                href={item.url}
                className="text-gray-50 block px-3 py-1 text-sm hover:bg-secondaryDarkBlue/40 hover:scale-105 transition duration-300"
                role="menuitem"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
