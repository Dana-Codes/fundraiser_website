import React from "react";
import beKind from "../assets/images/be_kind.jpg";

export default function LearnMore() {
  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="text-center px-6 py-16 bg-gradient-to-br from-white via-orange-100 to-orange-200">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Learn More About Our Mission
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          At DNC Foundation, we believe every act of kindness creates a ripple
          effect. Our goal is to connect generous hearts with meaningful causes.
        </p>
      </section>

      {/* MISSION */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            We are committed to empowering communities, supporting the less
            privileged, and providing transparent fundraising opportunities.
            Every donation goes toward real impact and real change.
          </p>
        </div>
        <div className="h-64 bg-gray-300 rounded-xl">
          <img
            src={beKind}
            alt="Helping hands"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Impact</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-3xl font-bold text-amber-600">12,500+</h3>
              <p className="text-gray-600">Lives Impacted</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-amber-600">$2.4M</h3>
              <p className="text-gray-600">Funds Raised</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-amber-600">45+</h3>
              <p className="text-gray-600">Countries Reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TRUST US */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Trust Us?</h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold mb-2">Transparency</h3>
            <p className="text-gray-600 text-sm">
              We provide clear records of how funds are used.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold mb-2">Real Impact</h3>
            <p className="text-gray-600 text-sm">
              Donations directly support real people and communities.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold mb-2">Global Reach</h3>
            <p className="text-gray-600 text-sm">
              We operate across multiple countries and causes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6 bg-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-4">Be Part of the Change</h2>
        <p className="mb-6 text-gray-300">
          Join us in making a difference today.
        </p>

        <button
          onClick={() => {
            const el = document.getElementById("campaigns");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
        >
          Start Donating
        </button>
      </section>
    </div>
  );
}
