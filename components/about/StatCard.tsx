type StatCardProps = {
  label: string;
  value: string;
  description: string;
};

export default function StatCard({
  label,
  value,
  description,
}: StatCardProps) {
  return (
    <div className="bg-[#063B3B] text-white p-10 rounded-2xl h-full flex flex-col justify-center">
      
      {/* Label */}
      <span className="text-lime-400 uppercase text-sm font-semibold mb-6">
        {label}
      </span>

      {/* Big Number */}
      <h3 className="text-5xl font-bold text-lime-400 mb-6">
        {value}
      </h3>

      {/* Description */}
      <p className="text-white/80 leading-relaxed">
        {description}
      </p>

    </div>
  );
}
