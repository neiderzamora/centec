import CardUI from "./cardUI";
import { DIPLOMATS } from "@/utils/continuing-education/dsc";

export default function Diplomats() {
  return (
    <section
      id="diplomados"
      class="overflow-hidden py-20 sm:py-32 bg-primaryBlue"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 class="text-4xl sm:text-5xl pb-6 lg:pb-10 text-left font-bold tracking-tight text-white ">
            Diplomados
          </h2>
        </div>
        <CardUI 
        element={DIPLOMATS}
        bgCard="bg-black/85"
        shadowCCard="shadow-[#BF7256]/20"
        bgTop="bg-[#6B41A6]"
        bgTitle="bg-[#343773]"
        colorTitle="text-gray-200"
        colorDO="text-gray-300"
        colorObj="text-[#BF7256]"
        bgVM="bg-white/15"
        textVM="text-gray-200"
        />
      </div>
    </section>
  );
}
