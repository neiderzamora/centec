export const metadata = {
  title: "Programas Técnicos Laborales"
}


import CampusAcacias from "@/components/technicals-programs/campus_acacias";
import CampusGranada from "@/components/technicals-programs/campus_granada";
import CampusVillavicencio from "@/components/technicals-programs/campus_villavicencio";

export default function TechnicalsPrograms() {
  return (
    <>
      <CampusVillavicencio />
      <CampusAcacias />
      <CampusGranada />
    </>
  );
}
