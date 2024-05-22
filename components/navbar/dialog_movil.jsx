"use client";

import { XMarkIcon, PhoneArrowUpRightIcon } from "@heroicons/react/24/outline";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Dialog } from "@headlessui/react";
import { NavigationMobil } from "@/utils/navbarInf";

export default function DialogMovil({
  mobileMenuOpen,
  setMobileMenuOpen,
  bgTwo,
  bgOne,
  bgThree,
}) {
  const router = useRouter();
  const handleMenuItemClick = (urlPath) => {
    router.push(urlPath);
    setMobileMenuOpen(false);
  };
  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-50" />
      <Dialog.Overlay className="fixed inset-0 backdrop-blur-md bg-opacity-10 bg-black" />
      <Dialog.Panel
        className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-b ${bgOne} ${bgThree} ${bgTwo} p-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}
      >
        <div className="flex items-center justify-between py-2">
          <a
            onClick={() => handleMenuItemClick("/")}
            className="-m-1.5 p-1.5"
          >
            <span className="sr-only">Clap</span>
            <Image width={500} height={500} className="w-[14rem]" src="https://educentec.edu.co/lgtp_white.png" alt="logo" />
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-7 w-7 text-white" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {NavigationMobil.map((item, index) => (
                <p
                  key={index}
                  onClick={() => handleMenuItemClick(item.urlPath)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-500/20 hover:transition-opacity delay-0"
                >
                  <span className="flex text-white cursor-pointer">
                    <item.icon
                      className="h-6 w-6 mt-0.5 mr-4 group-hover:text-[#9CCD62]"
                      aria-hidden="true"
                    />
                    {item.title}
                  </span>
                </p>
              ))}
            </div>
            <hr className="text-white/50 mb-1" />
            <Link
              href="https://api.whatsapp.com/send?phone=573105949059"
              className="-mx-3 block rounded-lg px-3 py-2.5 text-base leading-7 text-white hover:bg-gray-500/20"
            >
              <span className="flex">
                <PhoneArrowUpRightIcon className="h-6 w-6 mr-4 lg:h-8 lg:w-8" />
                Contactanos
              </span>
            </Link>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
