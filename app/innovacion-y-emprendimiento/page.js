export const metadata = {
  title: "Innovación y Emprendimiento",
};

import Image from "next/image";

import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function InnovationEntrepreneurship() {
  return (
    <>
      <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36 bg-gradient-to-b from-secondaryDarkBlue to-primaryBlue/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-white">
              Bienvenidos a Centec: Impulsando la Innovación y el Emprendimiento
            </h2>
            <p className="mt-2 text-lg text-gray-200">
              En Centec, creemos en el poder transformador de la innovación y el
              espíritu emprendedor. Nos dedicamos a fomentar un ecosistema
              dinámico donde las ideas brillantes encuentren el apoyo y los
              recursos necesarios para florecer y convertirse en realidades
              tangibles.
            </p>
            <p className="mt-4 text-lg text-gray-200">
              En nuestra sección de Innovación y Emprendimiento, invitamos a
              todos los visionarios, soñadores y creadores a explorar un mundo
              de oportunidades donde la creatividad y la ambición se combinan
              para dar forma al futuro. Aquí, no solo celebramos las ideas
              innovadoras, sino que también las convertimos en acciones
              concretas que generan un impacto positivo en la sociedad y la
              economía.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:pt-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
            <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
              <Image
                alt=""
                width={500}
                height={500}
                loading="lazy"
                decoding="async"
                data-nimg="1"
                className="w-[40rem] rounded-3xl rounded-b-none rounded-l-none bg-white/15"
                src="https://educentec.edu.co/one_person_masculine.webp"
              />
            </div>
            <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none pt-6 lg:pt-0 xl:col-span-6">
              <h1 className="text-3xl font-medium tracking-tight">
                ¿Qué nos distingue en Centec?
              </h1>
              <div className="mt-6 text-lg text-gray-50">
                <ul className="space-y-4">
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="h-28 w-28 text-green-500" />
                    <span>
                      Compromiso con el Éxito Empresarial: Nuestra misión es
                      apoyar a emprendedores y startups en todas las etapas de
                      su viaje, desde la concepción de la idea hasta su
                      comercialización y escalamiento. Creemos en el poder del
                      emprendimiento para impulsar el progreso y generar
                      oportunidades para todos.
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="h-28 w-28 text-green-500" />
                    <span>
                      Programas de Vanguardia: En Centec, ofrecemos una amplia
                      gama de programas diseñados para catalizar el crecimiento
                      empresarial. Desde incubadoras de startups hasta programas
                      de aceleración, proporcionamos el entorno y los recursos
                      necesarios para que los emprendedores alcancen su máximo
                      potencial.
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="h-28 w-28 text-green-500" />
                    <span>
                      Red de Colaboración y Apoyo: Valoramos la importancia de
                      la colaboración y el intercambio de conocimientos. Por
                      eso, hemos creado una sólida red de mentores,
                      inversionistas, expertos y colaboradores estratégicos que
                      están comprometidos a ayudar a los emprendedores a
                      alcanzar sus metas.
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="h-20 w-20 text-green-500" />
                    <span>
                      Impacto Global: Nuestro alcance va más allá de las
                      fronteras. Colaboramos con emprendedores y organizaciones
                      de la Región y el País para impulsar la innovación y el
                      cambio positivo a mayor escala.
                    </span>
                  </li>
                </ul>
              </div>
              <p className="pt-4 text-lg">
                En Centec, la innovación y el emprendimiento son más que
                palabras; son motores de cambio y progreso. Te invitamos a
                unirte a nosotros en esta emocionante travesía hacia un futuro
                lleno de posibilidades infinitas. ¡Bienvenidos a Centec, donde
                los sueños se convierten en realidades!
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
                <a
                  aria-label="Download on the App Store"
                  className="rounded-lg transition-colors bg-gray-800 text-white hover:bg-gray-900"
                  href="#"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
