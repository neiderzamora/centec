"use client"

import { useState } from 'react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { INSCRIPTION_PAYMENTS } from '@/utils/incription_payments';
import Link from 'next/link';

const LIST = [
  {
    name: "Correo Institucional",
    url: "https://cpanel4-co.conexcol.net:2096/",
  },
  {
    name: "Q10",
    url: "https://site2.q10.com/login?ReturnUrl=%2F&aplentId=15fad4b1-aad7-44e5-9b6d-b6c7f55487db",
  },
]

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <div className="hidden lg:flex justify-end">
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="p-4 focus:outline-none"
        >
          <Bars3Icon className="h-7 w-7 text-white" />
        </button>
      )}

      <div
        className={`fixed top-0 right-0 h-full z-50 py-9 bg-gray-800 text-white w-1/4 2xl:w-1/5 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className='flex justify-between'>
          <div className="p-4 font-bold text-lg">Navegación</div>
        <button
          onClick={toggleSidebar}
          className="p-2 focus:outline-none"
        >
          <XMarkIcon className="h-7 w-7 text-white" />
        </button>

        </div>

        <nav className="flex flex-col p-4">
          {LIST.map((item) => (
          <Link href={item.url} target='_blank' className="py-2 hover:bg-secondaryDarkBlue/40 hover:scale-105 transition duration-300">{item.name}</Link>
          ))}
          <button
            onClick={toggleServicesMenu}
            className="flex items-center justify-between py-2 focus:outline-none"
          >
            Inscripciones y pagos
            {isServicesOpen ? (
              <ChevronUpIcon className="h-5 w-5 text-white" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-white" />
            )}
          </button>
          {isServicesOpen && (
            <div className="pl-4">
              {INSCRIPTION_PAYMENTS.map((item, index) => (
                <Link href={item.url} target='_blank' className="block py-2 hover:bg-secondaryDarkBlue/40 hover:scale-105 transition duration-300">{item.name}</Link>
              ))}
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
