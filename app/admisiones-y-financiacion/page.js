export const metadata = {
  title: "Adminisiones y Financiación",
};

import EducationalSubsidies from "@/components/admissions-financing/educational_subsidies";
import Financing from "@/components/admissions-financing/financing";
import Inscription from "@/components/admissions-financing/inscription";

export default function AdmissionsFinancing() {
  return (
    <>
      <Inscription />
      <Financing
        id="financiacion"
        iconColor="text-primaryBlue"
        version="educationalSubsidies"
        textColorDescrip="text-gray-700"
        textColorList="text-black"
        bg="bg-white"
      />
      <EducationalSubsidies
        bg="bg-primaryBlue"
        textColorTitle="text-white"
        textColorSub="text-gray-300"
        version="educationalSubsidies"
      />
    </>
  );
}
