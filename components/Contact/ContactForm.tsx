export default function ContactForm() {
  return (
    <form className="bg-gray-50 p-8 rounded-2xl shadow">
      
      <div className="grid grid-cols-1 gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className=" text-gray-500 w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-lime-400"
        />

        <input
          type="email"
          placeholder="Email Address"
          className=" text-gray-600 w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-lime-400"
        />
        <input type="text"
        placeholder="Mobile Number"
        className="text-gray-500 w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-lime-400" />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="text-gray-500 w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-lime-400"
        />

        <button
          type="submit"
          className="bg-lime-400 text-black py-3 rounded-full font-semibold hover:bg-lime-300 transition"
        >
          Send Message
        </button>
      </div>

    </form>
  );
}
