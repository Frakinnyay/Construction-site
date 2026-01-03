import Image from "next/image";

const items = [
  {
    title: "Our Vision",
    text: "We aim to create lasting spaces that strengthen communities and inspire confidence.",
    icon: "/vision.jpg",
  },
  {
    title: "Our Mission",
    text: "We make construction simple and dependable through clear communication and craftsmanship.",
    icon: "/mision.avif",
  },
  {
    title: "Our Values",
    text: "We build with integrity, treat every project like our own, and prioritize quality.",
    icon: "/val1.jpeg",
  },
];

export default function VisionMissionValues() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="uppercase text-sm text-lime-700 mb-3">
            Impactful
          </p>
          <h2 className="text-4xl font-bold text-[#063B3B]">
            Vision, Mission & Values
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-10 text-center shadow hover:shadow-lg transition"
            >
              {/* Icon Image */}
              <div className="mb-6 flex justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>

              <h3 className="text-gray-500 text-xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
