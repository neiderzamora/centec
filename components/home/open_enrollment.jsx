import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";

export default function OpenEnrollment() {
  return (
    <div
      id="two-section"
      className="overflow-hidden bg-white py-20 sm:py-32 lg:pb-32 xl:pb-36 text-gray-800"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
          <div className="relative lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6 flex justify-center items-center h-full">
            <div className="relative z-10 text-lg sm:text-xl mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-0 xl:col-span-6">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-black">
                ¡Inscripciones abiertas!
              </h2>
              <div className="mt-4">
                <p>
                  ¿Estás listo para un viaje educativo extraordinario? En el{" "}
                  <strong>
                    {" "}
                    Centro de Formación y Capacitación Empresarial CENTEC
                  </strong>
                  , las Inscripciones Abiertas están en marcha. Únete a nuestra
                  comunidad y descubre un mundo de aprendizaje, creatividad y
                  crecimiento.
                </p>
                <p>
                  ¡<strong>Reserva tu lugar</strong> hoy mismo y prepárate para
                  un emocionante año escolar!
                </p>
              </div>
              <div className="pt-4">
                <Link href="https://site2.q10.com/Preinscripcion?aplentId=15fad4b1-aad7-44e5-9b6d-b6c7f55487db" target="_blank" className="flex items-center justify-start text-left text-gray-800 hover:opacity-70 underline">
                  <h3 className="text-2xl sm:text-3xl font-semibold">
                    Formulario Preinscripción
                  </h3>
                  <FaLocationArrow className="inline-flex w-6 h-full ml-2" />
                </Link>

                <p className="pt-1">
                  Asegura tu lugar en <strong>CENTEC</strong>. ¡Descubre una
                  experiencia educativa enriquecedora diseñada para potenciar tu
                  crecimiento!
                </p>
              </div>
              <div className="pt-6 flex-col text-gray-700">
                <p className="pb-4">Para más información contactanos 👇🏻</p>
                <Link
                  href="https://api.whatsapp.com/send?phone=573105949059"
                  target="_blank"
                  className="flex items-center justify-center text-green-500 bg-gray-50/90 p-4 text-center text-2xl px-6 rounded-2xl hover:scale-105 mx-auto max-w-sm shadow-black drop-shadow-lg"
                >
                  <div className="flex items-center justify-center">
                    <FaWhatsapp className="inline-flex w-10 h-full" />
                    <span className="ml-1">WhatsApp</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:block relative hidden mx-auto max-w-2xl lg:col-span-7 lg:max-w-none xl:col-span-6 my-auto rotate-3 scale-125">
            <Image
              width={500}
              height={500}
              alt=""
              loading="lazy"
              decoding="async"
              data-nimg="1"
              src="/inscription.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
