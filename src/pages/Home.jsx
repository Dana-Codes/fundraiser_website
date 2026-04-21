import React, { useState, useEffect } from "react";
import CampaignCard from "../components/CampaignCard";
import campaigns from "../data/campaigns";
import { Link } from "react-router-dom";
import schoolImg from "../assets/images/school.jpg";
import medicalImg from "../assets/images/medical.jpg";
import foodImg from "../assets/images/food.jpg";
import image1 from "../assets/images/for the slides/image1.jpeg"
import image2 from "../assets/images/for the slides/image2.jpeg"
import image3 from "../assets/images/for the slides/image3.jpeg"
import image4 from "../assets/images/for the slides/image4.jpeg"
import image5 from "../assets/images/for the slides/image5.jpeg"
import image6 from "../assets/images/for the slides/image6.jpeg"


const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-orange-100 to-orange-200 px-4 py-20 md:py-32 scroll-mt-24"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full  animate-pulse"></div>
          <div className="absolute -bottom-40 -left-50 w-96 h-96 bg-orange-700 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-100 rounded-full blur-3xl"></div>

          {/* Floating particles */}
          <div className="absolute top-20 left-[10%] text-4xl animate-float opacity-20">
            ✨
          </div>
          <div className="absolute bottom-32 right-[15%] text-5xl animate-float-delayed opacity-20">
            ❤️
          </div>
          <div className="absolute top-1/3 right-[8%] text-3xl animate-float-slow opacity-10">
            ⭐
          </div>
          <div className="absolute bottom-1/4 left-[5%] text-3xl animate-float-slow opacity-15">
            🌟
          </div>
        </div>

        {/* Main content container */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Pre-heading badge */}
          <div
            className={`inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-amber-200/50 rounded-full px-4 py-1.5 mb-6 shadow-sm transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide text-amber-800 uppercase">
              Join the movement
            </span>
          </div>

          {/* Main heading with gradient text */}
          <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <span className="bg-gradient-to-r from-gray-900 via-amber-800 to-gray-900 bg-clip-text text-transparent">
              Support a Cause
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              That Matters
            </span>
          </h1>

          {/* Description */}
          <p
            className={`text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Help us raise funds to{" "}
            <span className="font-semibold text-gray-800">change lives</span>
            every contribution, big or small, creates a ripple of hope that
            reaches far beyond what you can imagine.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-5 justify-center items-center mt-4 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <button className="group relative bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-xl shadow-gray-300/30 hover:shadow-2xl hover:shadow-amber-200/50 transition-all duration-300 flex items-center gap-3 hover:scale-105 active:scale-95">
              <span>Donate Now</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60"></span>
              </span>
            </button>

            <Link to="/learn-more"className="text-gray-700 font-medium border border-gray-300 bg-white/70 backdrop-blur-sm px-7 py-3.5 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2 group">
              <span>Learn more</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </div>

          {/* Trust indicators */}
          <div
            className={`mt-12 pt-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-500 border-t border-gray-200/70 max-w-lg mx-auto transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="flex items-center gap-2 group cursor-default">
              <svg
                className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>100% transparent</span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <svg
                className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Tax deductible</span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <svg
                className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Global impact</span>
            </div>
          </div>

          {/* Stats bar */}
          <div
            className={`mt-16 flex flex-wrap justify-center gap-8 md:gap-12 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-600">
                12,500+
              </div>
              <div className="text-sm text-gray-500 mt-1">Lives impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-600">
                $2.4M
              </div>
              <div className="text-sm text-gray-500 mt-1">Funds raised</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-600">
                45+
              </div>
              <div className="text-sm text-gray-500 mt-1">
                Countries reached
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* NEWS / HOT UPDATES CAROUSEL */}
<section className="relative bg-white/80 backdrop-blur-sm py-6 overflow-hidden border-y border-amber-100">
  <div className="flex items-center gap-3 mb-2 px-4">
    <span className="bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
      Hot News
    </span>
    <h3 className="text-gray-800 font-semibold text-lg">Latest Highlights</h3>
  </div>

  {/* Scrolling wrapper */}
  <div className="relative w-full overflow-hidden">
    <div
      className="flex animate-scroll-x gap-8 px-4"
    >
      {/* image slides */}
      {[ 
        { img: image1, text: "Clean water drive launched 🌍" },
        { img: image2, text: "Clean water drive launched 🌍" },
        { img: image3, text: "Clean water drive launched 🌍" },
        { img: image4, text: "Clean water drive launched 🌍" },
       
      ].map((item, index) => (
        <div
          key={index}
          className="flex-shrink-0 flex items-center bg-white rounded-xl shadow-md overflow-hidden w-[300px] min-w-[300px]"
        >
          <img
            src={item.img}
            alt=""
            className="w-24 h-24 object-cover"
          />
          <p className="text-gray-700 text-sm px-3">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* ABOUT SECTION */}

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 my-10">
          <div
            className={`inline-flex items-center gap-2 bg-amber-100/60 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-xs  font-semibold tracking-wide text-amber-800 uppercase">
              Who We Are
            </span>
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-amber-800 to-gray-900 bg-clip-text text-transparent transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            About Rafa Foundation
          </h2>

          <div
            className={`w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full transition-all duration-700 delay-200 ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
          ></div>
        </div>

        {/* Main description with decorative quote marks */}
        <div
          className={`relative max-w-3xl mx-auto text-center mb-16 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="absolute -top-6 -left-6 text-6xl text-amber-200/50 font-serif">
            "
          </div>
          <div className="absolute -bottom-6 -right-6 text-6xl text-amber-200/50 font-serif">
            "
          </div>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            At{" "}
            <span className="font-semibold text-amber-700">Rafa Foundation</span>
            , we are committed to making a difference by connecting generous
            donors with impactful causes. Our mission is to empower communities,
            support the less privileged, and create lasting change through
            collective effort.
          </p>
        </div>

        <div className="grid grid-flow-col justify-items-center">
          <Link to="/about"
            className="group relative bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-xl shadow-gray-300/30 hover:shadow-2xl 
           hover:shadow-amber-200/50 transition-all duration-300 
           flex items-center gap-3 hover:scale-105 active:scale-95"
          >
            <span>View More</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60"></span>
            </span>
          </Link>
        </div>
      </div>

      {/* CAMPAIGNS SECTION */}
      <section id="campaigns" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <CampaignCard
              key={campaign.id}
              id={campaign.id}
              title={campaign.title}
              description={campaign.description}
              amount={campaign.amount}
              goal={campaign.goal}
              image={campaign.image}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
