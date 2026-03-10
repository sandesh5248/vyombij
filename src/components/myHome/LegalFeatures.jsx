import React, { useState } from "react";
import { BarChart3, TrendingUp, Lightbulb, CheckCircle2 } from "lucide-react";

const FeatureCard = ({ title, desc, icon: Icon, color, bgColor, isActive }) => (
  <div className={`p-8 rounded-[2rem] flex flex-col items-center text-center transition-all duration-300 h-full shadow-xl ${isActive
    ? "bg-[#072b47] text-white border border-[#072b47]"
    : "bg-white text-slate-700 border border-slate-100"
    }`}>
    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 text-2xl font-bold shadow-sm transition-colors duration-300 ${isActive
      ? "bg-white text-[#072b47]"
      : (bgColor || "bg-slate-50")
      }`}>
      {Icon ? <Icon size={28} className={`transition-colors duration-300 ${isActive ? "text-[#072b47]" : (color || "text-slate-500")}`} /> : "V"}
    </div>
    <h3 className={`text-xl font-black mb-4 transition-colors duration-300 ${isActive ? "text-white" : "text-[#072b47]"}`}>{title}</h3>
    <p className={`text-[13px] font-medium leading-relaxed transition-colors duration-300 ${isActive ? "text-slate-300" : "text-slate-500"}`}>
      {desc}
    </p>
  </div>
);

const LegalFeatures = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const cards = [
    {
      title: "Why VyomBiz?",
      desc: "VyomBiz is a technology-enabled platform where experienced professionals provide trusted legal and financial services to businesses.",
    },
    {
      title: "India's Largest Legal Tech Company",
      desc: "VyomBiz offers business registration, taxation, and licensing services through a wide network of experienced professionals across India.",
      icon: BarChart3,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "99.9% Client Satisfaction",
      desc: "To ensure client satisfaction, we continuously improve our services based on business needs and expert industry standards.",
      icon: TrendingUp,
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      title: "Excellent Advisory Services",
      desc: "With a strong professional network, we provide reliable advisory services to support entrepreneurs throughout their business journey.",
      icon: Lightbulb,
      color: "text-[#005a9c]",
      bgColor: "bg-[#005a9c]/10",
    },
  ];

  const features = [
    {
      title: "Quick Response",
      desc: "We ensure every query is answered promptly. Our team makes sure that no calls or emails remain unanswered."
    },
    {
      title: "Advanced Technology",
      desc: "Our smart platform with customer-friendly tools helps you access services easily. You can connect with our experts instantly with just one click."
    },
    {
      title: "Hassle-Free Registration",
      desc: "VyomBiz simplifies the registration process for businesses. Leave the paperwork to us while you focus on growing your business."
    },
    {
      title: "Expert Guidance",
      desc: "Our experienced professionals provide clear advice on compliance, taxation, registration, and regulations to help you make the right business decisions."
    },
    {
      title: "Global Network",
      desc: "With a strong network of experts worldwide, we also assist businesses in obtaining global certifications and approvals smoothly."
    }
  ];

  return (
    <section className="py-12 bg-[#ecf2fd] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col lg:flex-row gap-16 items-start">

        {/* Left Side - Grid Cards */}
        <div className="lg:w-[45%] grid grid-cols-1 md:grid-cols-2 gap-6" onMouseLeave={() => setHoveredIndex(0)}>
          {cards.map((card, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              className="h-full"
            >
              <FeatureCard {...card} isActive={hoveredIndex === index} />
            </div>
          ))}
        </div>

        {/* Right Side - Features Content */}
        <div className="lg:w-[55%] pt-4">
          <h2 className="text-4xl font-black text-[#072b47] mb-6 leading-tight">Features of Our <span className="text-[#d99e00]">Legal Service</span></h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
            VyomBiz is a technology-driven platform dedicated to delivering professional legal services across India. We focus on providing reliable solutions to our clients, and our commitment to quality service is reflected in the following ways:
          </p>

          <div className="space-y-4">
            {features.map((item, index) => (
              <div key={index} className="flex gap-4 items-start group">
                <div className="mt-1.5 shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-[#FFE90A] transition-colors duration-300">
                  <CheckCircle2 size={16} className="text-blue-600 group-hover:text-[#072b47] transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-[#072b47] font-bold text-lg mb-1 group-hover:text-blue-600 transition-colors">{item.title}:</h4>
                  <p className="text-slate-500 font-medium leading-normal text-[15px]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LegalFeatures;
