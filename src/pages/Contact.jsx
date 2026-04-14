import React from "react";

export default function Contact() {
  return (
    <div className="pt-28 px-6 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Contact Us
          </h1>
          <p className="text-gray-600">
            We’d love to hear from you. Reach out anytime.
          </p>
        </div>

        {/* FORM */}
        <form className="space-y-6">
          
          <div>
            <label className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>

        {/* EXTRA INFO */}
        <div className="mt-10 text-center text-gray-500 text-sm">
          <p>Email: support@dncfoundation.org</p>
          <p>Phone: +234 000 000 0000</p>
        </div>
      </div>
    </div>
  );
}