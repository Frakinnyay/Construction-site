import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Modern Home",
    description:
      "2,800 sq. ft. 4BHK custom residential build with outdoor living space and energy-efficient upgrades.",
    highlights: [
      "Completed in 6 months",
      "$450K budget",
      "Private swimming pool",
    ],
    image: "/pro1.png",
  },
  {
    title: "Office Hub",
    description:
      "6,000 sq. ft. two-story office space with conference rooms, reception, and ADA compliance. Commercial construction, structural planning, HVAC integration. This site is RERA registered project with A+ rating.",
    highlights: [
      "Completed in 9 months",
      "20-person capacity",
      "Delivered 3 weeks early",
    ],
    image: "/pro2.png",
  },
  {
    title: "Heritage Buildout",
    description:
      "Full interior fit-out of a dental clinic including treatment rooms and sterilization stations. Commercial interior build, plumbing, medical-grade fittings.",
    highlights: [
      "Built for 6-room practice",
      "Zero downtime for neighbors",
      "LEED-compliant design",
    ],
    image: "/pro3.png",
  },
  {
    title: "Vista Heights",
    description:
      "A premium multi-family residential community featuring 12 townhomes with modern architecture and energy-efficient features. Full design-build, utility layout.",
    highlights: [
      "Gated access & Green space",
      "Solar-ready construction",
      "2,100–2,400 sq. ft. units",
    ],
    image: "/pro5.png",
  },
//   {
//     title: "Modern Home",
//     description:
//       "2,800 sq. ft. 4BHK custom residential build with outdoor living space and energy-efficient upgrades.",
//     highlights: [
//       "Completed in 6 months",
//       "$450K budget",
//       "Private swimming pool",
//     ],
//     image: "/prox.png",
//   },
  {
    title: "Retail Plaza",
    description:
      "A 10,000 sq. ft. retail center with 8 lease-ready units, parking, and ADA accessibility. Commercial site development, steel-frame structure, core and shell delivery.",
    highlights: [
      "Zoned for restaurants and retail",
      "Ample customer parking",
      "Traffic-heavy location",
    ],
    image: "/proy.png",
  },
  {
    title: "Buda Homes",
    description:
      "A 2,500 sq. ft. single-family home with open-concept design, 3BHK layout, and backyard deck. Ground-up residential build with smart home pre-wiring and custom interiors.",
    highlights: [
      "High-efficiency insulation",
      "10-ft ceilings & luxury vinyl floors",
      "Walk-in master suite",
    ],
    image: "/not1.jpeg",
  },
  {
    title: "Shivank Complex",
    description:
      "2,800 sq. ft. 4BHK custom residential build with outdoor living space and energy-efficient upgrades.",
    highlights: [
      "Completed in 12 months",
      "$450K budget Homes",
      "Private Parking",
    ],
    image: "/not2.jpg",
  },
  {
    title: "Luxary Home",
    description:
      "2,800 sq. ft. 4BHK custom residential build with outdoor living space and energy-efficient upgrades.",
    highlights: [
      "Completed in 9 months",
      "$950K budget",
      "Private swimming pool",
    ],
    image: "/not3.webp",
  },
  {
    title: "Cyber Hub",
    description:
      "2,800 sq. ft. 4BHK custom residential build with outdoor living space and energy-efficient upgrades.",
    highlights: [
      "Completed in 16 months",
      "Prominent Office location",
      "Modern Interior",
    ],
    image: "/not4.jpg",
  },
  // You can add more projects later
];

export default function ProjectsGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-gray-700 text-3xl md:text-4xl font-bold mb-4">
            Our Recent Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore some of the spaces we’ve proudly built for our clients.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
}
