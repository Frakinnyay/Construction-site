import PageHeader from "@/components/common/PageHeader";
import AboutIntro from "@/components/about/AboutIntro";
import AboutStats from "@/components/about/AboutStats";
import VisionMissionValues from "@/components/about/VissionMissionvalues";
export default function about() {
  return (
    <div>
      <PageHeader
              label="ABOUT"
              title="Building With Purpose, Backed by Trust"
              subtitle="At Vision, we don’t just build spaces — we build lasting relationships.."
              backgroundImage="/Ohhappiness.jpg"
            />
       <AboutIntro />
      <AboutStats />
      <VisionMissionValues />
    </div>
  );
}
