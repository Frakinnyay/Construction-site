import PageHeader from "@/components/common/PageHeader";
import ServicesDetailSection from "@/components/services/ServiceDetailSection";
export default function services() {
  return (
    <div>
      <PageHeader
              label="SERVICES"
              title="Our Consruction Solution"
              subtitle="At Vision, we offer expert construction solutions tailored to fit your needs."
              backgroundImage="/ShroomHaze.jpg"
            />
      <ServicesDetailSection />
    </div>
  );
}
