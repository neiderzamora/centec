import Hero from "@/components/home/hero";
import HeroHomeVideo from "@/components/home/hero_video";
import Newsletter from "@/components/home/newsletter";
import OpenEnrollment from "@/components/home/open_enrollment";
import School from "@/components/home/school";

export default function Home() {
  return (
    <>
      <HeroHomeVideo />
      <Hero />
      <School />
      <OpenEnrollment/>
      <Newsletter/>
    </>
  );
}
