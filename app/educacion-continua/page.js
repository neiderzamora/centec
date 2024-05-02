import Courses from "@/components/continuing-education/courses";
import Diplomats from "@/components/continuing-education/diplomats";
import Seminars from "@/components/continuing-education/seminars";
import Welcome from "@/components/continuing-education/welcome";

export default function ContinuingEducation() {
  return (
    <>
      <Welcome/>
      <Diplomats/>
      <Seminars/>
      <Courses/>
    </>
  )
}
