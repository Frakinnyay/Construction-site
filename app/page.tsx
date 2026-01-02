import Image from "next/image";
import PageHeader from "@/components/common/PageHeader";
import ServicesGrid from "@/components/services/ServiceGrid";


export default function Home() {
  return (
    <div>
      <PageHeader
        label="WELCOME"
        title="Building the Future, Restoring the Past"
        subtitle="We deliver high-quality construction projects with trust, precision, and excellence."
        backgroundImage="/momo.jpg"
      />
      <ServicesGrid/>
    </div>
  );
}
