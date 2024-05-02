import CardUI from "./cardUI";
import { COURSES } from "@/utils/continuing-education/dsc";

export default function Courses() {
  return (
    <section
      id="cursos"
      class="overflow-hidden py-20 sm:py-32 bg-white"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 class="text-4xl sm:text-5xl pb-6 lg:pb-10 text-left font-bold tracking-tight text-gray-700 ">
            Cursos
          </h2>
        </div>
        <CardUI 
        element={COURSES}
        bgCard="bg-gray-100"
        shadowCCard="shadow-secondaryGreen/15"
        bgTop="bg-secondaryGreen"
        bgTitle="bg-primaryBlue"
        colorTitle="text-gray-200"
        colorDO="text-gray-800"
        colorObj="text-secondaryGreen"
        bgVM="bg-primaryBlue/10"
        textVM="text-gray-600"
        />
      </div>
    </section>
  );
}
