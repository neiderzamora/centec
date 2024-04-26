import { Campus } from "@/components/technicals-programs/main_campus";
import { GRANADA_PROGRAMS } from "@/utils/details_programs";

export default function CampusGranada() {
  return (
    <section
      id="sede-granada"
      className="overflow-hidden py-20 sm:py-32 bg-white"
    >
      <Campus
        bgLeft="from-secondaryGreen"
        bgRight="to-secondaryDarkBlue"
        campus={GRANADA_PROGRAMS}
        borderColor="border-secondaryGreen"
        bgDP="bg-primaryBlue"
        textColorTime="text-primaryBlue"
        bgTime="bg-white"
        campusName="Sede Granada (Meta)"
        colorTitle="text-secondaryDarkBlue"
      />
    </section>
  );
}
