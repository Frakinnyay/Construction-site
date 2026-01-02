import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <h2 className=" text-gray-600 text-3xl md:text-4xl font-bold mb-6">
            Let’s build something great together
          </h2>
          <p className="text-gray-600 mb-4">
            Whether you’re planning a new project or need expert advice,
            our team is here to help.
          </p>
          <p className="text-gray-600">
            Fill out the form and we’ll get back to you as soon as possible.
          </p>
        </div>

        {/* Right Form */}
        <ContactForm />

      </div>
    </section>
  );
}
