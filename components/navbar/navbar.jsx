"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { CARD } from "@/utils/navbarInf";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const timerRef = useRef(null);

  const handleMouseEnter = (index) => {
    setActiveSubMenu(index);
    clearTimeout(timerRef.current);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setActiveSubMenu(null);
    }, 500);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <nav className="hidden lg:block bg-opacity-65 backdrop-filter backdrop-blur-md bg-primaryBlue z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative flex justify-between py-8">
        <div className="relative z-10 flex items-center gap-16">
          <div className="hidden lg:flex lg:gap-3">
          
            {CARD.map((item, index) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  className="relative rounded-lg px-3 py-2 text-sm transition-colors delay-150 hover:text-primaryGreen hover:delay-0"
                  href={item.urlPath}
                >
                  <span className="relative inline-flex z-10">
                    {item.title}
                    <ChevronDownIcon className="h-3 w-3 mt-1.5 ml-0.5 font-medium hover:text-primaryGreen hover:delay-0" />
                  </span>
                </Link>
                {item.submenu && (
                  <div
                    className={`absolute ${
                      activeSubMenu === index ? "block" : "hidden"
                    } mt-2 z-10 mx-auto ml-6 space-y-0.5 bg-white shadow-xl rounded-r-md rounded-b-md py-2 w-[13rem]`}
                  >
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.title}
                        className="block px-4 py-1 text-sm text-gray-700 hover:bg-secondaryDarkBlue/5"
                        href={subItem.urlPath}
                      >
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
