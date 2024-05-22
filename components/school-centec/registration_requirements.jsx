import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

import { LIST_REGISTRATION_REQUIREMENTS } from "@/utils/registration_requirements_list";

export default function RegistrationRequirements() {
  return (
    <section
      id="requisitos-de-matricula"
      className="relative overflow-hidden py-20 sm:py-32 lg:py-32 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-secondaryDarkBlue/90">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div class="lg:block relative hidden mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6 my-auto">
            <Image
              alt=""
              width={500} height={500}
              loading="lazy"
              decoding="async"
              data-nimg="1"
              className="w-full rounded-tl-3xl rounded-br-3xl border border-secondaryGreen"
              src="https://educentec.edu.co/student.jpg"
            />
          </div>
          <div className="relative mx-auto max-w-2xl lg:col-span-7 lg:max-w-none xl:col-span-6">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
              <h2 className="text-4xl pb-6 lg:text-5xl font-bold tracking-tight">
                Requisitos de Matrícula
              </h2>
            </div>
            {LIST_REGISTRATION_REQUIREMENTS.map((item, index) => (
              <ul key={index} className="text-lg lg:text-2xl">
                <li className="pb-4">
                  <span className="inline-flex"><CheckCircleIcon className="h-4 w-4 lg:h-5 lg:w-5 text-secondaryGreen"/></span> {item.name}.
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
