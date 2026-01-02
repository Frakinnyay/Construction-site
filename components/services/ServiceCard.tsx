type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function ServiceCard({
  title,
  description,
  image,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
      
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <h3 className="text-gray-700 text-xl font-semibold mb-3 ">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-5">
          {description}
        </p>

        <button className="text-lime-600 font-semibold text-sm hover:underline">
          Learn More →
        </button>
      </div>

    </div>
  );
}
