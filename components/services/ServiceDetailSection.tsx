import ServiceDetailCard from "./ServiceDetailCard";

const services = [
  {
    title: "Residential Construction",
    description:
      "We specialize in custom homes designed around your lifestyle, preferences, and budget.",
    benefits: [
      "Tailored floor plans and architecture",
      "Energy-efficient systems and modern designs",
      "Seamless permit handling and inspections",
      "Built for local weather and codes",
    ],
    image: "/serv1.png",
  },
  {
    title: "Commercial Buildings",
    description:
      "From retail stores to office buildings, we create efficient, functional, and durable spaces that help your business thrive.",
    benefits: [
      "Tailored floor plans and architecture",
      "Energy-efficient systems and modern designs",
      "Seamless permit handling and inspections",
      "Built for local weather and codes",
    ],
    image: "/serv2.png",
  },
  {
    title: "Renovation & Remodeling",
    description:
      "We breathe new life into outdated homes and commercial properties — making them more functional, stylish, and valuable.",
    benefits: [
      "Tailored floor plans and architecture",
      "Energy-efficient systems and modern designs",
      "Seamless permit handling and inspections",
      "Built for local weather and codes",
    ],
    image: "/cons3.png",
  },
  // Later: add Commercial, Renovation, etc.
];

export default function ServicesDetailSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {services.map((service, index) => (
          <ServiceDetailCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}
