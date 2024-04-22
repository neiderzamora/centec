export const metadata = {
  title: "Colegio"
}

import EducationalSubsidies from "@/components/admissions-financing/educational_subsidies";
import Financing from "@/components/admissions-financing/financing";
import Inscription from "@/components/school-centec/inscription";
import InstitutionalPrinciples from "@/components/our-institution/institucional_principles";
import AcademicManagement from "@/components/school-centec/academic_management";
import InstitutionalHorizon from "@/components/school-centec/institutional_horizon";
import InstitutionalProspective from "@/components/school-centec/institutional_prospective";
import InstitutionalValues from "@/components/school-centec/institutional_values";
import RegistrationRequirements from "@/components/school-centec/registration_requirements";
import HeroSchool from "@/components/school-centec/hero_school";

export default function ColegioCentenc() {
  return (
    <>
      <HeroSchool />
      <InstitutionalProspective />
      <InstitutionalHorizon />
      <InstitutionalPrinciples
        textColorTitle="text-white"
        textColorDescrip="text-gray-300"
        textGeneralDesp="text-gray-200"
        bg="bg-primaryBlue"
        border="border-gray-400"
      />
      <InstitutionalValues />
      <Inscription />
      <Financing
        iconColor="text-yellow-500"
        textColorDescrip="text-gray-300"
        textColorList="text-white"
        bg="bg-primaryBlue"
        version="schoolCentec"
      />
      <EducationalSubsidies
        bg="bg-secondaryDarkBlue"
        textColorTitle="text-white"
        textColorSub="text-gray-300"
        version="schoolCentec"
      />
      <RegistrationRequirements />
      <AcademicManagement />
    </>
  );
}
