import { OBJECTIVES } from "@/utils/institutional_objectives";
import { TrophyIcon } from "@heroicons/react/24/solid";
export default function InstitucionalObjectives() {
  return (
    <div
      id="objetivos-institucionales"
      className="overflow-hidden bg-primaryBlue py-20 sm:py-32 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl pb-8 lg:mx-0 lg:max-w-3xl">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Objetivos Institucionales
          </h2>
          <p className="py-6 text-lg lg:text-xl text-gray-300 text-justify">
            Forjamos Futuros Brillantes: Nuestra Visión y Misión Educativa.
            Inspiramos, empoderamos y guiamos a través de la excelencia
            académica, cultivando mentes curiosas y ciudadanos responsables para
            un mundo mejor.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-8">
          {OBJECTIVES.map((item, index) => (
            <div
              key={index}
              className="relative mx-auto max-w-2xl lg:col-span-7 lg:max-w-none p-4 mb-3 lg:p-4 rounded-tl-xl xl:col-span-6 bg-secondaryDarkBlue/20"
            >
              <div className="inline-flex">
                <span className="pt-4 -ml-1.5 mr-2 lg:pt-2 text-primaryGreen">
                  <TrophyIcon className="h-4 w-4" />
                </span>

                <p className="sm:text-lg py-3 lg:py-0 text-base text-gray-100 text-justify">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
          <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6"></div>
        </div>
      </div>
    </div>
  );
}
