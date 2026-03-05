// BrandLogos.jsx
import React from "react";

const BrandLogos = () => {
  const brands = [
    { name: "Adkryoss", image: "/Brands/adkryoss-logo-white--png.png" },
    { name: "Clink", image: "/Brands/clink-logo.png" },
    { name: "Clink Consultancy", image: "/Brands/clinkconsultancyservice.jpg" },
    { name: "Edulinker", image: "/Brands/edulinker.png" },
    { name: "Kryoss", image: "/Brands/kryoss.jpg" },
    { name: "Medikryoss", image: "/Brands/medikryoss.png" },
    { name: "Zryoss", image: "/Brands/zryoss.png" }
  ];

  // Duplicate brands for seamless scrolling
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="w-full bg-gray-800 py-4 md:py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center gap-8 md:gap-12 lg:gap-16 animate-scroll">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={index}
              className="shrink-0 flex items-center justify-center min-w-[120px] md:min-w-[150px]"
            >
              <img
                src={brand.image}
                alt={`${brand.name} logo`}
                className="max-h-12 md:max-h-16 w-auto object-contain drop-shadow transition-transform hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default BrandLogos;
