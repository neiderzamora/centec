import Image from "next/image";
import images from "@/assets/images/dir";
import { ButtonMoreInf } from "@/components/admissions-financing/button_more_inf";
import { LIST_CHARACTERISTIC } from "@/utils/educational_subsidies_list";

export default function EducationalSubsidies() {
  return (
    <div
      id="subsidios-educativos"
      className="overflow-hidden py-20 sm:py-32 lg:py-32 bg-primaryBlue"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="lg:block relative hidden mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6 my-auto">
            <Image
              alt=""
              loading="lazy"
              decoding="async"
              data-nimg="1"
              className="w-[40rem] rounded-3xl rounded-tl-none rounded-br-none shadow-secondaryDarkBlue/50 shadow-2xl -z-50"
              src={images.subsidies}
            />
          </div>

          <div className="relative grid gap-y-4 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none xl:col-span-6">
            <div className="pb-4 lg:pb-6 lg:max-w-3xl">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Subsidios educativos
              </h2>
            </div>
            <h3 className="sm:text-4xl text-3xl font-medium tracking-tight text-gray-200">
              Subsidio Centec -50% cero interés
            </h3>
            <div className="grid gap-y-4 text-base lg:text-lg">
              <p className="text-gray-300">
                Dirigido a todos los estudiantes admitidos y estudiantes activos
                de los programas técnicos, que requieran financiación hasta por
                el 50% para el pago de la matrícula.
              </p>
              <p>
                Corto Plazo: Se debe cancelar en 4 cuotas fijas, una vez
                legalizada o formalizada la matricula. Esta línea de
                Financiación no es renovable y se debe solicitar todos los
                semestres.
              </p>
              {LIST_CHARACTERISTIC[0].subsidiesCentec.map((item, index) => (
                <div key={index}>
                  <p className="text-base lg:text-lg">
                    - {item.name}
                  </p>
                </div>
              ))}
            </div>
            <h3 className="sm:text-4xl text-3xl font-medium tracking-tight">
              Descuento por hermanos
            </h3>
            <div className="grid gap-y-4 text-base lg:text-lg">
              <p className="lg:text-lg text-base text-gray-300">
                Es un descuento del 15% que se otorga, al hermano que tenga el
                valor de la matricula más alta. Cuando son tres hermanos o más,
                se otorga un descuento del 15% al segundo y del 20% al tercero y
                de ahí en adelante el 20% para los demás.
              </p>
              <p>
                Los descuentos se mantienen siempre y cuando los hermanos estén
                estudiando en la Institución en niveles de programas técnicos y
                bajo las siguientes condiciones:
              </p>
              <p>Cuando son dos hermanos:</p>
              {LIST_CHARACTERISTIC[1].subsidiesBrothers.map((item, index) => (
                <div key={index}>
                  <p className="text-base lg:text-lg">
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