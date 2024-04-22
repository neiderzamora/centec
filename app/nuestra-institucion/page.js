export const metadata = {
  title: "Nuestra Institución"
}


import InstitutionalPrinciples from "@/components/our-institution/institucional_principles";
import MissionVision from "@/components/our-institution/mission-vision";
import InstitucionalObjectives from "@/components/our-institution/institutional_objectives";

export default function OurInstitution() {
  return (
    <>
      <MissionVision />
      <InstitutionalPrinciples
        textColorTitle="text-gray-900"
        textColorDescrip="text-gray-700"
        textGeneralDesp="text-gray-600"
        bg="bg-white"
        border="border-gray-200"
      />
      <InstitucionalObjectives />
    </>
  );
}
