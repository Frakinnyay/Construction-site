type ServiceDetailCardProps = {
  title: string;
  description: string;
  benefits: string[];
  image: string;
};

export default function ServiceDetailCard({
  title,
  description,
  benefits,
  image,
}: ServiceDetailCardProps) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      
      {/* Image */}
      <div className="h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-10">
        <h3 className="text-gray-500 text-3xl font-bold mb-4">{title}</h3>

        <p className="text-gray-600 mb-6">
          {description}
        </p>

        <h4 className="font-semibold mb-4">Key Benefits</h4>

        <ul className="space-y-3 mb-8">
          {benefits.map((item, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-700">
              <span className="text-lime-500">✔</span>
              {item}
            </li>
          ))}
        </ul>

        <button className="bg-lime-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-lime-300 transition">
          ENQUIRE NOW
        </button>
      </div>

    </div>
  );
}
