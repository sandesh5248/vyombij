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

  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="w-full bg-black py-10 overflow-hidden">
      <div className="w-full overflow-hidden">
        <div className="flex gap-10 w-max animate-scroll">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={index}
              className="
                flex-shrink-0
                bg-white
                rounded-2xl
                shadow-md
                w-[220px]
                h-[100px]
                flex
                items-center
                justify-center
                p-6
              "
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="max-h-12 w-auto object-contain"
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
      transform: translateX(-50%);
    }
  }

  .animate-scroll {
    animation: scroll 60s linear infinite;
  }
`}</style>
    </section>
  );
};

export default BrandLogos;