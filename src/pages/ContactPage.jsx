import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f8f9f7] px-4 py-12">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-[#4C643B]">Contact Us</h1>
        <p className="text-gray-500 mt-3">
          We’d love to hear from you! Get in touch with us anytime.
        </p>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT - CONTACT INFO */}
        <div className="space-y-6">

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition flex items-start gap-4">
            <div className="bg-[#4C643B]/10 p-3 rounded-full text-[#4C643B] text-xl">
              <FaPhoneAlt />
            </div>
            <div>
              <h3 className="font-semibold text-[#4C643B]">Phone</h3>
              <p className="text-gray-500 text-sm">+92 300 1234567</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition flex items-start gap-4">
            <div className="bg-[#4C643B]/10 p-3 rounded-full text-[#4C643B] text-xl">
              <FaEnvelope />
            </div>
            <div>
              <h3 className="font-semibold text-[#4C643B]">Email</h3>
              <p className="text-gray-500 text-sm">support@yourstore.com</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition flex items-start gap-4">
            <div className="bg-[#4C643B]/10 p-3 rounded-full text-[#4C643B] text-xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3 className="font-semibold text-[#4C643B]">Location</h3>
              <p className="text-gray-500 text-sm">Karachi, Pakistan</p>
            </div>
          </div>

          {/* EXTRA TEXT */}
          <div className="bg-[#4C643B] text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold">Need Help?</h3>
            <p className="text-sm mt-2">
              Our team is available 24/7 to assist you with any queries.
            </p>
          </div>

        </div>

        {/* RIGHT - CONTACT FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-md">

          <h2 className="text-2xl font-semibold text-[#4C643B] mb-6">
            Send Message
          </h2>

          <form className="space-y-5">

            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4C643B]"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4C643B]"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full mt-1 p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4C643B]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#4C643B] text-white py-3 rounded-xl hover:scale-105 hover:shadow-lg transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>

      {/* MAP SECTION (OPTIONAL) */}
      <div className="max-w-6xl mx-auto mt-16">
        <div className="rounded-2xl overflow-hidden shadow-md">
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=karachi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[300px] border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>

    </div>
  );
}