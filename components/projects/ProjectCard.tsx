type ProjectCardProps = {
  title: string;
  description: string;
  highlights: string[];
  image: string;
};

export default function ProjectCard({
  title,
  description,
  highlights,
  image,
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-lg transition">
      
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover"
      />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-gray-800 text-2xl font-bold mb-3">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-6">
          {description}
        </p>

        <h4 className="text-gray-600 font-semibold mb-3">Highlights</h4>

        <ul className="space-y-2">
          {highlights.map((item, index) => (
            <li key={index} className="flex items-center gap-3 text-sm text-gray-700">
              <span className="text-lime-500">✔</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
