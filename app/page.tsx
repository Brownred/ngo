import HomeIntroSection from "./_components/sections/briefInfo";
import CurrentProjects from "./_components/sections/currentProjects";
// import GeographicalFocus from "./_components/sections/GeographicalFocus";
import HeroSection from "./_components/sections/hero";
import ImpactSection from "./_components/sections/impact";
import SponsorsPartners from "./_components/sections/partners";

export default function Home() {
  return (
    <>
    <HeroSection />
    <HomeIntroSection />
    <ImpactSection />
    <CurrentProjects />
    <SponsorsPartners />
    {/* <GeographicalFocus /> */}
    </>
  );
}
