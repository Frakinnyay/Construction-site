import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Residential Construction",
    description:
      "Custom homes built with precision, care, and quality craftsmanship.",
    image: "/md1.jpg",
  },
  {
    title: "Commercial Buildings",
    description:
      "Functional and modern commercial spaces designed for growth.",
    image: "/md2.jpg",
  },
  {
    title: "Renovation & Remodeling",
    description:
      "Transforming existing spaces into beautiful, functional environments.",
    image: "/md3.jpg",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className=" text-gray-800 text-3xl md:text-4xl font-bold mb-4">
            Our Construction Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a full range of construction services tailored to
            meet your needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

      </div>
    </section>
  );
}
