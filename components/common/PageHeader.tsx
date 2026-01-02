type PageHeaderProps = {
  label: string;
  title: string;
  subtitle: string;
  backgroundImage: string;
};

export default function PageHeader({
  label,
  title,
  subtitle,
  backgroundImage,
}: PageHeaderProps) {
  return (
    <section
      className="relative h-[85vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <span className="inline-block mb-4 px-4 py-1 text-sm bg-white/20 rounded-full">
          {label}
        </span>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {title}
        </h1>

        <p className="text-base md:text-lg text-white/90">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
