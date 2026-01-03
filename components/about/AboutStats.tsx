import StatCard from "./StatCard";

export default function AboutStats() {
  return (
    // FULL-WIDTH BACKGROUND
    <section className="bg-[#063B3B] py-24">
      
      {/* CONSTRAINED CONTENT */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

          {/* Left Stat */}
          <StatCard
            label="Projects"
            value="100+"
            description="Completed over 100 residential and commercial projects across Central Texas with unmatched precision and professionalism."
          />

          {/* Center Image */}
          <img
            src="/not4.jpg"
            alt="Project Building"
            className="rounded-3xl w-full h-full object-cover"
          />

          {/* Right Stat */}
          <StatCard
            label="Happy Clients"
            value="80+"
            description="We’ve earned the trust of homeowners and businesses through honest work, clear communication, and quality builds."
          />

        </div>
      </div>

    </section>
  );
}
