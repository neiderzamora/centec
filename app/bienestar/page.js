import Graduates from "@/components/welfare/graduates";
import PedagogicalOutings from "@/components/welfare/pedagogical_outings";
import Solidarity from "@/components/welfare/solidarity";
import TrainingPractices from "@/components/welfare/training_practices";
import Welcome from "@/components/welfare/welcome";

export default function Welfare() {
  return (
    <div>
      <Welcome />
      <TrainingPractices />
      <PedagogicalOutings />
      <Graduates />
      <Solidarity />
    </div>
  );
}
