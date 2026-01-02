import PageHeader from "@/components/common/PageHeader";
import ContactSection from "@/components/Contact/ContactSection";
export default function contacts() {
  return (
    <div>
      <PageHeader
              label="CONTACT"
              title="Get in Touch with Vision"
              subtitle="At Vision, we don’t just build spaces — we build lasting relationships.."
              backgroundImage="/Mantle.jpg"
            />
        <ContactSection />
    </div>
  );
}
