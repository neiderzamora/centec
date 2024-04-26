import Image from "next/image";
import images from "@/assets/images/dir";
import {
  ShieldCheckIcon,
  ScaleIcon,
  WalletIcon,
  BanknotesIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";

import { TEXT_COMPONENTS } from "@/utils/text_components";

const CHARACTERISTIC_CREDIT = [
  {
    name: "Cobertura de hasta el 70% de tu matrícula.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Tasa de interés: 0% mensual.",
    icon: ScaleIcon,
  },
  {
    name: "Cuotas mensuales fijas.",
    icon: BanknotesIcon,
  },
  {
    name: "Sin cobro del estudio de crédito.",
    icon: WalletIcon,
  },
  {
    name: "Respuesta de preaprobación en 24 horas.",
    icon: RocketLaunchIcon,
  },
];
export default function Financing({
  iconColor,
  textColorList,
  textColorDescrip,
  bg,
  version,
}) {
  const textFinancing = TEXT_COMPONENTS[version];
  return (
    <div
      id="financiacion"
      className={`overflow-hidden py-20 sm:py-32 lg:py-32 ${bg}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative mx-auto my-auto max-w-2xl lg:col-span-7 lg:max-w-none xl:col-span-6">
            <h3
              className={`lg:text-5xl text-4xl ${textColorList} font-bold tracking-tight`}
            >
              Financiación
            </h3>
            <p className={`py-6 text-lg lg:text-xl ${textColorDescrip}`}>
              <span className={`font-bold ${textColorList}`}>
                Financiación Directa:{" "}
              </span>
              {textFinancing.financing}
            </p>
            <dl className="max-w-xl space-y-4 text-base leading-7 text-gray-200 lg:max-w-none">
              {CHARACTERISTIC_CREDIT.map((item, index) => (
                <div key={index}>
                  <p
                    className={`text-lg font-bold ${textColorList} lg:text-xl`}
                  >
                    <item.icon
                      className={`inline-flex h-6 w-6 ${iconColor} mr-1`}
                    />
                    {item.name}
                  </p>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative mx-auto max-w-2xl mt-6 lg:mt-0 lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <Image
              alt=""
              loading="lazy"
              decoding="async"
              data-nimg="1"
              className="w-[40rem] rounded-3xl rounded-tl-none rounded-br-none shadow-primaryGreen/50 shadow-2xl"
              src={images.coin}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
