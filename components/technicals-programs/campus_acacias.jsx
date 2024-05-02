import { Campus } from "@/components/technicals-programs/main_campus";
import { ACACIAS_PROGRAMS } from "@/utils/details_programs";

export default function CampusAcacias() {
  return (
    <section
      id="sede-acacias"
      className="overflow-hidden py-20 sm:py-32 bg-primaryBlue"
    >
      <Campus
        bgLeft="from-primaryGreen"
        bgRight="to-primaryBlue"
        campus={ACACIAS_PROGRAMS}
        borderColor="border-primaryGreen"
        bgDP="bg-secondaryDarkBlue"
        textColorTime="text-secondaryDarkBlue"
        bgTime="bg-gray-300"
        campusName="Sede Acacias (Meta)"
        colorTitle="text-white"
      />
    </section>
  );
}
