import { Campus } from "@/components/technicals-programs/main_campus";
import { VILLAVICENCIO_PROGRAMS } from "@/utils/details_programs";

export default function CampusVillavicencio() {
  return (
    <section
      id="sede-villavicencio"
      className="overflow-hidden py-20 sm:py-32 bg-secondaryDarkBlue"
    >
      <Campus
        bgLeft="from-secondaryGreen"
        bgRight="to-primaryBlue"
        campus={VILLAVICENCIO_PROGRAMS}
        borderColor="border-secondaryGreen"
        bgDP="bg-secondaryGreen"
        textColorTime="text-secondaryGreen"
        bgTime="bg-white"
        campusName="Sede Villavicencio (Meta)"
        colorTitle="text-white"
      />
    </section>
  );
}
