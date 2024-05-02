import CardUI from "./cardUI";
import { DIPLOMATS, SEMINARS } from "@/utils/continuing-education/dsc";

export default function Seminars() {
  return (
    <section
      id="seminarios"
      class="overflow-hidden py-20 sm:py-32 bg-secondaryDarkBlue"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 class="text-4xl sm:text-5xl pb-6 lg:pb-10 text-left font-bold tracking-tight text-gray-100 ">
            Seminarios
          </h2>
        </div>
        <CardUI 
        element={SEMINARS}
        bgCard="bg-black/85"
        shadowCCard="shadow-primaryGreen/20"
        bgTop="bg-primaryBlue"
        bgTitle="bg-secondaryGreen"
        colorTitle="text-gray-200"
        colorDO="text-gray-300"
        colorObj="text-primaryGreen"
        bgVM="bg-secondaryGreen/25"
        textVM="text-gray-200"
        />
      </div>
    </section>
  );
}
