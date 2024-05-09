import Image from "next/image";
import images from "@/assets/images/dir";
import { FaLink } from "react-icons/fa6";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="relative overflow-hidden py-20 sm:py-32 bg-secondaryDarkBlue">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-0 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-left">
              Nuestros Cursos y Sedes en CENTEC
            </h2>
            <p className="mt-6 text-gray-50 text-lg">
              En CENTEC, nos comprometemos a ofrecer más que solo educación; nos
              esforzamos por cultivar un ambiente donde la excelencia académica
              se combina con el desarrollo personal y la innovación. Cada
              momento compartido en nuestro espacio es una oportunidad para
              explorar, aprender y crecer juntos. ¡Únete a nosotros en este
              emocionante viaje donde las posibilidades son infinitas y el
              aprendizaje es constante!
            </p>
            <div className="mt-6 text-xl text-gray-50">
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 bg-secondaryGreen/30 p-3 rounded-l-full">
                  <Link
                    className="text-gray-300 font-bold w-full"
                    href="/programas-tecnicos-laborales#sede-villavicencio"
                  >
                    <FaLink className="h-5 w-5 inline-flex" /> Sede
                    VILLAVICENCIO
                  </Link>
                </li>
                <li className="flex items-center space-x-2 bg-primaryGreen/30 p-3 rounded-l-full">
                  <Link
                    className="text-gray-300 font-bold w-full"
                    href="/programas-tecnicos-laborales#sede-acacias"
                  >
                    <FaLink className="h-5 w-5 inline-flex" /> Sede ACACIAS
                  </Link>
                </li>

                <li className="flex items-center space-x-2 bg-primaryBlue/30 p-3 rounded-l-full">
                  <Link
                    className="text-gray-300 font-bold w-full"
                    href="/programas-tecnicos-laborales#sede-granada"
                  >
                    <FaLink className="h-5 w-5 inline-flex" /> Sede GRANADA
                  </Link>
                </li>
                <li className="flex items-center space-x-2 animate-pulse text-xl pt-4">
                  ¡Explora nuestras sedes y descubre tus posibilidades en
                  CENTEC!
                </li>
              </ul>
            
            </div>
          </div>
          <div className="relative mx-auto max-w-2xl lg:col-span-7 lg:max-w-none xl:col-span-6 my-auto bg-black/5">
            <Image
              alt=""
              loading="lazy"
              decoding="async"
              data-nimg="1"
              className="w-[70rem] -z-50"
              src={images.smile_persons}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
