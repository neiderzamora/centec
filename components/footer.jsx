import { PhoneArrowUpRightIcon } from "@heroicons/react/24/outline";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiOutlineWhatsApp } from "react-icons/ai";

import Image from "next/image";
import Link from "next/link";

var currentDate = new Date();

var year = currentDate.getFullYear();

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start lg:justify-between gap-y-12 py-10 lg:flex-row lg:items-center lg:py-6">
          <div className="lg:flex lg:justify-center lg:items-center lg:text-center lg:mx-0 mx-auto text-gray-900">
            <Link href="/">
              <Image
                alt="logo"
                width={500}
                height={500}
                loading="lazy"
                decoding="async"
                data-nimg="1"
                className="w-[14rem]"
                src="https://educentec.edu.co/lgtp_white.png"
              />
            </Link>
          </div>

          <div className="group hidden relative -mx-4 lg:flex items-center self-stretch p-4 transition-colors sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <a
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
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-primaryGreen pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
          <div className="min-w-0 shrink gap-x-6 inline-flex justify-center items-center text-center">
            <Link
              className="group"
              href="https://www.facebook.com/profile.php?id=61555941351684"
              target="blank"
            >
              <BiLogoFacebookCircle className="h-6 w-6 text-gray-200" />
            </Link>
            <Link
              className="group"
              href="https://www.instagram.com/educentec/"
              target="blank"
            >
              <AiOutlineInstagram className="h-6 w-6 text-gray-200" />
            </Link>
            <Link
              className="group"
              href="https://api.whatsapp.com/send?phone=573105949059"
              target="blank"
            >
              <AiOutlineWhatsApp className="h-6 w-6 text-gray-200" />
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-200 md:mt-0 text-center lg:text-left">
            Desarrollado por{" "}
            <Link
              href="https://www.sabextecnologia.com/"
              className="text-primaryGreen font-bold underline"
            >
              Sabex Tecnologia
            </Link>{" "}
            <br />
            {`© Copyright ${year}. Todos los derechos reservados.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
