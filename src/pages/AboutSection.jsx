import React, { useState, useEffect, useRef } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "5000+", label: "Lives Impacted", icon: "❤️" },
    { value: "45+", label: "Communities Reached", icon: "🌍" },
    { value: "₦250M+", label: "Funds Raised", icon: "💰" },
    { value: "120+", label: "Active Volunteers", icon: "🤝" }
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 px-6 overflow-hidden scroll-mt-24 bg-gradient-to-b from-white via-amber-50/20 to-white"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-50/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-50/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 bg-amber-100/60 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide text-amber-800 uppercase">Who We Are</span>
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-amber-800 to-gray-900 bg-clip-text text-transparent transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            About DNC Foundation
          </h2>
          
          <div className={`w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
        </div>

        {/* Main description with decorative quote marks */}
        <div className={`relative max-w-3xl mx-auto text-center mb-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="absolute -top-6 -left-6 text-6xl text-amber-200/50 font-serif">"</div>
          <div className="absolute -bottom-6 -right-6 text-6xl text-amber-200/50 font-serif">"</div>
          
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            At <span className="font-semibold text-amber-700">DNC Foundation</span>, we are committed to making a difference by connecting
            generous donors with impactful causes. Our mission is to empower
            communities, support the less privileged, and create lasting change through
            collective effort.
          </p>
        </div>

        {/* Stats grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-amber-100/50 group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision cards */}
        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Mission Card */}
          <div className="group bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-amber-100 hover:border-amber-200">
            <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To create sustainable impact by connecting resources with communities in need, 
              empowering individuals through education, healthcare, and economic opportunities.
            </p>
          </div>

          {/* Vision Card */}
          <div className="group bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-amber-100 hover:border-amber-200">
            <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              A world where every individual has access to basic necessities, quality education, 
              and the opportunity to build a better future for themselves and their communities.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className={`text-center mt-12 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-amber-200/50 transition-all duration-300 hover:scale-105">
            <span>Join Our Movement</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

     
    </section>
  );
}