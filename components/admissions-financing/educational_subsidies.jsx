import Image from "next/image";

import { ButtonMoreInf } from "@/components/admissions-financing/button_more_inf";
import { LIST_CHARACTERISTIC } from "@/utils/educational_subsidies_list";
import { TEXT_COMPONENTS } from "@/utils/text_components";

export default function EducationalSubsidies({
  bg,
  textColorSub,
  textColorTitle,
  version,
}) {
  const textSubsidies = TEXT_COMPONENTS[version];
  return (
    <div
      id="subsidios-educativos"
      className={`overflow-hidden py-20 sm:py-32 lg:py-32 ${bg}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="lg:block relative hidden mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6 my-auto">
            <Image
              alt=""
              width={500} height={500}
              loading="lazy"
              decoding="async"
              data-nimg="1"
              className="w-[40rem] rounded-3xl rounded-tl-none rounded-br-none shadow-secondaryDarkBlue/50 shadow-2xl"
              src="https://educentec.edu.co/subsidies.jpg"
            />
          </div>

          <div className="relative grid gap-y-4 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none xl:col-span-6">
            <div className="lg:max-w-3xl">
              <h2
                className={`text-4xl lg:text-5xl font-bold tracking-tight ${textColorTitle}`}
              >
                Subsidios Educativos
              </h2>
            </div>
            <h3
              className={`pt-6 sm:text-4xl text-3xl font-medium tracking-tight ${textColorTitle}`}
            >
              Subsidio CENTEC -50% cero interés
            </h3>
            <div className="grid gap-y-4 text-base lg:text-lg">
              <p className={`${textColorSub}`}>
              {textSubsidies.educationalSubsidiesCharacteristic}
              </p>
              <p>
                Corto Plazo: Se debe cancelar en 4 cuotas fijas, una vez
                legalizada o formalizada la matricula. Esta línea de
                Financiación no es renovable y se debe solicitar todos los
                semestres.
              </p>
              {LIST_CHARACTERISTIC[0].subsidiesCentec.map((item, index) => (
                <div key={index}>
                  <p className="text-base lg:text-lg">- {item.name}</p>
                </div>
              ))}
            </div>
            <h3 className="pt-6 sm:text-4xl text-3xl font-medium tracking-tight">
              Descuento por hermanos
            </h3>
            <div className="grid gap-y-4 text-base lg:text-lg">
              <p className={`${textColorSub}`}>
                Es un descuento del 15% que se otorga, al hermano que tenga el
                valor de la matricula más alta. Cuando son tres hermanos o más,
                se otorga un descuento del 15% al segundo y del 20% al tercero y
                de ahí en adelante el 20% para los demás.
              </p>
              <p>
              {textSubsidies.siblingDiscount}
              </p>
              <p>Cuando son dos hermanos:</p>
              {LIST_CHARACTERISTIC[1].subsidiesBrothersTwo.map((item, index) => (
                <div key={index}>
                  <p className={`text-base lg:text-lg ${textColorSub}`}>
                    - {item.name}
                  </p>
                </div>
              ))}
              <p>Cuando son tres hermanos:</p>
              {LIST_CHARACTERISTIC[2].subsidiesBrothersThree.map((item, index) => (
                <div key={index}>
                  <p className={`text-base lg:text-lg ${textColorSub}`}>
                    - {item.name}
                  </p>
                </div>
              ))}
              <ButtonMoreInf />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
