export default function AboutIntro() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* Left Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#063B3B]">
          Built in Austin. <br /> Trusted Across Central Texas.
        </h2>

        {/* Right Text */}
        <p className="text-gray-600 leading-relaxed">
          At Vision, we believe construction is more than just concrete and steel
          — it’s about building trust, understanding your vision, and creating
          spaces that last for generations. Based in the heart of Austin, we’ve
          been delivering high-quality residential and commercial construction
          services across Central Texas with pride, precision, and purpose.
        </p>

      </div>
    </section>
  );
}
