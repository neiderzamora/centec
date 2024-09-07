"use client";

import Image from "next/image";
import { PhoneArrowUpRightIcon, Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

import DialogMovil from "@/components/navbar/dialog_movil";
import BtnInscription from "./btn_inscription";
import Sidebar from "./sidebar";

export default function UpNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 flex justify-between py-6 gap-2">
          <div className={`relative lg:z-10 flex items-center gap-5 ${mobileMenuOpen ? 'hidden' : ''}`}>
            <Link href="/">
              <Image
              width={500} height={500}
                alt="logo"
                loading="lazy"
                decoding="async"
                data-nimg="1"
                className="w-[14rem]"
                src="https://educentec.edu.co/lgtp_white.png"
              />
            </Link>
          </div>
          <div className="flex items-center gap-6">
{/*             <BtnInscription
            show="lg:inline-block"
            hidden="hidden"
            /> */}
            <button
              type="button"
              className={`-m-2.5 inline-flex lg:hidden items-center justify-center rounded-md p-2.5 text-gray-50 ${mobileMenuOpen ? 'hidden' : ''}`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-7 w-7" aria-hidden="true" />
            </button>
            <DialogMovil
              bgOne="from-secondaryDarkBlue"
              bgTwo="via-secondaryDarkBlue"
              bgThree="to-primaryBlue/50"
              mobileMenuOpen={mobileMenuOpen}
              setMobileMenuOpen={setMobileMenuOpen}
              showBotton='lg:hidden'
            />
            <Link
              className="items-center justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors text-white active:bg-gray-800 active:text-white/80 hidden lg:block"
              variant="solid"
              color="gray"
              href="https://api.whatsapp.com/send?phone=573105949059"
            >
              <div className="flex items-center justify-center">
                <PhoneArrowUpRightIcon className="h-8 w-8" />
                <span className="ml-2">+57 310-594-9059</span>
              </div>
              <div className="mt-2">
                <span className="bg-primaryGreen px-2 py-1 rounded hover:bg-primaryGreen/80">
                  Contactanos
                </span>
              </div>
            </Link>
            <Sidebar/>
          </div>
        </div>
      </nav>
    </>
  );
}
